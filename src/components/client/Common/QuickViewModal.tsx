"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { useProducts } from "@/hooks/useProducts";

const QuickViewModal: React.FC = () => {
  const { productId, isOpen, closeModal } = useModalContext();
  const { productDetail, loadingDetail, errorDetail, getProductById } = useProducts();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activePreview, setActivePreview] = useState(0);

   useEffect(() => {
    if (productId) {
      getProductById(productId);
    }
  }, [productId, getProductById]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".modal-content")) {
        closeModal();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, closeModal]);

  const handleAddToCart = () => {
    console.log("Add to cart:", productDetail?.id, quantity);
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-30 left-0 w-full h-screen z-50 bg-dark/70 overflow-y-auto sm:px-8 px-4 py-5">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-[1100px] bg-white rounded-xl shadow-3 p-7.5 relative modal-content">
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-meta flex items-center justify-center hover:text-dark"
            aria-label="Close modal"
          >
            ✕
          </button>

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : productDetail ? (
            <div className="flex flex-wrap items-center gap-12.5">
              {/* Ảnh sản phẩm */}
              <div className="max-w-[526px] w-full">
                <div className="flex gap-5">
                  <div className="flex flex-col gap-5">
                    {productDetail.images?.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setActivePreview(index)}
                        className={`w-20 h-20 flex items-center justify-center rounded-lg overflow-hidden border ${
                          activePreview === index ? "border-blue" : "border-gray-200"
                        }`}
                      >
                        <Image src={img} alt={`thumb-${index}`} width={61} height={61} className="aspect-square" />
                      </button>
                    ))}
                  </div>
                  <div className="relative w-full sm:min-h-[508px] bg-gray-100 rounded-lg border flex items-center justify-center">
                    <img
                      src={productDetail.images?.[activePreview] || ""}
                      alt={productDetail.title}
                      className="max-h-[500px] object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Thông tin sản phẩm */}
              <div className="max-w-[445px] w-full">
                <h3 className="text-xl font-semibold mb-4">{productDetail.title}</h3>
                <p className="mb-6">{productDetail.description}</p>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-yellow-500 font-medium">{productDetail.rating || "4.7"} ★</span>
                  <span className="text-gray-500">({productDetail.reviews || 5} reviews)</span>
                  <span className="text-green-600 ml-4">{productDetail.inStock ? "In Stock" : "Out of Stock"}</span>
                </div>

                <div className="flex items-center justify-between mb-7.5 gap-5">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Price</h4>
                    <span className="flex items-center gap-2">
                      <span className="text-xl font-semibold">{productDetail.discountedPrice}</span>
                      {productDetail.price && (
                        <span className="line-through text-gray-400">{productDetail.price}</span>
                      )}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Quantity</h4>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                        className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center hover:text-blue"
                      >
                        −
                      </button>
                      <span className="w-20 h-10 flex items-center justify-center border rounded">{quantity}</span>
                      <button
                        onClick={() => setQuantity((prev) => prev + 1)}
                        className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center hover:text-blue"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="bg-blue text-white px-7 py-3 rounded hover:bg-blue-dark"
                    disabled={!productDetail.inStock}
                  >
                    Add to Cart
                  </button>
                  <button className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p>No product data</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
