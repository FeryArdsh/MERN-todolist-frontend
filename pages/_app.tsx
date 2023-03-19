import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Lexend } from 'next/font/google';
import '@/styles/globals.css';

const inter = Lexend({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Todo List, rencanakan kegiatanmu dengan catatan sederhana"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logofavicon.ico" />
      </Head>
      <main className={`max-w-md mx-auto ${inter.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
