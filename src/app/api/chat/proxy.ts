const DEVELOPMENT_BACKEND_URL = "http://39.106.18.219";
const PRODUCTION_BACKEND_URL = "http://localhost:3000";

const REQUEST_FORWARD_HEADERS = [
  "accept",
  "authorization",
  "content-type",
  "cookie",
  "user-agent",
  "x-lab-id",
  "x-bioagent-request-id",
  "x-bioagent-debug-task-trace",
] as const;

const RESPONSE_SKIP_HEADERS = new Set([
  "connection",
  "content-encoding",
  "content-length",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
]);

export function resolveChatBackendUrl(input: {
  backendUrl?: string;
  apiUrl?: string;
  nodeEnv?: string;
}) {
  const baseUrl =
    input.backendUrl ||
    input.apiUrl ||
    (input.nodeEnv === "development"
      ? DEVELOPMENT_BACKEND_URL
      : PRODUCTION_BACKEND_URL);

  return `${baseUrl.replace(/\/+$/, "")}/api/chat`;
}

export function buildChatProxyRequestHeaders(requestHeaders: Headers) {
  const headers = new Headers();
  for (const key of REQUEST_FORWARD_HEADERS) {
    const value = requestHeaders.get(key);
    if (value) headers.set(key, value);
  }
  headers.set("accept", "text/event-stream");
  headers.set("accept-encoding", "identity");
  return headers;
}

export function buildChatProxyResponseHeaders(upstreamHeaders: Headers) {
  const headers = new Headers();
  upstreamHeaders.forEach((value, key) => {
    if (!RESPONSE_SKIP_HEADERS.has(key.toLowerCase())) {
      headers.set(key, value);
    }
  });
  headers.set(
    "Content-Type",
    upstreamHeaders.get("content-type") || "text/event-stream; charset=utf-8",
  );
  headers.set("Cache-Control", "no-cache, no-transform");
  headers.set("X-Accel-Buffering", "no");
  return headers;
}

export async function proxyChatRequest(
  request: Request,
  options: { backendUrl: string; fetch?: typeof fetch },
) {
  try {
    const upstream = await (options.fetch ?? globalThis.fetch)(options.backendUrl, {
      method: "POST",
      headers: buildChatProxyRequestHeaders(request.headers),
      body: await request.text(),
      cache: "no-store",
      redirect: "manual",
      signal: request.signal,
    });

    return new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: buildChatProxyResponseHeaders(upstream.headers),
    });
  } catch {
    return Response.json(
      {
        error: {
          code: "STREAM_PROXY_FAILED",
          message: "Chat stream proxy failed",
        },
      },
      { status: 502 },
    );
  }
}
