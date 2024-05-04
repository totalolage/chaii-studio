import Image from "next/image";
import titleImg from "./2024-05-05-010612_002.jpeg";

export default function Component() {
  return (
    <main>
    <h1>
      Chaii Studio :)
    </h1>
    <Image
      src={titleImg}
      alt="Chaii Studio"
    />
    </main>
  )
}

