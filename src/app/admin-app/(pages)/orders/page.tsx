import { Metadata } from "next";
import { OrderManagement } from "../../../../components/server/OrderManagement";
import { mockOrders } from "../../../../utils/mockData";


export const metadata: Metadata = {
  title: "Proshop - Order Management",
  description: "Manage customer orders in Proshop",
};

export default function OrdersPage() {
  return (
    <main className="p-8">
      <OrderManagement orders={mockOrders} />
    </main>
  );
}
