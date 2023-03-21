import Header from '@/components/Header';
import Task from '@/components/Task';
import AddTask from '@/components/AddTask';
import { useState, useEffect } from 'react';
import { FETCH_SERVICE } from '@/utils/fetchApi';
import { taskType } from '@/utils/typeTask';
import { HiPlus } from 'react-icons/hi';
import { useQuery } from 'react-query';
import { BeatLoader } from 'react-spinners';
import Link from 'next/link';

const Home = () => {
  const { isLoading, data } = useQuery('todo', FETCH_SERVICE.getTodo);
  const [openModal, setOpenModal] = useState(false);
  const [getId, setGetId] = useState('');
  const [localUser, setLocalUser] = useState({ username: '' });

  const handleClickModal = () => {
    setOpenModal((e) => !e);
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setLocalUser(JSON.parse(localStorage.getItem('user') || '{}'));
    }
  }, []);

  const getTask = data?.data.filter(
    (task: any) => task.username == localUser.username
  );
  const getIsDone = getTask?.filter((task: any) => task.done === false);
  return (
    <main className="relative min-h-screen overflow-hidden">
      {openModal && (
        <AddTask
          setOpenModal={setOpenModal}
          username={localUser?.username}
          getId={getId}
          setGetId={setGetId}
        />
      )}
      <Header
        username={localUser?.username || 'Anonymouse'}
        notyet={getIsDone?.length || 0}
      />
      <div className="mt-52 flex items-center flex-col gap-7">
        {!localUser.username ? (
          <Link className="underline text-blue-800" href={'/login'}>
            Yuk Login Terlebih Dahulu
          </Link>
        ) : (
          <>
            <div className="flex justify-between items-end w-full">
              <span className="ml-10">{getTask?.length} Hail</span>
              <button
                className="bg-primary rounded-l-full shadow-[0_4px_10px_rgb(0,0,0,0.25)] flex items-center px-3 py-2 text-xs hover:bg-primary/75"
                onClick={handleClickModal}
              >
                <HiPlus /> Tambah Kegiatan
              </button>
            </div>
            {isLoading && (
              <div className="mx-auto">
                <BeatLoader color="#C86D00" />
              </div>
            )}
            {getTask?.map((item: taskType) => (
              <Task
                key={item._id}
                _id={item._id}
                value={item.value}
                done={item.done}
                username={item.username}
                created={item.created}
                updated={item.updated}
                setGetId={setGetId}
                setOpenModal={setOpenModal}
              />
            ))}
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
