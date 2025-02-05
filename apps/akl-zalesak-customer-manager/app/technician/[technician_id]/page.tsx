import { notFound } from "next/navigation";
import { z } from "zod";

import TechnicianTemplate from "../technician-template";

import { deleteTechnician } from "./(delete-technician)";
import { getTechnicianWithServices } from "./get-technician-with-services";

import { DeleteButton } from "~/(components)/delete-button";
import { EditButton } from "~/(components)/edit-button";

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
    <TechnicianTemplate
      actions={
        <>
          <DeleteButton
            id={technician.id}
            action={deleteTechnician}
            title="Smazat technika"
            description="Opravdu chcete smazat tohoto technika?"
          />
          <EditButton href={`/technician/${technician.id}/edit`} />
        </>
      }
      name={technician.name}
      email={technician.email}
      phone={technician.phone}
    />
  );
}
