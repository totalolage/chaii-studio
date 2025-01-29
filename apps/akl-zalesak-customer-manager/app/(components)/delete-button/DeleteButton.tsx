"use client";

import { Button } from "@chaii/ui/components/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@chaii/ui/components/alert-dialog";
import { Trash } from "lucide-react";
import { useAction } from "next-safe-action/hooks";

export const DeleteButton = ({
  id,
  action,
  title,
  description,
}: {
  id: string;
  action: Parameters<typeof useAction>[0];
  title?: string;
  description?: string;
}) => {
  const { execute, status } = useAction(action);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:bg-destructive hover:text-white"
        >
          <Trash className="size-4" />
          <span className="sr-only">Delete</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        {(title || description) && (
          <AlertDialogHeader>
            {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
            {description && (
              <AlertDialogDescription>{description}</AlertDialogDescription>
            )}
          </AlertDialogHeader>
        )}
        <AlertDialogFooter>
          <Button
            variant="destructive"
            onClick={() => execute({ id })}
            loading={status === "executing"}
          >
            Smazat
          </Button>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
