import React from "react";
import { Wishlist } from "@/components/client/Wishlist";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proshop - Wishlist Page",
  description: "This is Wishlist Page for Proshop",
};

const WishlistPage = () => {
  return (
    <main>
      <Wishlist />
    </main>
  );
};

export default WishlistPage;
