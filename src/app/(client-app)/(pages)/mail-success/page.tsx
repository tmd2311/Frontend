import React from "react";
import MailSuccess from "@/components/client/MailSuccess";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Proshop - Mail Success Page",
  description: "This is Mail Success Page for Proshop",
};

const MailSuccessPage = () => {
  return (
    <main>
      <MailSuccess />
    </main>
  );
};

export default MailSuccessPage;
