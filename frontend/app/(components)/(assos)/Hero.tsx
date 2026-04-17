"use client";

export default function AssosHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFB000] px-6 py-16 text-black">

      {/* Background decorative shape */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-orange-700 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative max-w-md mx-auto text-center">

        <h1 className="text-4xl sm:text-5xl font-black leading-tight">
          Les assos <br /> partenaires
        </h1>

        <p className="mt-6 text-sm sm:text-base font-medium opacity-90">
          85% ont découvert une nouvelle association lors de l’édition 1.
        </p>

      </div>
    </section>
  );
}