'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

import { useLogin } from '../../hooks';
import {
  loginSchema,
  type LoginFormData,
} from '../../schemas/login.schema';

import styles from './LoginForm.module.css';

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const {
    mutate,
    isPending,
    isError,
  } = useLogin();

  function onSubmit(data: LoginFormData) {
    mutate(data);
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        id="email"
        label="E-mail"
        disabled={isPending}
        {...register('email')}
        error={errors.email?.message}
      />

      <Input
        id="password"
        type="password"
        label="Senha"
        disabled={isPending}
        {...register('password')}
        error={errors.password?.message}
      />

      <Button
        type="submit"
        disabled={isPending}
      >
        {isPending ? 'Entrando...' : 'Entrar'}
      </Button>

      {isError && (
        <p className={styles.error}>
          Não foi possível realizar o login.
        </p>
      )}
    </form>
  );
}