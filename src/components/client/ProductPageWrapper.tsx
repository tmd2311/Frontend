"use client";

import React from "react";
import ProductManagement from "@/components/server/ProductManagement";
import { useProducts } from "@/hooks/useProducts";

const ProductPageWrapper = () => {
  const { products, loading, error, setProducts } = useProducts();

  const handleDelete = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <ProductManagement
      products={products}
      onDeleteProduct={handleDelete}
    />
  );
};

export default ProductPageWrapper;
