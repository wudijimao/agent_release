const OBJECT_STORAGE_PATH = "/bioagent-docs/";
const ABSOLUTE_OBJECT_STORAGE_URL =
  /https?:\/\/[^/\s"'<>]+(\/bioagent-docs\/[^\s"'<>]*)/gi;

function rewriteString(value: string) {
  return value.replace(ABSOLUTE_OBJECT_STORAGE_URL, "$1");
}

export function rewriteServiceResourceUrls(value: unknown): unknown {
  if (typeof value === "string") {
    return value.includes(OBJECT_STORAGE_PATH) ? rewriteString(value) : value;
  }

  if (Array.isArray(value)) {
    return value.map(rewriteServiceResourceUrls);
  }

  if (typeof value !== "object" || value === null) return value;

  const rewritten: Record<string, unknown> = {};
  for (const [key, child] of Object.entries(value)) {
    rewritten[key] = rewriteServiceResourceUrls(child);
  }
  return rewritten;
}
