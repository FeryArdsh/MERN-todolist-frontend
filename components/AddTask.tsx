import { FETCH_SERVICE } from '@/utils/fetchApi';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Input from './Input';

export default function AddTask({
  setOpenModal,
  username,
  getId,
  setGetId,
}: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data } = useQuery('todo', FETCH_SERVICE.getTodo);
  const text = data?.data.find((e: any) => e._id === getId);
  console.log(text);

  const onSubmit = async (data: any) => {
    if (getId) {
      try {
        const response = await axios.put(
          'https://mern-todolist-backend-production.up.railway.app/todo/' +
            getId,
          {
            value: data.task,
          }
        );
        setOpenModal(false);
        setGetId('');
        location.reload();
        return console.log(response);
      } catch (error) {
        setOpenModal(false);
        setGetId('');
        return console.log(error);
      }
    }
    try {
      const response = await axios.post(
        'https://mern-todolist-backend-production.up.railway.app/todo',
        {
          username,
          value: data.task,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    location.reload();
    setOpenModal(false);
    setGetId('');
  };
  return (
    <>
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-sm">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start flex-col justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                {getId ? (
                  <>
                    <h3>Edit Kegiatan</h3>
                    <span className="text-sm">-{text.value}-</span>
                  </>
                ) : (
                  <h3>Tamabah Kegiatanmu</h3>
                )}
              </div>
              {/* body */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-center flex-col gap-2 px-4">
                  <Input
                    placeholder="Kegiatan"
                    register={register}
                    name="task"
                    validation={{
                      required: 'Tidak Boleh Kosong',
                    }}
                    error={errors.task?.message}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-700 background-transparent px-4 py-2 text-sm outline-none hover:text-red-500 focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setOpenModal(false);
                      setGetId('');
                    }}
                  >
                    Batal
                  </button>
                  <button
                    className="bg-primary text-black hover:bg-primary/75 active:bg-primary/75 text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    </>
  );
}
