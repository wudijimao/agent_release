const DEFAULT_LOGIN_DESTINATION = "/chat/new";
const CONTROL_CHARACTER_PATTERN = /[\u0000-\u001f\u007f]/;

function decodeForValidation(value: string) {
  let decoded = value;

  for (let index = 0; index < 2; index += 1) {
    try {
      const next = decodeURIComponent(decoded);
      if (next === decoded) break;
      decoded = next;
    } catch {
      return null;
    }
  }

  return decoded;
}

export function resolveLoginDestination(
  value: string | string[] | undefined,
): string {
  if (typeof value !== "string") return DEFAULT_LOGIN_DESTINATION;

  const candidate = value.trim();
  const decoded = decodeForValidation(candidate);
  if (
    !decoded ||
    !decoded.startsWith("/") ||
    decoded.startsWith("//") ||
    decoded.includes("\\") ||
    CONTROL_CHARACTER_PATTERN.test(decoded)
  ) {
    return DEFAULT_LOGIN_DESTINATION;
  }

  const base = new URL("https://bioagent.local");
  const destination = new URL(candidate, base);
  if (destination.origin !== base.origin || destination.pathname === "/login") {
    return DEFAULT_LOGIN_DESTINATION;
  }

  return `${destination.pathname}${destination.search}${destination.hash}`;
}
