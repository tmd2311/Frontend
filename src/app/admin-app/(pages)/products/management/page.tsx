import { Metadata } from "next";
import ProductPageWrapper from "@/components/client/ProductPageWrapper";

export const metadata: Metadata = {
  title: "Proshop - Product Management",
  description: "Manage products in Proshop",
};

export default function ProductPage() {
  return (
    <main className="p-8">
      <ProductPageWrapper />
    </main>
  );
}