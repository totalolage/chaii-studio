import { Button } from "@chaii/ui/components/button";
import { Edit } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { z } from "zod";

import { DeleteButton } from "~/components/DeleteButton";
import { deleteTechnician } from "~/features/technician/actions";
import { TechnicianTemplate } from "~/features/technician/components";
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
