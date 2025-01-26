"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@chaii/ui/components/table";
import { gql } from "@apollo/client";

import { DashboardTableFragment } from "./__generated__/fragment.generated";

import { TechnicianTag } from "~/components/technician-tag";

export function DashboardTable({
  services,
}: {
  services: DashboardTableFragment[];
}) {
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
          {services.map(({ id }) => (
            <TableRow key={service.id}>
              <TableCell className="font-medium">
                {customer?.name ?? "Unknown"}
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

gql`
  fragment DashboardTable on ServicesSelectItem {
    id
    technicians {
      technician {
        ...TechnicianTagServiceRelation
      }
    }
  }
`;
