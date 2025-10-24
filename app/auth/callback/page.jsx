"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Callback() {
  const router = useRouter();
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      const service = urlParams.get("service"); // Twitch ou Streamlabs

      if (code && service) {
        // Envoyer le code au serveur pour échanger un token
        fetch(`/api/${service}/token`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(`${service} Access Token:`, data.access_token);
            router.push("/dashboard"); // Redirection après authentification
          })
          .catch((err) => {
            console.error("Erreur lors de l'authentification :", err);
            setIsAuthenticating(false);
          });
      } else {
        setIsAuthenticating(false);
      }
    }
  }, [router]);

  if (!isAuthenticating) {
    return <div>Erreur lors de l'authentification. Veuillez réessayer.</div>;
  }

  return <div>Authentification en cours...</div>;
}
