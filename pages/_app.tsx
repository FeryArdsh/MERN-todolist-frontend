import type { AppProps } from 'next/app';
import { Lexend } from 'next/font/google';
import '@/styles/globals.css';

const inter = Lexend({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
