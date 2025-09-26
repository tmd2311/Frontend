import { Metadata } from "next";
import { CustomerManagement } from "../../../../../components/server/CustomerManagement";
import { mockCustomers } from "../../../../../utils/mockData";


export const metadata: Metadata = {
  title: "Proshop - Customer Management",
  description: "Manage customer information in Proshop Admin Panel",
};

export default function CustomerManagementPage() {
  return (
    <main className="p-8">
      <CustomerManagement
        customers={mockCustomers}
        
      />
    </main>
  );
}
