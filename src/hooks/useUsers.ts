import { useState, useEffect, useCallback } from "react";
import { getAllUsers, UserInfo, PageResponse } from "@/services/userService";

export const useUsers = (token: string, initialPage = 0, initialSize = 12) => {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(initialPage);
  const [size, setSize] = useState(initialSize);
  const [totalPages, setTotalPages] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrevious, setHasPrevious] = useState(false);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data: PageResponse<UserInfo> = await getAllUsers(token, page, size);
      setUsers(data.content);
      setTotalPages(data.totalPages);
      setTotalElements(data.totalElements);
      setHasNext(data.hasNext);
      setHasPrevious(data.hasPrevious);
    } catch (err: any) {
      setError(err.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  }, [token, page, size]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return {
    users,
    loading,
    error,
    page,
    size,
    totalPages,
    totalElements,
    hasNext,
    hasPrevious,
    setPage,
    setSize,
    refetch: fetchUsers,
  };
};
