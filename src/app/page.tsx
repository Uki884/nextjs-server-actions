import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/server"}>server component</Link>
      <br />
      <Link href={"/client"}>client component</Link>
    </>
  );
}
