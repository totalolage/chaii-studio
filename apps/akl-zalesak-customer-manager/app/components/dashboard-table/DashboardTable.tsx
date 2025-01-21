"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@chaii/ui/components/table"

import { services } from '~/mock_data/services'

interface DashboardTableProps {
  data: typeof services
}

export function DashboardTable({ data }: DashboardTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Last Service</TableHead>
            <TableHead>Next Service</TableHead>
            <TableHead>Technician</TableHead>
            <TableHead className="text-right">Last Payment (CZK)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((service) => (
            <TableRow key={service.id}>
              <TableCell className="font-medium">{service.companyName}</TableCell>
              <TableCell>{new Date(service.lastService).toLocaleDateString('cs-CZ')}</TableCell>
              <TableCell>{new Date(service.nextService).toLocaleDateString('cs-CZ')}</TableCell>
              <TableCell>{service.technician}</TableCell>
              <TableCell className="text-right">{service.lastPayment.toLocaleString('cs-CZ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
