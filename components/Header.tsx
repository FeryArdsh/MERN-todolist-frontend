import Router from 'next/router';
import { GoSearch } from 'react-icons/go';
import { IoCalendarClearSharp, IoLogOutOutline } from 'react-icons/io5';
const Header = () => {
  const logout = () => {
    Router.push('login');
  };
  return (
    <header className="absolute w-full top-4 shadow-[0_0_19px_3px_rgb(0,0,0,0.14)] px-4 py-2 rounded-md bg-white">
      <span className="flex text-zinc-400 items-center gap-2 justify-end">
        <IoCalendarClearSharp /> 23 Juni 2023
      </span>
      <div className="flex items-center gap-4">
        <h3>Halo, Fery</h3>
        <span className="text-xl hover:text-2xl duration-300" onClick={logout}>
          <IoLogOutOutline />
        </span>
      </div>
      <span className="text-secondary text-xs">2 kegiatan belum selesai</span>
      <div className="relative flex w-full flex-wrap items-stretch my-3">
        <span className="z-10 h-full font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3.5">
          <GoSearch />
        </span>
        <input
          type="text"
          placeholder="Cari kegiatan"
          className="text-black border-zinc-400 border rounded-md placeholder:text-zinc-400 placeholder:font-normal px-3 py-2.5 placeholder-slate-300 relative bg-white text-sm shadow outline-none focus:outline-none w-full pl-10"
        />
      </div>
    </header>
  );
};

export default Header;
