"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  jours: number;
  heures: number;
  min: number;
} | null;

function getTimeLeft(): TimeLeft {
  const targetDate = new Date("2026-07-01T10:00:00");
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) return null;

  return {
    jours: Math.floor(diff / (1000 * 60 * 60 * 24)),
    heures: Math.floor((diff / (1000 * 60 * 60)) % 24),
    min: Math.floor((diff / (1000 * 60)) % 60),
  };
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(null);

  useEffect(() => {
    const update = () => setTimeLeft(getTimeLeft());

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 py-10 bg-gradient-to-b bg-[#543BC5] text-center">

      {/* TITLE */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide">
        LE SPORT<br /> POUR TOUS
      </h1>

      {/* SUBTITLE */}
      <p className="mt-4 text-white max-w-md mx-auto">
        Initiations gratuites, rencontres, bonne humeur. Venez comme vous êtes.
      </p>

      {/* INFO CARDS */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <div className="bg-white shadow rounded-2xl px-4 py-3 text-sm text-black">
          📍 Paris - Place de la République
        </div>
        <div className="bg-black shadow rounded-2xl px-4 py-3 text-sm text-white">
          📅 1 Juillet 2026 • Gratuit
        </div>
      </div>

      {/* TITLE */}
      <h3 className="mt-10 text-lg font-semibold">
        Début du festival dans :
      </h3>

      {/* COUNTDOWN */}
      {timeLeft && (
        <div className="mt-6 flex items-center justify-center gap-3">

          {/* DAYS */}
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              <div className="relative bg-orange-500 text-white w-12 h-16 flex items-center justify-center rounded-xl shadow-lg">
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-orange-200 opacity-60" />
                <span className="text-2xl font-bold">
                  {String(timeLeft.jours).padStart(2, "0")[0]}
                </span>
              </div>

              <div className="relative bg-orange-500 text-white w-12 h-16 flex items-center justify-center rounded-xl shadow-lg">
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-orange-200 opacity-60" />
                <span className="text-2xl font-bold">
                  {String(timeLeft.jours).padStart(2, "0")[1]}
                </span>
              </div>
            </div>

            <span className="text-xs mt-2 text-gray-600">jours</span>
          </div>

          {/* COLON */}
          <span className="text-4xl font-bold text-orange-500 leading-none self-center">
            :
          </span>

          {/* HOURS */}
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              <div className="relative bg-orange-500 text-white w-12 h-16 flex items-center justify-center rounded-xl shadow-lg">
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-orange-200 opacity-60" />
                <span className="text-2xl font-bold">
                  {String(timeLeft.heures).padStart(2, "0")[0]}
                </span>
              </div>

              <div className="relative bg-orange-500 text-white w-12 h-16 flex items-center justify-center rounded-xl shadow-lg">
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-orange-200 opacity-60" />
                <span className="text-2xl font-bold">
                  {String(timeLeft.heures).padStart(2, "0")[1]}
                </span>
              </div>
            </div>

            <span className="text-xs mt-2 text-gray-600">heures</span>
          </div>

          {/* COLON */}
          <span className="text-4xl font-bold text-orange-500 leading-none self-center">
            :
          </span>

          {/* MINUTES */}
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              <div className="relative bg-orange-500 text-white w-12 h-16 flex items-center justify-center rounded-xl shadow-lg">
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-orange-200 opacity-60" />
                <span className="text-2xl font-bold">
                  {String(timeLeft.min).padStart(2, "0")[0]}
                </span>
              </div>

              <div className="relative bg-orange-500 text-white w-12 h-16 flex items-center justify-center rounded-xl shadow-lg">
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-orange-200 opacity-60" />
                <span className="text-2xl font-bold">
                  {String(timeLeft.min).padStart(2, "0")[1]}
                </span>
              </div>
            </div>

            <span className="text-xs mt-2 text-gray-600">min</span>
          </div>

        </div>
      )}

      {/* CALENDAR */}
      <div className="mt-8">
        <a
          href="https://www.google.com/calendar/render?action=TEMPLATE&text=Festival+Sport&dates=20260701T100000/20260701T180000&details=Initiations+gratuites&location=Paris"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Ajouter à mon calendrier
        </a>
      </div>

    </section>
  );
}