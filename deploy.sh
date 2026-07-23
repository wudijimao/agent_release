#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
IMAGE_REPOSITORY="${BIOAGENT_NEXTJS_IMAGE:-bioagent-nextjs}"

fail() {
  echo "ERROR: $*" >&2
  exit 1
}

[[ "$#" -eq 0 ]] || fail "deploy.sh does not accept arguments; configure it through BIOAGENT_* environment variables"
command -v git >/dev/null 2>&1 || fail "Git is required"

if git -C "${SCRIPT_DIR}" rev-parse --short HEAD >/dev/null 2>&1; then
  IMAGE_TAG="$(git -C "${SCRIPT_DIR}" rev-parse --short HEAD)"
else
  IMAGE_TAG="$(date +%Y%m%d-%H%M%S)"
fi

echo "Deploying ${IMAGE_REPOSITORY}:${IMAGE_TAG}"
bash "${SCRIPT_DIR}/deploy/docker/build-image.sh" "${IMAGE_TAG}"
bash "${SCRIPT_DIR}/deploy/docker/deploy-image.sh" "${IMAGE_REPOSITORY}:${IMAGE_TAG}"
