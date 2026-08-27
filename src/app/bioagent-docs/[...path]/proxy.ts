const DEFAULT_SERVICE_URL = "https://helialab.cn";

const REQUEST_HEADERS = [
  "accept",
  "content-length",
  "content-type",
  "if-match",
  "if-modified-since",
  "if-none-match",
  "range",
] as const;

const RESPONSE_SKIP_HEADERS = new Set([
  "connection",
  "content-encoding",
  "content-length",
  "keep-alive",
  "transfer-encoding",
]);

export function resolveStorageProxyConfig(input: {
  storageUrl?: string;
  publicStorageUrl?: string;
}) {
  const publicStorageUrl = input.publicStorageUrl || DEFAULT_SERVICE_URL;
  const storageUrl = input.storageUrl || DEFAULT_SERVICE_URL;

  return {
    storageUrl: storageUrl.replace(/\/+$/, ""),
    publicHost: new URL(publicStorageUrl).host,
  };
}

function requestHeaders(source: Headers, publicHost: string) {
  const headers = new Headers();
  for (const name of REQUEST_HEADERS) {
    const value = source.get(name);
    if (value) headers.set(name, value);
  }
  headers.set("host", publicHost);
  return headers;
}

function responseHeaders(source: Headers) {
  const headers = new Headers();
  source.forEach((value, name) => {
    if (!RESPONSE_SKIP_HEADERS.has(name.toLowerCase())) headers.set(name, value);
  });
  return headers;
}

export async function proxyStorageRequest(
  request: Request,
  options: {
    path: string[];
    storageUrl: string;
    publicHost: string;
    fetch?: typeof fetch;
  },
) {
  const path = options.path.map(encodeURIComponent).join("/");
  const requestUrl = new URL(request.url);
  const upstreamUrl = `${options.storageUrl}/bioagent-docs/${path}${requestUrl.search}`;
  const hasBody = request.method !== "GET" && request.method !== "HEAD";
  const init: RequestInit & { duplex?: "half" } = {
    method: request.method,
    headers: requestHeaders(request.headers, options.publicHost),
    body: hasBody ? request.body : undefined,
    cache: "no-store",
    redirect: "manual",
    signal: request.signal,
  };
  if (hasBody) init.duplex = "half";

  try {
    const upstream = await (options.fetch ?? globalThis.fetch)(upstreamUrl, init);
    return new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: responseHeaders(upstream.headers),
    });
  } catch {
    return Response.json(
      { error: { code: "STORAGE_PROXY_FAILED", message: "Storage proxy failed" } },
      { status: 502 },
    );
  }
}
