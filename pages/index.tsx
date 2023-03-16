import Head from 'next/head';
import Image from 'next/image';
import logo from '@/public/logo.svg';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="Todo List, rencanakan kegiatanmu dengan catatan sederhana"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logofavicon.ico" />
      </Head>
      <main className="flex-center flex-col min-h-screen gap-4 px-4 max-w-sm mx-auto">
        <div className="flex-center flex-col">
          <Image src={logo} alt="Logo" />
          <h1 className="text-center font-bold">Selamat Datang</h1>
        </div>
        <section className="text-center">
          <h6>Rencanakan kegiatanmu.</h6>
          <p className="text-xs">
            Satu rencana kecil, satu langkah besar menuju kesuksesan.
          </p>
        </section>
        <section className="flex-center flex-col w-full mt-4">
          <h2>Login</h2>
          <form className="flex flex-col w-11/12 gap-3 mt-4">
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <span className="underline text-zinc-400 text-sm">
              Lupa Password?
            </span>
            <Button text="Masuk" type="submit" />
            <h6 className="text-center">
              Belum punya akun?{' '}
              <span className="underline text-secondary text-sm">Daftar</span>
            </h6>
          </form>
        </section>
      </main>
    </>
  );
}
