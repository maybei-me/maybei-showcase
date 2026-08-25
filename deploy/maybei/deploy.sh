#!/usr/bin/env bash

set -Eeuo pipefail

APP_ROOT="${APP_ROOT:-/opt/maybei-showcase}"
COMPOSE_FILE="$APP_ROOT/deploy/maybei/docker-compose.yml"
TARGET_SHA="${1:?Deployment commit SHA is required}"
REPO_URL="${REPO_URL:-https://github.com/maybei-me/maybei-showcase.git}"

cd "$APP_ROOT"

test -f "$APP_ROOT/.env" || {
  echo "Missing $APP_ROOT/.env"
  exit 1
}

if [ ! -d "$APP_ROOT/.git" ]; then
  git init
  git remote add origin "$REPO_URL"
fi

git fetch --prune origin main
git cat-file -e "${TARGET_SHA}^{commit}"
git reset --hard "$TARGET_SHA"
git clean -fd -e .env

docker compose --env-file "$APP_ROOT/.env" -f "$COMPOSE_FILE" config >/dev/null
docker compose --env-file "$APP_ROOT/.env" -f "$COMPOSE_FILE" up -d --build --remove-orphans

for attempt in $(seq 1 30); do
  if docker compose --env-file "$APP_ROOT/.env" -f "$COMPOSE_FILE" exec -T app sh -lc \
    "node -e \"fetch('http://127.0.0.1:3000/').then((response) => { if (!response.ok) process.exit(1); }).catch(() => process.exit(1));\""
  then
    echo "Deployment completed: $TARGET_SHA"
    exit 0
  fi

  sleep 2
done

docker compose --env-file "$APP_ROOT/.env" -f "$COMPOSE_FILE" ps
docker compose --env-file "$APP_ROOT/.env" -f "$COMPOSE_FILE" logs --tail=100 app
exit 1
