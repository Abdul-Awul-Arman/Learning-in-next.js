import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Bismiallah This is home page route</h1>
      <Link href="/about">About</Link>
    </>
  );
}
