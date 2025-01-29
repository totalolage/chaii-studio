import { PropsWithChildren } from "react";

import { SetTitle } from "~/(components)/title";

export default async function CutomerLayout({ children }: PropsWithChildren) {
  return (
    <>
      <SetTitle>Customer</SetTitle>
      {children}
    </>
  );
}
