import { PropsWithChildren } from "react";

import { FullHeader } from "~/_components/Header";

export default function HeaderAndFooterLayout({ children }: PropsWithChildren) {
  return (
    <>
      <FullHeader className="z-10" />
      {children}
    </>
  );
}
