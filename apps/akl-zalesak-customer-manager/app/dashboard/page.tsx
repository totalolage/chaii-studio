import { Metadata } from "next";

import { AddEntityButton } from "~/(components)/add-entity-button";
import {
  DashboardTable,
  getDashboardTableData,
} from "~/(components)/dashboard-table";
import { SetTitle } from "~/(components)/title";

export const metadata: Metadata = {
  title: "Customer Managment - AKL Zálešák",
};

export default async function DashboardPage() {
  return (
    <>
      <SetTitle>Dashboard</SetTitle>
      <main className="container mx-auto py-10">
        <h1 className="mb-5 text-3xl font-bold">Upcoming Services Dashboard</h1>
        <DashboardTable data={await getDashboardTableData()} />
        <AddEntityButton className="fixed bottom-4 right-4" />
      </main>
    </>
  );
}
