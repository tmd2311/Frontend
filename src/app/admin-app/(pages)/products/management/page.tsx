"use client";

import React, { useState } from "react";
import { Product } from "../../../../../types/Admin";
import ProductManagement from "../../../../../components/server/ProductManagement";
import { mockProducts } from "../../../../../utils/mockData";
import { useProducts } from "@/hooks/useProducts";

const ProductPage = () => {
    const { products, loading, error, setProducts } = useProducts();

  const handleDelete = (id: string) => {
    
  };

  return (
    <ProductManagement
      products={products}
      onDeleteProduct={handleDelete}
    />
  );
};

export default ProductPage;
