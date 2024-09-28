import { cn } from "@chaii/ui/lib/utils";
import { ComponentProps } from "react";

export default function ChaiiFlower({
  className,
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      width={(64 / 2) * 0.95}
      height={(62 / 2) * 0.95}
      viewBox="0 0 64 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-black", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.965 11.6108C27.7966 15.5998 27.6427 19.248 26.09 19.5992V19.6192C24.8929 19.8935 23.8171 18.1062 22.5088 15.9325C20.8115 13.1125 18.7227 9.6423 15.47 9.17924C8.08999 8.12924 -2.63003 22.9892 0.689966 29.7392C2.34081 33.0964 7.35733 34.211 10.9387 35.0068C13.1713 35.5029 14.8462 35.875 14.8001 36.5893C14.7621 37.2003 13.4969 37.4325 11.7758 37.7484C8.96215 38.2648 4.93009 39.0048 3.05007 41.9892C0.650073 45.8092 3.11999 51.1393 3.45999 51.8393C7.64999 60.5593 21.88 64.2392 28.37 59.4892C30.8204 57.6997 31.5185 55.1839 32.1462 52.9221C32.7531 50.7349 33.2941 48.7852 35.2901 47.9593C38.8376 46.4889 43.159 50.1517 46.9967 53.4045C50.1798 56.1025 53.0301 58.5184 54.83 57.4892C57.85 55.7592 56.97 44.9193 51.47 41.2493C49.3098 39.805 46.7495 39.6826 45.0848 39.603C44.0524 39.5537 43.3644 39.5208 43.33 39.1993C43.2812 38.7699 44.4799 38.3762 46.4788 37.7198C48.5768 37.0308 51.5562 36.0523 54.9 34.4393C59.84 32.0593 62.57 30.7392 63.25 28.2192C64.6 23.2292 57.4801 15.2292 51.4201 15.6192C47.8904 15.8448 45.1708 18.8911 43.2501 21.0425C42.0202 22.4203 41.1178 23.431 40.5401 23.0992C40.0298 22.8047 40.3129 21.7683 40.7304 20.2401C41.3193 18.0846 42.1755 14.9506 41.45 11.5392C40.13 5.29923 33.88 -0.160727 30.84 0.959273C28.3764 1.86294 28.161 6.96768 27.965 11.6108ZM22.85 38.399C24.42 39.989 26.35 40.7889 28.64 40.7889C30.93 40.7889 32.87 39.989 34.47 38.399C36.06 36.809 36.86 34.819 36.86 32.569C36.86 30.319 36.06 28.399 34.47 26.809C32.87 25.219 30.93 24.4189 28.64 24.4189C26.35 24.4189 24.42 25.219 22.85 26.809C21.28 28.409 20.5 30.279 20.5 32.569C20.5 34.859 21.28 36.809 22.85 38.399Z"
        fill="currentColor"
      />
    </svg>
  );
}
