import React from "react";
import ShopDetails from "@/components/client/ShopDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proshop - Shop Details Page",
  description: "This is Shop Details Page for Proshop",
};

const ShopDetailsPage = () => {
  return (
    <main>
      <ShopDetails />
    </main>
  );
};

export default ShopDetailsPage;
