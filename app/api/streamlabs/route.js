import fetch from 'node-fetch'

export async function GET(request) {
  const token = process.env.STREAMLABS_TOKEN
  if (!token) {
    return new Response(JSON.stringify({ error: 'STREAMLABS_TOKEN not set' }), { status: 500 })
  }

  // Example: get donations summary (endpoint depends on Streamlabs API plan)
  // This is a placeholder — adapt to the exact Streamlabs endpoints you use.
  const res = await fetch(`https://streamlabs.com/api/v1.0/donations?access_token=${token}`)
  const json = await res.json()

  return new Response(JSON.stringify(json), { headers: { 'Content-Type': 'application/json' } })
}
