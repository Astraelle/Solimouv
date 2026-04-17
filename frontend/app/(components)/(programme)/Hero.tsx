"use client";

export default function ProgrammeHero() {
  return (
    <section className="px-4 py-12 bg-gradient-to-b from-orange-50 to-white text-center">

      {/* TITLE */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide">
        Programme du jour
      </h1>

      {/* DATE */}
      <p className="mt-4 text-lg text-gray-700 font-medium">
        Samedi 12 juillet 2026
      </p>

      {/* INFOS */}
      <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">
        Centre Charles Moureu - Paris 13e - 10h-18h - Gratuit
      </p>

    </section>
  );
}