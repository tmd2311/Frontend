import React from "react";
import ShopWithSidebar from "@/components/client/ShopWithSidebar";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Proshop - Shop Page",
  description: "This is Shop Page for Proshop",
};

const ShopWithSidebarPage = () => {
  return (
    <main>
      <ShopWithSidebar />
    </main>
  );
};

export default ShopWithSidebarPage;
