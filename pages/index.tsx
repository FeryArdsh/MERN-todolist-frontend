import Header from '@/components/Header';
import Task from '@/components/Task';
import { HiPlus } from 'react-icons/hi';

const Home = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />
      <div className="mt-52 flex items-center flex-col gap-7">
        <div className="flex justify-between items-end w-full">
          <span className="ml-10">2 Hail</span>
          <button className="bg-primary rounded-l-full shadow-[0_4px_10px_rgb(0,0,0,0.25)] flex items-center px-3 py-2 text-xs">
            <HiPlus /> Tambah Kegiatan
          </button>
        </div>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </main>
  );
};

export default Home;
