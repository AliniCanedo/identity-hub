'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

import {
  loginSchema,
  type LoginFormData,
} from '../../schemas/login.schema';

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: LoginFormData) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="email"
        label="E-mail"
        {...register('email')}
        error={errors.email?.message}
      />

      <Input
        id="password"
        type="password"
        label="Senha"
        {...register('password')}
        error={errors.password?.message}
      />

      <Button type="submit">
        Entrar
      </Button>
    </form>
  );
}