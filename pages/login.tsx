import Head from 'next/head';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react';
import Welcome from '@/components/Welcome';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Router from 'next/router';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        'https://mern-todolist-backend-production.up.railway.app/auth/login',
        {
          ...data,
        }
      );
      console.log(response);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      Router.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main className="flex-center flex-col min-h-screen gap-4 px-4">
        <Welcome />
        <section className="flex-center flex-col w-full mt-4">
          <h2>Login</h2>
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

            <span className="underline text-zinc-400 text-sm">
              Lupa Password?
            </span>
            <Button text="Masuk" type="submit" />
            <h6 className="text-center">
              Belum punya akun?{' '}
              <Link
                href="/register"
                className="underline text-secondary text-sm"
              >
                Daftar
              </Link>
            </h6>
          </form>
        </section>
      </main>
    </>
  );
}
