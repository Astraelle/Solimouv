"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, Users, Info, UserPlus } from "lucide-react";

const navItems = [
  { name: "Accueil", href: "/", icon: Home },
  { name: "Programme", href: "/programme", icon: Calendar },
  { name: "Assos", href: "/associations", icon: Users },
  { name: "Infos", href: "/infos", icon: Info },
  { name: "S'inscrire", href: "/contact", icon: UserPlus },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-md md:hidden">
      <ul className="flex justify-between items-center px-2 py-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <li key={item.name} className="flex-1">
              <Link
                href={item.href}
                className={`flex flex-col items-center justify-center text-xs py-2 rounded-xl transition ${
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-gray-500 hover:text-blue-500"
                }`}
              >
                <Icon size={20} />
                <span className="mt-1">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
