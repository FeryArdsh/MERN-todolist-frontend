import Header from '@/components/Header';
import Task from '@/components/Task';
import { FETCH_SERVICE } from '@/utils/fetchApi';
import { taskType } from '@/utils/typeTask';
import { HiPlus } from 'react-icons/hi';
import { useQuery } from 'react-query';

const Home = () => {
  const { isLoading, isError, data } = useQuery('todo', FETCH_SERVICE.getTodo);
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  const username = JSON.parse(localStorage.getItem('user') || '');
  const getTask = data?.data.filter(
    (task: any) => task.username == username.username
  );
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />
      <div className="mt-52 flex items-center flex-col gap-7">
        <div className="flex justify-between items-end w-full">
          <span className="ml-10">{getTask?.length} Hail</span>
          <button className="bg-primary rounded-l-full shadow-[0_4px_10px_rgb(0,0,0,0.25)] flex items-center px-3 py-2 text-xs">
            <HiPlus /> Tambah Kegiatan
          </button>
        </div>
        {getTask?.map((item: taskType) => (
          <Task
            key={item._id}
            _id={item._id}
            value={item.value}
            done={item.done}
            username={item.username}
            created={item.created}
            updated={item.updated}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
