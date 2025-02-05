import { PropsWithChildren } from "react";

import { SetTitle } from "~/(components)/title";

export default async function CustomerLayout({ children }: PropsWithChildren) {
  return (
    <>
      <SetTitle>Zákazník</SetTitle>
      {children}
    </>
  );
}
