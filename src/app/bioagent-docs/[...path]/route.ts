import type { NextRequest } from "next/server";

import { proxyStorageRequest, resolveStorageProxyConfig } from "./proxy";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const proxyConfig = resolveStorageProxyConfig({
  storageUrl: process.env.BIOAGENT_STORAGE_URL,
  publicStorageUrl: process.env.BIOAGENT_PUBLIC_STORAGE_URL,
});

type RouteContext = { params: Promise<{ path: string[] }> };

async function handle(request: NextRequest, context: RouteContext) {
  const { path } = await context.params;
  return proxyStorageRequest(request, { path, ...proxyConfig });
}

export const GET = handle;
export const HEAD = handle;
export const PUT = handle;
