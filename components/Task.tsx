import { RiCloseCircleFill } from 'react-icons/ri';
import { MdEdit } from 'react-icons/md';
const Task = () => {
  return (
    <section className="bg-zinc-200 shadow-[0_1px_2px_1px_rgb(0,0,0,0.15)] rounded-md w-4/5 overflow-hidden flex flex-col justify-between">
      <div className="flex justify-between items-start bg-white rounded-b-md p-2 shadow-md">
        <h5 className="">
          Melakukan push-up 40 kali sdfdsfsdf sdfsdf sdfsdfsd sd sdfsdfsd sdfsss
        </h5>
        <div className="flex ml-3">
          <button className="text-green-700 hover:text-green-900">
            <MdEdit size={20} />
          </button>
          <button className="text-red-700 hover:text-red-900">
            <RiCloseCircleFill size={20} />
          </button>
        </div>
      </div>
      <div className="bg-zinc-200 flex justify-between p-2">
        <span className="text-green-700 text-xs">Selesai</span>
        <span className="text-zinc-400 text-xs">Diupdate 29/20/23</span>
      </div>
    </section>
  );
};

export default Task;
