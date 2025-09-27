import { useState, useEffect, useCallback } from "react";
import { getAllUsers, UserInfo, PageResponse } from "@/services/userService";

export interface Customer {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  address: string | null;
  status: string;
  avatarUrl?: string | null;
  roles: string[];
  totalOrders?: number;
  totalSpent?: number;
  lastOrderDate?: string | null;
  isActive?: boolean;
}


export const useCustomers = (token: string, initialPage = 0, initialSize = 12) => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(initialPage);
  const [size, setSize] = useState(initialSize);
  const [totalPages, setTotalPages] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrevious, setHasPrevious] = useState(false);

  // mapping UserInfo -> Customer
  const mapToCustomer = (user: UserInfo): Customer => ({
    id: user.code,
    name: user.fullName || user.username || user.account,
    email: user.email ?? null,
    phone: user.phone ?? null,
    address: user.currentAddress ?? null,
    status: user.status,
    avatarUrl: user.avatarUrl ?? null,
    roles: user.roles,
  });

  const fetchCustomers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data: PageResponse<UserInfo> = await getAllUsers(token, page, size);

      setCustomers(data.content.map(mapToCustomer));
      setTotalPages(data.totalPages);
      setTotalElements(data.totalElements);
      setHasNext(data.hasNext);
      setHasPrevious(data.hasPrevious);
    } catch (err: any) {
      setError(err.message || "Failed to fetch customers");
    } finally {
      setLoading(false);
    }
  }, [token, page, size]);

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  return {
    customers,
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
    refetch: fetchCustomers,
  };
};
