import { gql } from "@apollo/client";
import { Metadata } from "next";

import {
  DashboardTable,
  getDashboardTableData,
} from "~/components/dashboard-table";

export const metadata: Metadata = {
  title: "Customer Managment - AKL Zálešák",
};

export default async function DashboardPage() {
  return (
    <>
      <main className="container mx-auto py-10">
        <h1 className="mb-5 text-3xl font-bold">Upcoming Services Dashboard</h1>
        <DashboardTable data={await getDashboardTableData()} />
      </main>
    </>
  );
}

gql`
  query DashboardServices {
    services {
      ...DashboardTable
    }
  }
`
