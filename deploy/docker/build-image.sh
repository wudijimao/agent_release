#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/../.." && pwd)"

IMAGE_REPOSITORY="${BIOAGENT_NEXTJS_IMAGE:-bioagent-nextjs}"
IMAGE_TAG="${1:-${BIOAGENT_NEXTJS_TAG:-}}"
API_URL="${BIOAGENT_API_URL:-${BACKEND_URL:-http://39.106.18.219}}"

fail() {
  echo "ERROR: $*" >&2
  exit 1
}

command -v docker >/dev/null 2>&1 || fail "Docker is required"
docker info >/dev/null 2>&1 || fail "Docker daemon is not available"

[[ -f "${REPO_ROOT}/pnpm-lock.yaml" ]] || fail "pnpm-lock.yaml not found in ${REPO_ROOT}"
[[ -f "${REPO_ROOT}/packages/chatui/dist/index.js" ]] ||
  fail "packages/chatui/dist is missing; regenerate this release repository"
[[ "${IMAGE_REPOSITORY}" =~ ^[A-Za-z0-9._/-]+$ ]] ||
  fail "invalid BIOAGENT_NEXTJS_IMAGE: ${IMAGE_REPOSITORY}"
[[ "${API_URL}" != *[[:space:]]* ]] ||
  fail "BIOAGENT_API_URL cannot contain whitespace"

if [[ -z "${IMAGE_TAG}" ]]; then
  if git -C "${REPO_ROOT}" rev-parse --short HEAD >/dev/null 2>&1; then
    IMAGE_TAG="$(git -C "${REPO_ROOT}" rev-parse --short HEAD)"
  else
    IMAGE_TAG="$(date +%Y%m%d-%H%M%S)"
  fi
fi

[[ "${IMAGE_TAG}" =~ ^[A-Za-z0-9_.-]+$ ]] || fail "invalid image tag: ${IMAGE_TAG}"

IMAGE="${IMAGE_REPOSITORY}:${IMAGE_TAG}"
SOURCE_COMMIT="$(git -C "${REPO_ROOT}" rev-parse HEAD 2>/dev/null || echo unknown)"

echo "Building ${IMAGE}"
echo "Backend baked into image: ${API_URL}"

docker build \
  --file "${SCRIPT_DIR}/Dockerfile" \
  --build-arg "BIOAGENT_API_URL=${API_URL}" \
  --label "org.opencontainers.image.source=agent_release" \
  --label "org.opencontainers.image.revision=${SOURCE_COMMIT}" \
  --tag "${IMAGE}" \
  "${REPO_ROOT}"

echo "Image ready: ${IMAGE}"
