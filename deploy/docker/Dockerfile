FROM node:20.19.5-bookworm-slim AS base

ENV PNPM_HOME=/pnpm
ENV PATH="${PNPM_HOME}:${PATH}"

RUN corepack enable
WORKDIR /app

FROM base AS dependencies

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.base.json ./
COPY packages/chatui/package.json packages/chatui/package.json
COPY packages/shared/package.json packages/shared/package.json

RUN corepack pnpm@9.0.0 install \
    --frozen-lockfile \
    --filter @bioagent/nextjs...

FROM dependencies AS builder

ARG BIOAGENT_API_URL=http://39.106.18.219
ENV BIOAGENT_API_URL="${BIOAGENT_API_URL}"
ENV BACKEND_URL="${BIOAGENT_API_URL}"
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_OUTPUT_STANDALONE=1
ENV NEXT_OUTPUT_TRACING_ROOT=/app

COPY . .

RUN test -f packages/chatui/dist/index.js \
 && test -f packages/chatui/dist/style.css \
 && corepack pnpm@9.0.0 --filter @bioagent/shared build \
 && corepack pnpm@9.0.0 exec next build

FROM node:20.19.5-bookworm-slim AS runner

ARG BIOAGENT_API_URL=http://39.106.18.219
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000
ENV BIOAGENT_API_URL="${BIOAGENT_API_URL}"
ENV BACKEND_URL="${BIOAGENT_API_URL}"

WORKDIR /app

COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static
COPY --from=builder --chown=node:node /app/public ./public

USER node
EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=5s --start-period=20s --retries=6 \
  CMD ["node", "-e", "fetch('http://127.0.0.1:3000/').then(r => { if (r.status >= 500) process.exit(1) }).catch(() => process.exit(1))"]

CMD ["node", "server.js"]
