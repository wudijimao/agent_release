const DEFAULT_SERVER_API_URL = "http://localhost:3000";

export function normalizeApiBaseUrl(value: string) {
  return value.trim().replace(/\/+$/, "");
}

export function getDefaultApiBaseUrl() {
  if (typeof window !== "undefined") return "";

  return normalizeApiBaseUrl(
    process.env.BIOAGENT_API_URL ||
      process.env.BACKEND_URL ||
      DEFAULT_SERVER_API_URL,
  );
}
