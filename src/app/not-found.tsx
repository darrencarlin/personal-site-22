import Image from "next/image";
import meme from "../../public/meme.gif";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center w-screen h-[calc(100vh-112px)]">
      <Image alt="Pulp Fiction meme" src={meme} width={826} height={413} />
    </section>
  );
}
