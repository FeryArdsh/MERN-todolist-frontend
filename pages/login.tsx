import Head from 'next/head';
import Image from 'next/image';
import logo from '@/public/logo.svg';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Link from 'next/link';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main className="flex-center flex-col min-h-screen gap-4 px-4">
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
              <Link
                href="/register"
                className="underline text-secondary text-sm"
              >
                Daftar
              </Link>
            </h6>
          </form>
        </section>
      </main>
    </>
  );
}
