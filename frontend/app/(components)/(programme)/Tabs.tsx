"use client";

import { useState } from "react";

type Tab = "programme" | "encours" | "avenir";

export default function ProgrammeTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("programme");

  const tabs = [
    { key: "programme", label: "Programme" },
    { key: "encours", label: "En cours" },
    { key: "avenir", label: "À venir" },
  ] as const;

  return (
    <div className="mt-6 flex justify-center">
      <div className="flex bg-gray-100 rounded-full p-1 shadow-inner">

        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 text-sm rounded-full transition ${
              activeTab === tab.key
                ? "bg-white shadow text-black font-medium"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}

      </div>
    </div>
  );
}