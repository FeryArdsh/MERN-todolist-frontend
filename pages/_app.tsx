import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Lexend } from 'next/font/google';
import '@/styles/globals.css';
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';

const inter = Lexend({ subsets: ['latin'] });
const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <main className={`max-w-md mx-auto ${inter.className}`}>
          <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </>
  );
}
