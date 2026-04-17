"use client";

export default function SolimouvSection() {
  return (
    <section className="px-4 py-12 bg-white">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Solimouv
      </h2>

      {/* ORANGE CARD */}
      <div className="mt-6 bg-orange-100 rounded-3xl p-6 max-w-4xl mx-auto">
        {/* GRID 2x2 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow text-center">
            <img
              src="/images/group.jpg"
              alt="Groupe"
              className="h-20 w-full object-cover rounded-xl mb-2"
            />
            <p className="text-sm font-medium">
              Ouvert à tous, sans distinction
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow text-center">
            <img
              src="/images/handshake.jpg"
              alt="Bienveillance"
              className="h-20 w-full object-cover rounded-xl mb-2"
            />
            <p className="text-sm font-medium">
              Bienveillance, espace sécurisé
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow text-center">
            <img
              src="/images/disability.jpg"
              alt="Accessibilité"
              className="h-20 w-full object-cover rounded-xl mb-2"
            />
            <p className="text-sm font-medium">
              Ouvert à tous, sans distinction
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow text-center">
            <img
              src="/images/wallet.jpg"
              alt="Gratuit"
              className="h-20 w-full object-cover rounded-xl mb-2"
            />
            <p className="text-sm font-medium">
              Gratuit, 100% accessible
            </p>
          </div>
        </div>

        {/* UP SPORT */}
        <h3 className="mt-8 text-lg font-bold">Up Sport!</h3>

        <p className="mt-2 text-sm text-gray-700">
          Association sportive parisienne fondée en 2016. Mission : rendre le
          sport accessible à tous, quels que soient l&apos;origine, le parcours ou
          la situation. 250 personnes accompagnées chaque semaine à travers 30
          séances hebdomadaires.
        </p>

        {/* BLOCK */}
        <div className="mt-4 bg-white rounded-2xl p-3 text-center shadow text-sm font-medium">
          Gratuit et ouvert à tous - édition 2026
        </div>

        {/* TAGS */}
        <div className="mt-4 grid grid-cols-4 gap-2">
            <div className="bg-white rounded-xl p-2 text-center text-sm shadow">
                Insertion Pro
            </div>
            <div className="bg-white rounded-xl p-2 text-center text-sm shadow">
                Femme
            </div>
            <div className="bg-white rounded-xl p-2 text-center text-sm shadow">
                APA
            </div>
            <div className="bg-white rounded-xl p-2 text-center text-sm shadow">
                Public exilé
            </div>
        </div>
      </div>

      {/* SHARE BLOCK OUTSIDE ORANGE */}
      <div className="mt-8 max-w-4xl mx-auto flex items-center justify-between bg-gray-50 rounded-2xl p-4 shadow">
        <div>
          <h3 className="font-bold">Partager le festival</h3>
          <p className="text-sm text-gray-600">
            Partagez avec votre entourage
          </p>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-xl text-sm hover:opacity-80 transition">
          Partager
        </button>
      </div>
    </section>
  );
}