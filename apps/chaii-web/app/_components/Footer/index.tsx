import FooterBlurb from "./FooterBlurb";
import FooterInfo from "./FooterInfo";
import FooterMeta from "./FooterMeta";
import FooterTitle from "./FooterTitle";

export default function Footer() {
  return (
    <footer className="flex flex-col text-sm [--footer-x-pad:16px]">
      <FooterTitle className="mb-8" />
      <FooterInfo className="mb-7" />
      <FooterMeta />
      <FooterBlurb />
    </footer>
  );
}
