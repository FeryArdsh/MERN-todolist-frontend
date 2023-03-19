import Button from '@/components/Button';
import Input from '@/components/Input';
import Link from 'next/link';

const register = () => {
  return (
    <>
      <section className="flex-center flex-col w-full min-h-screen">
        <h2>Daftar</h2>
        <form className="flex flex-col w-11/12 gap-3 mt-4">
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Input placeholder="Konfirmasi Password" />
          <Button text="Daftar" type="submit" />
          <h6 className="text-center">
            Sudah punya akun?{' '}
            <Link href="/login" className="underline text-secondary text-sm">
              Masuk
            </Link>
          </h6>
        </form>
      </section>
    </>
  );
};

export default register;
