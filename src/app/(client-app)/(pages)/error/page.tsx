import React from "react";
import Error from "@/components/client/Error";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Proshop - Error Page",
  description: "This is Error Page for Proshop",
};

const ErrorPage = () => {
  return (
    <main>
      <Error />
    </main>
  );
};

export default ErrorPage;
