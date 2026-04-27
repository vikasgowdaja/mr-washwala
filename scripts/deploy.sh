#!/bin/bash
set -e

# Deployment script for Mr. WashWala
# Usage:
#   ./scripts/deploy.sh washwala    # Deploy to /var/www/connect2future/washwala/ with base=/washwala/
#   ./scripts/deploy.sh main        # Deploy to /var/www/connect2future/main/ with base=/
#   ./scripts/deploy.sh             # Default: washwala

TARGET="${1:-washwala}"

# Validate target
if [[ "$TARGET" != "washwala" && "$TARGET" != "main" ]]; then
    echo "❌ Invalid target: $TARGET"
    echo "Usage: ./scripts/deploy.sh [washwala|main]"
    exit 1
fi

echo "🚀 Deploying Mr. WashWala to: $TARGET"

# Set paths based on target
if [[ "$TARGET" == "washwala" ]]; then
    DEPLOY_PATH="/var/www/connect2future/washwala"
    BASE_PATH="/washwala/"
    echo "📍 Base path: $BASE_PATH"
else
    DEPLOY_PATH="/var/www/connect2future/main"
    BASE_PATH="/"
    echo "📍 Base path: / (root)"
fi

# Build
echo "🔨 Building with base path: $BASE_PATH"
npm ci
npm run build -- --base="$BASE_PATH"

# Deploy
echo "📤 Deploying to: $DEPLOY_PATH"
sudo mkdir -p "$DEPLOY_PATH"
sudo rsync -a --delete dist/ "$DEPLOY_PATH/"
sudo chown -R www-data:www-data /var/www/connect2future

# Reload Nginx
echo "🔄 Reloading Nginx..."
sudo nginx -t
sudo systemctl reload nginx

echo "✅ Deployment complete!"
echo "🌐 Live at: https://connect2future.com/$TARGET/"
