import Button from '@/components/Button';
import Input from '@/components/Input';
import Link from 'next/link';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Router from 'next/router';

const register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    if (data.password !== data.confirmPassword) {
      alert('Konfirmasi Password Salah');
    }
    try {
      const response = await axios.post(
        'https://mern-todolist-backend-production.up.railway.app/auth/signup',
        {
          username: data.username,
          password: data.password,
        }
      );
      if (response.data.error) {
        return alert('Username tidak cocok');
      }
      Router.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="flex-center flex-col w-full min-h-screen">
        <h2>Daftar</h2>
        <form
          className="flex flex-col w-11/12 gap-3 mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            placeholder="Username"
            register={register}
            name="username"
            validation={{
              required: 'Username Tidak Boleh Kosong',
              minLength: {
                value: 3,
                message: 'Minimal 3 karakter',
              },
            }}
            error={errors.username?.message}
          />
          <Input
            placeholder="Password"
            register={register}
            name="password"
            type="password"
            validation={{
              required: 'Password Tidak Boleh Kosong',
              pattern: {
                value: /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                message: 'Minimal 8 karakter, 1 huruf dan 1 angka',
              },
            }}
            error={errors.password?.message}
          />
          <Input
            placeholder="Konfirmasi Password"
            register={register}
            name="confirmPassword"
            type="password"
            validation={{
              required: 'Konfirmasi Password Tidak Boleh Kosong',
              pattern: {
                value: /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                message: 'Minimal 8 karakter, 1 huruf dan 1 angka',
              },
            }}
            error={errors.confirmPassword?.message}
          />
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
