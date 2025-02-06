import { z } from "zod";
import { notFound } from "next/navigation";

import { getServiceWithTechniciansAndCompanyById } from "../get-service-with-technicians-and-company-by-id";

import { EditServiceForm } from "./EditServiceForm";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service_id: string }>;
}) {
  const { service_id: serviceId } = await params;

  const parsedServiceId = z.string().uuid().safeParse(serviceId);
  if (!parsedServiceId.success) return notFound();

  const service = await getServiceWithTechniciansAndCompanyById(parsedServiceId.data);
  if (!service) return notFound();

  return <EditServiceForm service={service} />;
}
