const API_BASE_URL = "http://localhost:8080";

export const productService = {
  async getProducts(page = 1, size = 12) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/services/product-service/api/product?page=${page}&size=${size}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      const payload = result.data ?? {};

      return {
        content: payload.content ?? [],
        totalPages: payload.total_pages ?? 1,
        totalElements: payload.total_elements ?? (payload.content?.length ?? 0),
        page: payload.current_page ?? page,
        size,
        hasNext: payload.has_next ?? false,
        hasPrevious: payload.has_previous ?? false,
      };
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
};
