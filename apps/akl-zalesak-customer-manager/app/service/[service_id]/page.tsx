import { notFound } from "next/navigation";
import { z } from "zod";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@chaii/ui/components/table";

import ServiceTemplate from "../service-template";

import { deleteService } from "./(delete-service)";
import { getServiceWithTechniciansAndCompanyById } from "./get-service-with-technicians-and-company-by-id";

import { DeleteButton } from "~/(components)/delete-button";
import { EditButton } from "~/(components)/edit-button";
import { ViewButton } from "~/(components)/view-button/ViewButton";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service_id: string }>;
}) {
  const { service_id: serviceId } = await params;

  const parsedServiceId = z.string().uuid().safeParse(serviceId);
  if (!parsedServiceId.success) return notFound();

  const service = await getServiceWithTechniciansAndCompanyById(
    parsedServiceId.data,
  );
  if (!service) return notFound();

  return (
    <ServiceTemplate
      actions={
        <>
          <DeleteButton
            id={service.id}
            action={deleteService}
            title="Smazat zakázku"
            description="Jste si jistí, že chcete smazat tuto zakázku?"
          />
          <EditButton href={`/service/${service.id}/edit`} />
        </>
      }
      // To locale string without seconds
      time={service.time.toLocaleString("cs-CZ", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      })}
      company={
        <div className="flex flex-row justify-between gap-2">
          <div>
            <h2 className="text-lg">{service.customer.companyName}</h2>
            <p className="text-sm text-muted-foreground">
              {service.customer.streetAddress}, {service.customer.city}
            </p>
          </div>
          <ViewButton href={`/customer/${service.customer.id}`} />
        </div>
      }
      technicians={
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Jméno</TableHead>
              <TableHead>Role</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>

          {service.technicians.map((technician) => (
            <TableRow key={technician.id}>
              <TableCell>{technician.name}</TableCell>
              <TableCell>{technician.role}</TableCell>
              <TableCell>
                <div className="flex justify-end">
                  <ViewButton href={`/technician/${technician.id}`} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      }
    />
  );
}
