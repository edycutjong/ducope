import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Ducope - Meme Token Launcher';
export const size = { width: 1200, height: 600 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'radial-gradient(circle at center, #C084FC 0%, #7E22CE 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 512 512">
            <rect width="512" height="512" rx="100" fill="#A855F7" />
            <path d="M366.1 145.9c-2.3-2.3-5.4-3.5-8.6-3.5-27.1 0-77.9 11.2-114 47.3-36.1 36.1-47.3 86.9-47.3 114 0 3.2 1.2 6.3 3.5 8.6 2.3 2.3 5.4 3.5 8.6 3.5 27.1 0 77.9-11.2 114-47.3 36.1-36.1 47.3-86.9 47.3-114 0-3.2-1.2-6.3-3.5-8.6zm-177.3 90.5c-15.6-15.6-39.6-17.7-57.8-5.1L107 248.5c-4.4 3.1-6.9 8.2-6.8 13.6.1 5.4 2.8 10.3 7.4 13.2l61.2 38.3c8.9 5.6 20.3 4.2 27.7-3.2l20.4-20.4c-9.3-16-16.1-34.6-28.1-53.6zm192.1 146.5l-38.3-61.2c-2.9-4.6-7.8-7.3-13.2-7.4-5.4-.1-10.5 2.4-13.6 6.8l-17.2 24c-12.6-18.2-10.5-42.2 5.1-57.8l53.6 28.1c20.4 10.7 20.4 10.7 20.4 10.7 7.4-7.4 8.8-18.8 3.2-27.7zM207 305c-18.5 18.5-44.1 27.1-65.7 24.3l-25.9 25.9c-4.7 4.7-4.7 12.3 0 17 4.7 4.7 12.3 4.7 17 0l25.9-25.9c-2.8-21.6 5.8-47.2 24.3-65.7 6.1-6.1 13.5-11.5 21.6-16.1-6 9-11.1 16.5-17.2 20.5z" fill="white"/>
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ fontSize: 96, color: 'white', margin: 0, fontWeight: 800, letterSpacing: '-0.02em' }}>Ducope</h1>
            <p style={{ fontSize: 40, color: '#E9D5FF', margin: 0, marginTop: 16 }}>Failed Swap? Let&apos;s cope.</p>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
