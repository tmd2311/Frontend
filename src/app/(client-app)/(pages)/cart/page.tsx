import React from "react";
import Cart from "@/components/client/Cart";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Proshop - Cart Page",
  description: "This is Cart Page for Proshop",
};

const CartPage = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
