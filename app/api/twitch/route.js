import fetch from 'node-fetch'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const user = searchParams.get('user')

  if (!user) {
    return new Response(JSON.stringify({ error: 'user param required' }), { status: 400 })
  }

  const clientId = process.env.TWITCH_CLIENT_ID
  const clientSecret = process.env.TWITCH_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    return new Response(JSON.stringify({ error: 'Twitch credentials not set' }), { status: 500 })
  }

  // Exchange client credentials for app access token
  const tokenRes = await fetch('https://id.twitch.tv/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`
  })
  const tokenJson = await tokenRes.json()
  const accessToken = tokenJson.access_token

  // Get user stream info
  const streamRes = await fetch(`https://api.twitch.tv/helix/streams?user_login=${encodeURIComponent(user)}`, {
    headers: {
      'Client-ID': clientId,
      Authorization: `Bearer ${accessToken}`
    }
  })
  const streamJson = await streamRes.json()

  return new Response(JSON.stringify(streamJson), { headers: { 'Content-Type': 'application/json' } })
}
