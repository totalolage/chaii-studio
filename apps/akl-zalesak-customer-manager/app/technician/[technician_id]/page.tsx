import { notFound } from "next/navigation";
import { z } from "zod";
import { Button } from "@chaii/ui/components/button";
import Link from "next/link";
import { Edit } from "lucide-react";

import TechnicianTemplate from "../technician-template";

import { getTechnicianById } from "./get-technician-by-id";
import { deleteTechnician } from "./(delete-technician)";

import { DeleteButton } from "~/(components)/delete-button";

export default async function TechnicianPage({
  params,
}: {
  params: Promise<{ technician_id: string }>;
}) {
  const { technician_id: technicianId } = await params;

  const parsedTechnicianId = z.string().uuid().safeParse(technicianId);
  if (!parsedTechnicianId.success) return notFound();

  const technician = await getTechnicianById(parsedTechnicianId.data);
  if (!technician) return notFound();

  return (
    <main className="container mx-auto py-10">
      <TechnicianTemplate
        actions={
          <>
            <DeleteButton
              id={technician.id}
              action={deleteTechnician}
              title="Smazat technika"
              description="Opravdu chcete smazat tohoto technika?"
            />
            <Link href={`/technician/${technician.id}/edit`} replace>
              <Button variant="outline" size="icon">
                <Edit className="size-4" />
                <span className="sr-only">Edit</span>
              </Button>
            </Link>
          </>
        }
        name={technician.name}
        email={technician.email}
        phone={technician.phone}
      />
    </main>
  );
}
