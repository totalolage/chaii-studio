import { getImageProps, ImageProps } from "next/image";
import React from "react";

import { SvgImageFromText } from "./SvgImageFromText";

export const SvgImage = async (props: React.SVGProps<SVGSVGElement> & ImageProps) => {
  const { props: nextImageProps } = getImageProps(props);
  delete nextImageProps.style.color;

  console.log(process.env);

  const svgSrc = await (
    await fetch(
      new URL(
        nextImageProps.src,
        process.env["__NEXT_PRIVATE_ORIGIN"] ?? process.env["VERCEL_URL"],
      ),
    )
  ).text();

  return <SvgImageFromText svgSrc={svgSrc} {...props} />;
};
