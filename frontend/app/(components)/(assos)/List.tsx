"use client";

type Assos = {
  id: number;
  name: string;
  description: string;
  logo: string;
};

const assos: Assos[] = [
  {
    id: 1,
    name: "Brasil Moove",
    description: "Association de danse et culture brésilienne.",
    logo: "/logos/brasilmoove.png",
  },
  {
    id: 2,
    name: "Zen Club",
    description: "Yoga et bien-être accessible à tous.",
    logo: "/logos/zenclub.png",
  },
  {
    id: 3,
    name: "Street Sport",
    description: "Sport urbain et inclusion sociale.",
    logo: "/logos/streetsport.png",
  },
  {
    id: 4,
    name: "Street Sport",
    description: "Sport urbain et inclusion sociale.",
    logo: "/logos/streetsport.png",
  },
  {
    id: 5,
    name: "Street Sport",
    description: "Sport urbain et inclusion sociale.",
    logo: "/logos/streetsport.png",
  },
  {
    id: 6,
    name: "Street Sport",
    description: "Sport urbain et inclusion sociale.",
    logo: "/logos/streetsport.png",
  },
  {
    id: 7,
    name: "Street Sport",
    description: "Sport urbain et inclusion sociale.",
    logo: "/logos/streetsport.png",
  },
  {
    id: 8,
    name: "Street Sport",
    description: "Sport urbain et inclusion sociale.",
    logo: "/logos/streetsport.png",
  },
  {
    id: 9,
    name: "Street Sport",
    description: "Sport urbain et inclusion sociale.",
    logo: "/logos/streetsport.png",
  },
  {
    id: 10,
    name: "Street Sport",
    description: "Sport urbain et inclusion sociale.",
    logo: "/logos/streetsport.png",
  },
  {
    id: 11,
    name: "Street Sport",
    description: "Sport urbain et inclusion sociale.",
    logo: "/logos/streetsport.png",
  },
  {
    id: 12,
    name: "Street Sport",
    description: "Sport urbain et inclusion sociale.",
    logo: "/logos/streetsport.png",
  },
];

export default function AssosList() {
  return (
    <div className="px-4 py-8 space-y-4 max-w-md mx-auto">

      {assos.map((asso) => (
        <button
          key={asso.id}
          className="w-full flex items-center gap-4 bg-white rounded-2xl shadow p-4 text-left active:scale-[0.99] transition"
        >

          {/* LOGO */}
          <img
            src={asso.logo}
            alt={asso.name}
            className="w-14 h-14 rounded-xl object-cover"
          />

          {/* TEXT */}
          <div className="flex flex-col">
            <h2 className="text-base font-semibold">
              {asso.name}
            </h2>

            <p className="text-sm text-gray-500">
              {asso.description}
            </p>
          </div>

        </button>
      ))}

    </div>
  );
}