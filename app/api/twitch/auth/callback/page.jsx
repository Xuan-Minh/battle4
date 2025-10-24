"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      // Envoyer le code au serveur pour obtenir un token
      fetch("/api/twitch/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Access Token:", data.access_token);
          router.push("/dashboard"); // Rediriger après l'authentification
        });
    }
  }, [router]);

  return <div>Authentification en cours...</div>;
}
