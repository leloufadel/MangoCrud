import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Image src="/my-image.png" width={500} height={500} />
    </div>
  );
}