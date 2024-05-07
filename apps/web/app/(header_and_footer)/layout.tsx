import { PropsWithChildren } from "react";
import Header from "./_Header";
import Footer from "./Footer";

export default function HeaderAndFooterLayout({ children }: PropsWithChildren) {
  return (
    <body className="min-h-dvh grid grid-rows-[minmax(100dvh,1fr)_auto]">
      <div className="grid-cols-[auto_1fr]">
        <Header className="z-10" />
        {children}
      </div>
      <Footer />
    </body>
  );
}
