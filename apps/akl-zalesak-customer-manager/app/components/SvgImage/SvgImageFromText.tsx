"use client";

export const SvgImageFromText = ({
  svgSrc,
  className,
  ...props
}: {
  svgSrc: string;
} & React.SVGProps<SVGElement>) => {
  const parsedSvg = new DOMParser().parseFromString(svgSrc, "image/svg+xml");

  // Inject props into the SVG element
  const svgElement = parsedSvg.documentElement;
  console.log(svgElement);
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
