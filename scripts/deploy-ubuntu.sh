#!/usr/bin/env bash
set -Eeuo pipefail

APP_NAME="${APP_NAME:-mr-washwala}"
DOMAIN="${DOMAIN:-_}"
APP_ROOT="/var/www/${APP_NAME}"
BUILD_DIR="dist"
NGINX_SITE="/etc/nginx/sites-available/${APP_NAME}"
NGINX_LINK="/etc/nginx/sites-enabled/${APP_NAME}"

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

if ! command -v nginx >/dev/null 2>&1; then
  echo "Installing nginx..."
  ${SUDO} apt update -y
  ${SUDO} apt install -y nginx
fi

echo "Installing project dependencies..."
npm ci

echo "Building production assets..."
npm run build:prod

if [ ! -d "${BUILD_DIR}" ]; then
  echo "Error: build output '${BUILD_DIR}' was not created."
  exit 1
fi

echo "Deploying files to ${APP_ROOT}..."
${SUDO} mkdir -p "${APP_ROOT}"
${SUDO} rsync -a --delete "${BUILD_DIR}/" "${APP_ROOT}/"

echo "Writing nginx site config..."
${SUDO} tee "${NGINX_SITE}" >/dev/null <<EOF
server {
  listen 80;
  listen [::]:80;
  server_name ${DOMAIN};

  root ${APP_ROOT};
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

echo "Deployment completed."
echo "Site root: ${APP_ROOT}"
echo "Domain: ${DOMAIN}"
