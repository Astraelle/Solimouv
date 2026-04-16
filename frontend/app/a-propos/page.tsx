import Link from "next/link";

export default function About() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Solimouv’</h1>
      <p className="mt-2">
        Le festival du sport inclusif organisé par Up Sport!
      </p>

      <div className="mt-6 flex gap-4">
        <Link href="/programme">Programme</Link>
        <Link href="/a-propos">À propos</Link>
      </div>
    </main>
  );
}