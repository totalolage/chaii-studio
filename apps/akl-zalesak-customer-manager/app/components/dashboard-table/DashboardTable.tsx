"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@chaii/ui/components/table";

import { getDashboardTableData } from "./getDashboardData";

interface DashboardTableProps {
  data: Awaited<ReturnType<typeof getDashboardTableData>>;
}

export function DashboardTable({ data }: DashboardTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Technicians</TableHead>
            <TableHead className="text-right">Last Payment (CZK)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(
            ({customer, technicians, service}) => (
              <TableRow key={service.id}>
                <TableCell className="font-medium">
                  {customer?.name ?? "Unknown"}
                </TableCell>
                <TableCell>
                  {technicians.map((technician) => technician.name).join(", ")}
                </TableCell>
                <TableCell className="text-right">
                  {Intl.NumberFormat("cs-CZ", {
                    style: "currency",
                    currency: "CZK",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(parseInt(service.lastPayment, 10))}
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </div>
  );
}
