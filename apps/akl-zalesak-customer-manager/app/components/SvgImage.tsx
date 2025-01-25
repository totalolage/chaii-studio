import fs from "fs";
import path from "path";

import { ImageProps } from "next/image";
import React from "react";
import { DOMParser, XMLSerializer } from "xmldom";

export const SvgImage = async ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & ImageProps) => {
  const svgSrc = fs.readFileSync(
    path.join(process.cwd(), "app/assets/logo.svg"),
    "utf8",
  );

  const parsedSvg = new DOMParser().parseFromString(svgSrc, "image/svg+xml");

  // Inject props into the SVG element
  const svgElement = parsedSvg.documentElement;
  Object.entries(props).forEach(([key, value]) => {
    svgElement.setAttribute(key, value as string);
  });
  svgElement.removeAttribute("src");
  if (className) svgElement.setAttribute("class", className);

  // Convert the SVG element to a string
  const svgString = new XMLSerializer().serializeToString(svgElement);

  return (
    <div className="contents" dangerouslySetInnerHTML={{ __html: svgString }} />
  );
};
