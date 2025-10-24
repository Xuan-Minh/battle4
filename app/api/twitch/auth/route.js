import { NextResponse } from 'next/server';

export async function GET(req) {
  const clientId = process.env.TWITCH_CLIENT_ID;
  const redirectUri = 'http://localhost:3000/auth/callback?service=twitch';
  const scope = 'user:read:email'; // Add necessary scopes

  const authUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
  return NextResponse.redirect(authUrl);
}
import { NextResponse } from "next/server";

export async function GET(req) {
  const clientId = process.env.TWITCH_CLIENT_ID;
  const redirectUri = "http://localhost:3000/auth/callback";
  const scope = "user:read:email"; // Ajoutez les scopes nécessaires

  const authUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
  return NextResponse.redirect(authUrl);
}
