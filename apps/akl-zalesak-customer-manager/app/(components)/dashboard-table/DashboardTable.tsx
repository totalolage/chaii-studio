"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@chaii/ui/components/table";
import Link from "next/link";

import { TechnicianTag } from "../technician-tag";
import { ServiceDateTag } from "../service-date-tag";

import { getDashboardTableData } from "./get-dashboard-data";
import { use } from "react";

interface DashboardTableProps {
  data: ReturnType<typeof getDashboardTableData>;
}

export function DashboardTable({ data: dataPromise }: DashboardTableProps) {
  const data = use(dataPromise);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Technicians</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(({ customer, technicians, service }) => (
            <TableRow key={service.id}>
              <TableCell className="font-medium">
                <Link href={`/customer/${customer?.id}`}>
                  {customer?.name ?? "Unknown"}
                </Link>
              </TableCell>
              <TableCell>
                <ServiceDateTag service={service} />
              </TableCell>
              <TableCell className="flex flex-wrap gap-1">
                {!technicians.length && (
                  <span className="text-gray-400">No technicians</span>
                )}
                {technicians.map((technician) => (
                  <TechnicianTag
                    key={technician.id}
                    technician={technician}
                    role={technician.role}
                  />
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
