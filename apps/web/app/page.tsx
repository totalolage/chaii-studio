import Image from "next/image";

import heroImage from "./hero.png";

import ChaiiSquiggle from "~/_components/Squiggle.lg";
import Circle from "~/_components/Circle";
import Flower from "~/_components/Flower";

export default function HomePage() {
  return (
    <main className="flex max-w-[100vw] flex-col items-center px-5 [overflow:clip]">
      <h1 className="relative z-10 mt-8 whitespace-nowrap text-5xl font-bold">
        Good design
        <wbr />
        {" is like a "}
        <span className="relative">
          warm
          <ChaiiSquiggle className="absolute bottom-1/2 right-1/2 -z-10 translate-x-1/2 translate-y-1/2" />
        </span>
        <wbr />
        {" cup of "}
        <span className="relative">
          chaii
          <Circle className="absolute left-0 top-1 -z-10" />
          <Flower className="absolute bottom-0 left-full -z-10" />
        </span>
      </h1>
      <div className="relative w-[140%] max-w-2xl translate-y-[-10%] after:absolute after:inset-0 after:bg-gradient-to-b after:from-white after:from-5% after:to-transparent after:to-20%">
        <Image
          src={heroImage}
          priority
          alt="graphic of Chaii founders"
        />
      </div>
    </main>
  );
}
