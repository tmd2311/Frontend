import { BASE_AUTH_API_URL } from "@/utils/configAPI";

export interface UserInfo {
  code: string;
  account: string;
  username?: string | null;
  fullName?: string | null;
  email?: string | null;
  phone?: string | null;
  avatarUrl?: string | null;
  currentAddress?: string | null;
  lastLogin?: string | null;
  status: string;
  roles: string[];
}

export interface PageResponse<T> {
  content: T[];
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
  currentPage: number;
  totalElements: number;
}

export async function getAllUsers(
  token: string,
  page: number = 0,
  size: number = 12
): Promise<PageResponse<UserInfo>> {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    size: size.toString(),
  });

  const response = await fetch(
    `${BASE_AUTH_API_URL}/api/v1/user/getAllUser?${queryParams.toString()}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  const payload = result.data ?? {};

  return {
    content: (payload.content as UserInfo[]) ?? [],
    totalPages: payload.total_pages ?? 1,
    hasNext: payload.has_next ?? false,
    hasPrevious: payload.has_previous ?? false,
    currentPage: payload.current_page ?? page,
    totalElements: payload.total_elements ?? 0,
  };
}
