import { useEffect, useState } from "react";
import { productService } from "../services/productService";

export const useProducts = (page = 1, size = 12) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [meta, setMeta] = useState({ page, size, totalPages: 1, hasNext: false, hasPrevious: false });

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await productService.getProducts(page, size);
      setProducts(result.content);
      setMeta({
        page: result.page,
        size: result.size,
        totalPages: result.totalPages,
        hasNext: result.hasNext,
        hasPrevious: result.hasPrevious,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page, size]);

  return { products, loading, error, meta, refetch: fetchProducts };
};
