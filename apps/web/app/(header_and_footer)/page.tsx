import foundersImg from "./founders.jpeg";
import Image from "next/image";

export default function Component() {
  return (
    <main>
      <section className="relative h-40 w-full">
        <Image
          src={foundersImg}
          alt="Founders"
          fill
          priority
          placeholder="blur"
          style={{ objectFit: "cover", objectPosition: "0 20%" }}
        />
      </section>
    </main>
  );
}
