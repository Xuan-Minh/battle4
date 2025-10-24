'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const service = urlParams.get('service'); // Twitch or Streamlabs

    if (code && service) {
      // Send the code to the server to exchange for a token
      fetch(`/api/${service}/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(`${service} Access Token:`, data.access_token);
          router.push('/dashboard'); // Redirect after authentication
        });
    }
  }, [router]);

  return <div>Authenticating...</div>;
}