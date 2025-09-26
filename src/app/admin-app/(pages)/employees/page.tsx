import { Metadata } from "next";
import { EmployeeManagement } from "../../../../components/server/EmployeeManagement";
import { mockEmployees } from "../../../../utils/mockData";


export const metadata: Metadata = {
  title: "Proshop - Employee Management",
  description: "Manage employee information in Proshop Admin Panel",
};

export default function EmployeesPage() {
  return (
    <main className="p-8">
      <EmployeeManagement employees={mockEmployees} />
    </main>
  );
}
