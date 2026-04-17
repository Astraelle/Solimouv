"use client";

import { Phone, Mail } from "lucide-react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.51 4.51 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zM17 6.8a1.2 1.2 0 1 0 1.2 1.2A1.2 1.2 0 0 0 17 6.8z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.88h-2.34v6.99A10 10 0 0 0 22 12z" />
  </svg>
);

export default function ContactSection() {
  return (
    <section className="px-4 py-12 bg-white">
      <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-6 shadow">

        {/* TITLE */}
        <h3 className="text-center text-xl md:text-2xl font-bold uppercase">
          CONTACT
        </h3>

        {/* PHONE */}
        <div className="mt-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center">
            <Phone className="w-5 h-5 text-gray-700" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Téléphone</p>
            <p className="font-semibold">+33 6 00 00 00 00</p>
          </div>
        </div>

        {/* EMAIL */}
        <div className="mt-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center">
            <Mail className="w-5 h-5 text-gray-700" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold">contact@solimouv.fr</p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-6 border-t border-gray-300" />

        {/* SOCIAL BUTTONS */}
        <div className="flex gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 bg-pink-500 text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            <InstagramIcon />
            Instagram
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            <FacebookIcon />
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
}