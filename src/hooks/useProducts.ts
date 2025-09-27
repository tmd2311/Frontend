import { useCallback, useEffect, useState } from "react";
import { productService } from "../services/productService";
import { ProductSearchRequest } from "@/types/product";

export const useProducts = (page = 0, size = 12) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState({
    page,
    size,
    totalPages: 1,
    hasNext: false,
    hasPrevious: false,
  });

  const [productDetail, setProductDetail] = useState<any | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [errorDetail, setErrorDetail] = useState<string | null>(null);

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
    } catch (err: any) {
      setError(err.message || "Lỗi khi tải sản phẩm");
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async (id: string, data: any, token: string) => {
    try {
      setLoading(true);
      setError(null);
      const updated = await productService.updateProduct(id, data, token);

      setProducts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, ...updated } : p))
      );

      return updated;
    } catch (err: any) {
      setError(err.message || "Lỗi khi cập nhật sản phẩm");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: string, token: string) => {
    try {
      setLoading(true);
      setError(null);
      await productService.deleteProduct(id, token);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      setMeta((prev) => ({
        ...prev,
        totalPages: Math.ceil((prev.totalPages * prev.size - 1) / prev.size),
      }));
    } catch (err: any) {
      setError(err.message || "Lỗi khi xóa sản phẩm");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getProductById = useCallback(async (id: string) => {
    try {
      setLoadingDetail(true);
      setErrorDetail(null);
      const res = await productService.getProductById(id);
      const product = res.data;

      if (!product) throw new Error("Không có dữ liệu sản phẩm");

      const formatted = {
        id: product.id,
        title: product.name,
        description: product.description,
        price: product.price,
        discountedPrice: product.price,
        images: [product.thumbnailUrl],
        rating: product.rating ?? 4.7,
        reviews: product.reviews ?? 5,
        inStock: product.inStock ?? true,
      };

      setProductDetail(formatted);
      return formatted;
    } catch (err: any) {
      setErrorDetail(err.message || "Lỗi khi tải chi tiết sản phẩm");
      setProductDetail(null);
      throw err;
    } finally {
      setLoadingDetail(false);
    }
  }, []);

  const searchProducts = async (searchRequest: ProductSearchRequest, pageParam = page, sizeParam = size) => {
    try {
      setLoading(true);
      setError(null);
      const result = await productService.searchProducts(searchRequest, pageParam, sizeParam);
      
      setProducts(result.content);
      setMeta({
        page: result.page,
        size: result.size,
        totalPages: result.totalPages ?? 1,
        hasNext: result.hasNext ?? false,
        hasPrevious: result.hasPrevious ?? false,
      });

      return result.content;
    } catch (err: any) {
      setError(err.message || "Lỗi khi tìm kiếm sản phẩm");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page, size]);

  return {
    products,
    loading,
    error,
    meta,
    refetch: fetchProducts,
    setProducts,
    updateProduct,
    deleteProduct,
    productDetail,
    loadingDetail,
    errorDetail,
    getProductById,
    searchProducts,
  };
};