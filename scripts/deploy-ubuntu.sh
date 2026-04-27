#!/usr/bin/env bash
set -Eeuo pipefail

APP_NAME="${APP_NAME:-mr-washwala}"
DOMAIN="${DOMAIN:-_}"
APP_ROOT="${APP_ROOT:-/var/www/${APP_NAME}}"
DEPLOY_PATH="${DEPLOY_PATH:-${APP_ROOT}}"
BASE_PATH="${BASE_PATH:-/}"
BUILD_DIR="dist"
NGINX_SITE="/etc/nginx/sites-available/${APP_NAME}"
NGINX_LINK="/etc/nginx/sites-enabled/${APP_NAME}"
MANAGE_NGINX="${MANAGE_NGINX:-true}"

is_true() {
  case "${1,,}" in
    1|true|yes|y) return 0 ;;
    *) return 1 ;;
  esac
}

require_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Error: '$1' is required but not installed."
    exit 1
  fi
}

if [ ! -f "package.json" ]; then
  echo "Error: run this script from the project root (package.json not found)."
  exit 1
fi

if [ "$EUID" -eq 0 ]; then
  SUDO=""
else
  SUDO="sudo"
fi

require_command npm
require_command rsync

if is_true "${MANAGE_NGINX}"; then
  if ! command -v nginx >/dev/null 2>&1; then
    echo "Installing nginx..."
    ${SUDO} apt update -y
    ${SUDO} apt install -y nginx
  fi
fi

echo "Installing project dependencies..."
npm ci

echo "Building production assets..."
npm run build:prod -- --base="${BASE_PATH}"

if [ ! -d "${BUILD_DIR}" ]; then
  echo "Error: build output '${BUILD_DIR}' was not created."
  exit 1
fi

echo "Deploying files to ${DEPLOY_PATH}..."
${SUDO} mkdir -p "${DEPLOY_PATH}"
${SUDO} rsync -a --delete "${BUILD_DIR}/" "${DEPLOY_PATH}/"

if is_true "${MANAGE_NGINX}"; then
  echo "Writing nginx site config..."
  ${SUDO} tee "${NGINX_SITE}" >/dev/null <<EOF
server {
  listen 80;
  listen [::]:80;
  server_name ${DOMAIN};

  root ${DEPLOY_PATH};
  index index.html;

  location / {
    try_files \$uri \$uri/ /index.html;
  }

  location ~* \\.(js|css|png|jpg|jpeg|gif|svg|ico|webp|woff2?)$ {
    expires 30d;
    add_header Cache-Control "public, immutable";
    try_files \$uri =404;
  }
}
EOF

  ${SUDO} ln -sfn "${NGINX_SITE}" "${NGINX_LINK}"
  if [ -f "/etc/nginx/sites-enabled/default" ]; then
    ${SUDO} rm -f "/etc/nginx/sites-enabled/default"
  fi

  echo "Validating nginx config..."
  ${SUDO} nginx -t

  echo "Reloading nginx..."
  ${SUDO} systemctl reload nginx
else
  echo "Skipping nginx config update (MANAGE_NGINX=${MANAGE_NGINX})."
fi

echo "Deployment completed."
echo "Site root: ${DEPLOY_PATH}"
echo "Domain: ${DOMAIN}"
echo "Base path: ${BASE_PATH}"
