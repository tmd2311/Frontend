import React from "react";
import ShopWithoutSidebar from "@/components/client/ShopWithoutSidebar";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Proshop - Shop Page",
  description: "This is Shop Page for Proshop",
  // other metadata
};

const ShopWithoutSidebarPage = () => {
  return (
    <main>
      <ShopWithoutSidebar />
    </main>
  );
};

export default ShopWithoutSidebarPage;
