'use client';

import { login, signUp } from '@/actions/authAction';
import { Button } from '@/components/Button';
import Input from '@/components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z
    .string()
    .min(8, { message: 'Please enter more than 8 digit password' }),
});

export type LoginFormFields = z.infer<typeof LoginFormSchema>;

export function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<LoginFormFields>({
    shouldUseNativeValidation: true,
    resolver: zodResolver(LoginFormSchema),
  });

  const FormSubmit = async (data: LoginFormFields) => {
    await login(data);
    reset();
  };

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit((data) => FormSubmit(data))}
    >
      <Input
        type="email"
        placeholder="sagar@email.com"
        label="Email"
        id="email"
        {...register('email', { required: true })}
      />
      <Input
        type="password"
        placeholder="********"
        label="Password"
        id="password"
        {...register('password', { required: true })}
      />
      <Button isSubmitting={isSubmitting} text="Log In" />
      <Button
        text="Sign Up"
        formAction={signUp}
        className="border border-primary-color bg-transparent text-black active:bg-primary-background_dark  active:text-white dark:text-white "
      />
    </form>
  );
}
