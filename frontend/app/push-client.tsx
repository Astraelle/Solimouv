"use client";

import { useEffect, useState } from "react";

export default function PushClient() {
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

  // 👉 Enregistre le SW uniquement
  useEffect(() => {
    const registerSW = async () => {
      if ("serviceWorker" in navigator) {
        try {
          const reg = await navigator.serviceWorker.register("/sw.js");
          console.log("✅ SW registered", reg);
          setRegistration(reg);
        } catch (err) {
          console.error("❌ SW error", err);
        }
      }
    };

    registerSW();
  }, []);

  // 👉 Demande permission (AU CLIC uniquement)
  const handleEnableNotifications = async () => {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      console.log("✅ Permission accordée");
    } else {
      console.log("❌ Permission refusée");
    }
  };

  // 👉 Test notification locale
  const testLocalNotification = async () => {
    if (!registration) {
      console.warn("SW pas prêt");
      return;
    }

    if (Notification.permission !== "granted") {
      console.warn("Permission non accordée");
      return;
    }

    registration.showNotification("Test local", {
      body: "Ça fonctionne 🎉",
      icon: "/icon-192.png",
    });
  };

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <button onClick={handleEnableNotifications} style={{ padding: 20 }}>
        Activer notifications
      </button>

      <button onClick={testLocalNotification} style={{ padding: 20 }}>
        Tester notification
      </button>
    </div>
  );
}