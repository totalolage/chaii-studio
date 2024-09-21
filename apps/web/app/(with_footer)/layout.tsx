import { PropsWithChildren } from "react";
import Footer from "~/(components)/Footer";

export default function HeaderAndFooterLayout({ children }: PropsWithChildren) {
  return (
    <body className="grid min-h-dvh grid-rows-[minmax(100dvh,1fr)_auto]">
      <div className="grid-cols-[auto_1fr]">
        {children}
      </div>
      <Footer />
    </body>
  );
}
