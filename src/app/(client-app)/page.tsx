import Home from "@/components/client/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proshop - Home Page",
  description: "This is Home for Proshop",
};

export default function HomePageClient() {
  return (
    <>
      <Home />
    </>
  );
}
