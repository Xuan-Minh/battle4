import { NextResponse } from "next/server";

export async function GET(req) {
  const clientId = process.env.TWITCH_CLIENT_ID;
  const redirectUri =
    "https://noncommunistically-unsedentary-jennell.ngrok-free.dev/auth/callback";
  const scope = "user:read:email"; // Ajoutez les scopes nécessaires

  // Logs pour le débogage
  console.log("Client ID:", clientId);
  console.log("Redirect URI:", redirectUri);
  console.log("Scopes:", scope);

  if (!clientId) {
    console.error(
      "Erreur: TWITCH_CLIENT_ID n'est pas défini dans les variables d'environnement."
    );
    return NextResponse.json(
      { error: "Configuration serveur invalide." },
      { status: 500 }
    );
  }

  const authUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
  console.log("Auth URL générée:", authUrl);

  return NextResponse.redirect(authUrl);
}
