# Project Facebook Lite Backend

## Local
- Docker compose UP: `docker compose -f ./infra/docker-compose-local.yml -p facebook_lite_backend --env-file ./.env up --build --remove-orphans -d`

- Docker compose Down: `docker compose -f ./infra/docker-compose-local.yml -p facebook_lite_backend --env-file ./.env down --remove-orphans`

- Docker compose Down DELETE VOLUMES: `docker compose -f ./infra/docker-compose-local.yml -p facebook_lite_backend --env-file ./.env down --remove-orphans --volumes`

## Prod