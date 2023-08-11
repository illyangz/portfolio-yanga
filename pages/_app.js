import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  <>
      <Component {...pageProps} />
      <Analytics />
    </>
}
