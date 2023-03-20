import Image from 'next/image';
import logo from '@/public/logo.svg';

const Welcome = () => {
  return (
    <>
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
    </>
  );
};

export default Welcome;
