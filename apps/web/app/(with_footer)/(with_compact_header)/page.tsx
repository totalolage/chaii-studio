import Image from "next/image";
import ChaiiSquiggle from "~/(components)/squiggle.lg";
import heroImage from "./hero.png";
import Circle from "~/(components)/Circle";

export default function HomePage() {
  return (
    <main className="max-w-[100vw] px-5 [overflow:clip]">
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
        </span>
      </h1>
      <div className="relative translate-x-[-12%] translate-y-[-10%] after:absolute after:inset-0 after:bg-gradient-to-b after:from-white after:from-5% after:to-transparent after:to-20%">
        <Image
          src={heroImage}
          priority
          alt="graphic of Chaii founders"
          className="w-120 max-w-none"
        />
      </div>
    </main>
  );
}
