
import { Metadata } from "next";
import { InventoryManagement } from "../../../../../components/server/InventoryManagement";
import { useState } from "react";
import { Product } from "../../../../../types/Admin";
import { mockProducts } from "../../../../../utils/mockData";


export const metadata: Metadata = {
  title: "Proshop - Inventory Management",
  description: "Manage inventory information in Proshop Admin Panel",
};

export default function InventoryPage() {
    
  return (
    <main className="p-8">
      <InventoryManagement />
    </main>
  );
}
