import { NextResponse } from "next/server";

export async function GET(req) {
  const clientId = process.env.STREAMLABS_CLIENT_ID;
  const redirectUri = "http://localhost:3000/auth/callback?service=streamlabs";
  const scope = "donations.read"; // Add necessary scopes

  const authUrl = `https://streamlabs.com/api/v1.0/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
  return NextResponse.redirect(authUrl);
}
