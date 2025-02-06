import { AddEntityButton } from "~/(components)/add-entity-button";
import {
  DashboardTable,
  getDashboardTableData,
} from "~/(components)/dashboard-table";

export default async function DashboardPage() {
  return (
    <>
      <h1 className="mb-5 text-3xl font-bold">Upcoming Services Dashboard</h1>
      <DashboardTable data={getDashboardTableData()} />
      <AddEntityButton className="fixed bottom-4 right-4" />
    </>
  );
}
