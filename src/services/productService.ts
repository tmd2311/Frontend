const API_BASE_URL = "http://localhost:8080/services/product-service";

export const productService = {
  async getProducts(page = 1, size = 12) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/product?page=${page}&size=${size}`,
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

  async updateProduct(productId, data, token) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/product/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  },
  async deleteProduct(productId, token) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/delete?id=${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
      return await response.json();
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  },

  async getProductById(productId: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/product/${productId}`, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching product by id:", error);
      throw error;
    }
  },
};


