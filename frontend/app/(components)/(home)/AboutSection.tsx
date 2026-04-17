"use client";

const images = [
  "/carrousel/image1.webp",
  "/carrousel/image2.webp",
  "/carrousel/image3.webp",
];

export default function AboutSection() {
  return (
    <section className="px-4 py-12 bg-white text-center">

      {/* Titles */}
      <h2 className="text-2xl md:text-3xl font-bold">A propos</h2>
      <h3 className="mt-2 text-lg text-gray-600">
        Notre première édition
      </h3>

      {/* Scrollable Carousel */}
      <div className="mt-6 max-w-md mx-auto">
        <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2">

          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Festival ${index}`}
              className="w-72 h-64 object-cover rounded-2xl shadow flex-shrink-0 snap-center"
            />
          ))}

        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-3 gap-3 max-w-md mx-auto">
        <div className="bg-gray-50 rounded-2xl p-4 shadow">
          <div className="text-xl font-bold">500+</div>
          <div className="text-xs text-gray-500">participants</div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4 shadow">
          <div className="text-xl font-bold">92%</div>
          <div className="text-xs text-gray-500">reviendraient</div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4 shadow">
          <div className="text-xl font-bold">13</div>
          <div className="text-xs text-gray-500">associations</div>
        </div>
      </div>

    </section>
  );
}