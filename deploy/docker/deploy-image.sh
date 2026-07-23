#!/usr/bin/env bash
set -euo pipefail

IMAGE="${1:-}"
CONTAINER_NAME="${BIOAGENT_NEXTJS_CONTAINER:-bioagent-nextjs}"
PUBLIC_HOST="${BIOAGENT_NEXTJS_BIND_IP:-0.0.0.0}"
PUBLIC_PORT="${BIOAGENT_NEXTJS_PORT:-3002}"
CONTAINER_PORT=3000
API_URL="${BIOAGENT_API_URL:-${BACKEND_URL:-http://39.106.18.219}}"
PREVIOUS_CONTAINER="${CONTAINER_NAME}-previous"

fail() {
  echo "ERROR: $*" >&2
  exit 1
}

command -v docker >/dev/null 2>&1 || fail "Docker is required"
docker info >/dev/null 2>&1 || fail "Docker daemon is not available"

[[ -n "${IMAGE}" ]] || fail "usage: deploy-image.sh <image:tag>"
[[ "${CONTAINER_NAME}" =~ ^[A-Za-z0-9_.-]+$ ]] ||
  fail "invalid BIOAGENT_NEXTJS_CONTAINER: ${CONTAINER_NAME}"
[[ "${PUBLIC_PORT}" =~ ^[0-9]+$ ]] && (( PUBLIC_PORT >= 1 && PUBLIC_PORT <= 65535 )) ||
  fail "BIOAGENT_NEXTJS_PORT must be between 1 and 65535"
[[ "${PUBLIC_HOST}" != *[[:space:]]* ]] ||
  fail "BIOAGENT_NEXTJS_BIND_IP cannot contain whitespace"
[[ "${API_URL}" != *[[:space:]]* ]] ||
  fail "BIOAGENT_API_URL cannot contain whitespace"

docker image inspect "${IMAGE}" >/dev/null 2>&1 ||
  fail "image not found: ${IMAGE}"

rollback() {
  echo "Deployment failed; restoring previous container." >&2
  docker rm --force "${CONTAINER_NAME}" >/dev/null 2>&1 || true
  if docker container inspect "${PREVIOUS_CONTAINER}" >/dev/null 2>&1; then
    docker rename "${PREVIOUS_CONTAINER}" "${CONTAINER_NAME}"
    docker start "${CONTAINER_NAME}" >/dev/null
  fi
}

docker rm --force "${PREVIOUS_CONTAINER}" >/dev/null 2>&1 || true
if docker container inspect "${CONTAINER_NAME}" >/dev/null 2>&1; then
  docker stop "${CONTAINER_NAME}" >/dev/null
  docker rename "${CONTAINER_NAME}" "${PREVIOUS_CONTAINER}"
fi

if ! docker run \
  --detach \
  --name "${CONTAINER_NAME}" \
  --restart unless-stopped \
  --add-host host.docker.internal:host-gateway \
  --publish "${PUBLIC_HOST}:${PUBLIC_PORT}:${CONTAINER_PORT}" \
  --env "BIOAGENT_API_URL=${API_URL}" \
  --env "BACKEND_URL=${API_URL}" \
  "${IMAGE}" >/dev/null; then
  rollback
  fail "failed to create container from ${IMAGE}"
fi

for _ in $(seq 1 30); do
  health_status="$(docker inspect --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}none{{end}}' "${CONTAINER_NAME}")"
  if [[ "${health_status}" == "healthy" ]]; then
    docker rm --force "${PREVIOUS_CONTAINER}" >/dev/null 2>&1 || true
    echo "Deployment succeeded: ${IMAGE}"
    echo "Public URL: http://<server-ip>:${PUBLIC_PORT}"
    echo "Logs: docker logs -f ${CONTAINER_NAME}"
    exit 0
  fi
  if [[ "${health_status}" == "unhealthy" ]]; then
    break
  fi
  sleep 2
done

docker logs --tail 100 "${CONTAINER_NAME}" >&2 || true
rollback
fail "container did not become healthy"
