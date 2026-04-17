"use client";

export default function TopBar() {
  return (
    <header className="w-full bg-[#1B2130] border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT - LOGO */}
        <div className="flex items-center">
          <img
            src="/web-app-manifest-512x512.png"
            alt="Logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* RIGHT - BADGES */}
        <div className="flex items-center gap-2">
          
          <div className="px-6 py-2 rounded-full bg-[#080808] text-white text-xs font-medium">
            Gratuit
          </div>

          <div className="px-6 py-2 rounded-full bg-white text-black text-xs font-medium">
            1 Juillet 2026
          </div>

        </div>

      </div>
    </header>
  );
}