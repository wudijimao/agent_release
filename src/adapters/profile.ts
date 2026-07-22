import type { UpdateCurrentUserAvatarResponse } from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";

const AVATAR_MAX_BYTES = 2 * 1024 * 1024;
const AVATAR_ACCEPTED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const AVATAR_PATH = "/api/auth/me/avatar";

type ProfileApi = Pick<ApiClient, "patch">;
type AvatarFileMetadata = Pick<File, "size" | "type">;

export function validateAvatarFile(file: AvatarFileMetadata) {
  if (!AVATAR_ACCEPTED_TYPES.has(file.type)) {
    return "头像仅支持 PNG、JPG、WEBP";
  }
  if (file.size > AVATAR_MAX_BYTES) {
    return "头像大小不能超过 2MB";
  }
  return "";
}

export async function updateCurrentUserAvatar(api: ProfileApi, file: File) {
  const validationError = validateAvatarFile(file);
  if (validationError) throw new Error(validationError);

  const formData = new FormData();
  formData.set("avatar", file);
  return api.patch<UpdateCurrentUserAvatarResponse>(AVATAR_PATH, formData);
}
