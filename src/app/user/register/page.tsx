'use client';

import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import { ZodError, z } from 'zod';
import {
  emailValidation,
  passwordValidation,
  usernameValidation,
} from '@common/validators';

type RegisterFormError = {
  usernameErrorMsg?: string;
  emailErrorMsg?: string;
  passwordErrorMsg?: string
}

export default function RegisterForm() {
  const [formData, setFormData] = useState<{
    username?: string;
    email?: string;
    password?: string;
  }>({});

  const [formError, setformError] = useState<RegisterFormError>({});

  const [isLoading, setIsLoading] = useState(false);

  const registerSchema = z.object({
    username: z
      .string({
        required_error: 'you must specify username',
        invalid_type_error: 'only enter a name',
      })
      .min(4)
      .max(16)
      .regex(usernameValidation, 'Enter a valid username'),
    password: z
      .string({
        required_error: 'you must specify username',
        invalid_type_error: 'only enter a name',
      })
      .regex(passwordValidation),
    email: z.string({
      required_error: 'you must specify an email'
    }).min(6).max(30).regex(emailValidation, 'non valid email'),
  });

  function submitHandler(e: any) {
    e.preventDefault();

    try {
      console.log(formData);
      registerSchema.parse(formData);
      // If the data is valid, submit the form
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        let currentError: RegisterFormError = {};
        error.errors.forEach((validationError) => {
          if (validationError.path[0].toString() === 'username') currentError.usernameErrorMsg = validationError.message;

          if (validationError.path[0].toString() === 'email') currentError.emailErrorMsg = validationError.message;

          if (validationError.path[0].toString() === 'password') currentError.passwordErrorMsg = validationError.message;

          if(currentError) setformError(currentError);
        });
      }
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
          errorMessage={formError.usernameErrorMsg}
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
          errorMessage={formError.emailErrorMsg}
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
          errorMessage={formError.passwordErrorMsg}
          placeholder='key for login'
        />
        <Button
          size='lg'
          variant='solid'
          color='success'
          type='submit'
          className='text-white font-semibold'
        >
          Create Account
        </Button>
      </form>
    </div>
  );
}
