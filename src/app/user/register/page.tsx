'use client';

import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import { z } from 'zod';

export default function RegisterForm() {
  const [formData, setFormData] = useState<{
    username?: string;
    email?: string;
    password?: string;
  }>({});

  const [error, setError] = useState('');

  const [isLoading, setIsLoading] = useState(false)

  const registerSchema = z.object({
    username: z
      .string({
        required_error: 'you must specify username',
        invalid_type_error: 'only enter a name',
      })
      .min(8)
      .max(16)
      .regex(new RegExp('^[a-z0-9_-]{3,15}$')),
    password: z
      .string({
        required_error: 'you must specify username',
        invalid_type_error: 'only enter a name',
      })
      .min(8)
      .max(16)
      .regex(
        new RegExp(
          '^[a-z0-9_-]{3,15}$^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$'
        ),
        'Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character'
      ),
    email: z.string().min(6).max(30).regex(new RegExp('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+'), 'non valid email'),
  });

  function submitHandler(e: any) {
    e.preventDefault();

    try {
      registerSchema.parse(formData);
      // If the data is valid, submit the form
    } catch (error: unknown) {
      // If the data is invalid, display an error message
      console.log(error);
      setError('');
    }
  }

  return (
    <div className='w-3/12 mx-auto mt-40 border-2 border-slate-200 rounded-lg p-10 shadow-md '>
      <div className='text-center'>
        <h1 className='text-3xl font-bold pb-6'>Sign up</h1>
      </div>
      
      <form onSubmit={submitHandler} className='flex flex-col gap-y-6 '>
        <Input
          label='Username'
          placeholder='name of your account'
          variant='bordered'
          name='username'
          value={formData.username}
          onChange={(event) =>
            setFormData({
              ...formData,
              username: event.target.value,
            })
          }
          required={
            formData.username === undefined || formData.username?.length < 1
              ? true
              : false
          }
          errorMessage={error}
        />
        <Input
          name='email'
          value={formData.email}
          variant='bordered'
          onChange={(event) =>
            setFormData({
              ...formData,
              email: event.target.value,
            })
          }
          required={
            formData.email === undefined || formData.email?.length < 1
              ? true
              : false
          }
          errorMessage={error}
          label='Email'
          placeholder='enter your email'
        />
        <Input
          label='Password'
          name='password'
          variant='bordered'
          value={formData.password}
          onChange={(event) =>
            setFormData({
              ...formData,
              password: event.target.value,
            })
          }
          required={
            formData.password === undefined || formData.password?.length < 1
              ? true
              : false
          }
          errorMessage={error}
          placeholder='key for login'
        />
        <Button size='lg' variant='solid' color='success' type='submit' className='text-white font-semibold'>Create Account</Button>
      </form>
    </div>
  );
}
