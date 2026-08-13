export const ATTACHMENT_TOO_LARGE_MESSAGE = "附件尺寸过大";

export function isPayloadTooLargeError(error: unknown) {
  const status =
    typeof error === "object" && error !== null && "status" in error
      ? (error as { status?: unknown }).status
      : undefined;
  const message = error instanceof Error ? error.message : "";

  return (
    status === 413 ||
    /\b(?:HTTP\s*)?413\b|request entity too large|payload too large/i.test(message)
  );
}
