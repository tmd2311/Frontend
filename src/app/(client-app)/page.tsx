import ShopWithSidebar from "@/components/client/ShopWithSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proshop - Home Page",
  description: "This is Home for Proshop",
};

export default function HomePageClient() {
  return (
    <>
      <ShopWithSidebar />
    </>
  );
}
