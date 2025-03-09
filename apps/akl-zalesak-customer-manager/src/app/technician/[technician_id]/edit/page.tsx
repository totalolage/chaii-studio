import { notFound } from "next/navigation";
import { z } from "zod";

import { EditTechnicianForm } from "~/features/technician/components";
import { getTechnicianWithServices } from "~/features/technician/utils";

export default async function TechnicianPage({
  params,
}: {
  params: Promise<{ technician_id: string }>;
}) {
  const { technician_id: technicianId } = await params;

  const parsedTechnicianId = z.string().uuid().safeParse(technicianId);
  if (!parsedTechnicianId.success) return notFound();

  const technician = await getTechnicianWithServices(parsedTechnicianId.data);
  if (!technician) return notFound();

  return (
    <main className="container mx-auto py-10">
      <EditTechnicianForm technician={technician} />
    </main>
  );
}
