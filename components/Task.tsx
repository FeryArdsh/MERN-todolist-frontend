import { RiCloseCircleFill } from 'react-icons/ri';
import { MdEdit } from 'react-icons/md';
import { taskType } from '@/utils/typeTask';

const Task = ({ value, done, username, created, updated, _id }: taskType) => {
  function formatDate(d: any) {
    let dates: any = new Date(d);
    let month = dates.getMonth();
    let day = dates.getDate().toString().padStart(2, '0');
    let year = dates.getFullYear();
    year = year.toString().substr(-2);
    month = (month + 1).toString().padStart(2, '0');
    return `${month}/${day}/${year}`;
  }

  return (
    <section className="bg-zinc-200 shadow-[0_1px_2px_1px_rgb(0,0,0,0.15)] rounded-md w-4/5 overflow-hidden flex flex-col justify-between">
      <div className="flex justify-between items-start bg-white rounded-b-md p-2 shadow-md pb-5">
        <h5 className="">{value}</h5>
        <div className="flex gap-2">
          <button className="text-green-700 hover:text-green-900">
            <MdEdit size={20} />
          </button>
          <button className="text-red-700 hover:text-red-900">
            <RiCloseCircleFill size={20} />
          </button>
        </div>
      </div>
      <div className="bg-zinc-200 flex justify-between p-2">
        {done ? (
          <span className="text-green-700 text-xs">Selesai</span>
        ) : (
          <span className="text-blue-700 text-xs">Dikerjakan</span>
        )}
        <span className="text-zinc-400 text-xs">
          created {formatDate(created)}
        </span>
      </div>
    </section>
  );
};

export default Task;
