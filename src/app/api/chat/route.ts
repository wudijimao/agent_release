import type { NextRequest } from "next/server";

import { proxyChatRequest, resolveChatBackendUrl } from "./proxy";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const backendUrl = resolveChatBackendUrl({
  backendUrl: process.env.BACKEND_URL,
  apiUrl: process.env.BIOAGENT_API_URL || process.env.NEXT_PUBLIC_API_URL,
  nodeEnv: process.env.NODE_ENV,
});

export function POST(request: NextRequest) {
  return proxyChatRequest(request, { backendUrl });
}
