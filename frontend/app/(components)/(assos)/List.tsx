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
    name: "Up Sport!",
    description: "Sport & insertion sociale depuis 2016. 250 personnes accompagnées par semaine",
    logo: "/assos-logo/up-sport-logo.webp",
  },
  {
    id: 2,
    name: "Fondation Pileje",
    description: "Promotion de la santé durable et prévention par l'hygiène de vie (alimentation, sommeil, sport) depuis 2005.",
    logo: "/assos-logo/fondation-pileje-logo.png",
  },
  {
    id: 3,
    name: "Ufolep 75",
    description: "Fédération sportive proposant du sport pour tous, de l'insertion sociale et de l'éducation par la citoyenneté.",
    logo: "/assos-logo/ufolep-logo.png",
  },
  {
    id: 4,
    name: "Força Foundation",
    description: "Sport-santé et inclusion sociale pour l'épanouissement et la résilience des publics vulnérables.",
    logo: "/assos-logo/forcafoundation-logo.png",
  },
  {
    id: 5,
    name: "Kainos",
    description: "Conseil en management par le sport pour la performance collective et l'engagement",
    logo: "/assos-logo/kainos-logo.png",
  },
  {
    id: 6,
    name: "Yoga & Sport",
    description: " Inclusion des réfugiés par le sport et le yoga pour le bien-être et le lien social.",
    logo: "/assos-logo/yoga-and-sport-with-refugees-logo.png",
  },
  {
    id: 7,
    name: "Moove toi",
    description: "Coaching sport-santé et nutrition pour améliorer le bien-être physique et mental au quotidien.",
    logo: "/assos-logo/moove-toi-logo.webp",
  },
  {
    id: 8,
    name: "Les hidjabeuses",
    description: "Collectif de footballeuses luttant pour l'inclusion et le droit de porter le voile en sport.",
    logo: "/assos-logo/forcafoundation-logo.png",
  },
  {
    id: 9,
    name: "Sine qua non",
    description: "Sport urbain et inclusion sociale.",
    logo: "/assos-logo/forcafoundation-logo.png",
  },
  {
    id: 10,
    name: "Novosport",
    description: "Solution digitale d'activité physique adaptée pour améliorer la santé et prévenir les maladies.",
    logo: "/assos-logo/novosport-logo.avif",
  },
  {
    id: 11,
    name: "Alice Milliat",
    description: "Promotion du sport féminin et médiatisation des athlètes pour l'égalité des genres.",
    logo: "/assos-logo/fondation-milliat-logo.jpg",
  },
  {
    id: 12,
    name: "Unass",
    description: "Union nationale pour l'accompagnement et le sport santé, facilitant l'accès à l'activité physique.",
    logo: "/assos-logo/unass-logo.png",
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