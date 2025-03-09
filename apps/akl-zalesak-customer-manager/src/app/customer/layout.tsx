import { PropsWithChildren } from "react";

import { SetTitle } from "~/components/Title";

export default async function CutomerLayout({ children }: PropsWithChildren) {
  return (
    <>
      <SetTitle>Zákazník</SetTitle>
      {children}
    </>
  );
}
