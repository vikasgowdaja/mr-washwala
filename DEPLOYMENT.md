# Production Deployment Guide (Ubuntu 24.04)

This guide is tailored for your Hostinger VPS.

## 1) One-time server preparation

Run these commands after SSH login:

```bash
sudo apt update && sudo apt upgrade -y
sudo reboot
```

Reconnect after reboot, then run:

```bash
sudo apt install -y curl git rsync ufw
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs nginx
node -v
npm -v
```

Expected Node version: 22.x (or any >= 20.19.0).

## 2) Upload or clone your project

```bash
mkdir -p /opt/apps
cd /opt/apps
# If using git:
# git clone <your-repo-url> mr-washwala
cd mr-washwala
```

## 3) Run production deployment script

```bash
chmod +x scripts/deploy-ubuntu.sh
DOMAIN=yourdomain.com APP_NAME=mr-washwala ./scripts/deploy-ubuntu.sh
```

If domain DNS is not ready yet, use:

```bash
DOMAIN=_ APP_NAME=mr-washwala ./scripts/deploy-ubuntu.sh
```

## 4) Firewall (recommended)

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable
sudo ufw status
```

## 5) HTTPS with Let's Encrypt (recommended)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## 6) Update deployment (every release)

From project directory:

```bash
git pull
./scripts/deploy-ubuntu.sh
```

## 7) Health checks

```bash
npm run check
sudo nginx -t
systemctl status nginx --no-pager
curl -I http://127.0.0.1
```

## Notes

- This project is a static Vite build deployed via Nginx.
- `npm run start` is available for quick preview and binds to `0.0.0.0:4173`.
- Nginx is the production web server.
