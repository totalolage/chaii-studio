import { Metadata } from "next";

import { DashboardTable } from "~/components/dashboard-table";
import { services } from "mock_data/services";

export const metadata: Metadata = {
  title: "Customer Managment - AKL Zálešák",
};

export default function DashboardPage() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="mb-5 text-3xl font-bold">Upcoming Services Dashboard</h1>
      <DashboardTable data={services} />
    </main>
  );
}
