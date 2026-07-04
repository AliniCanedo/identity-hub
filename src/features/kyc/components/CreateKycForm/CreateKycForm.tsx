'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

import {
  createKycSchema,
  type CreateKycFormData,
  useCreateKyc,
} from '@/features/kyc';

export function CreateKycForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateKycFormData>({
    resolver: zodResolver(createKycSchema),
  });

  const mutation = useCreateKyc();

  function onSubmit(data: CreateKycFormData) {
    mutation.mutate(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Nome"
        {...register('name')}
        error={errors.name?.message}
      />

      <Input
        label="Documento"
        {...register('document')}
        error={errors.document?.message}
      />

      <label>
        Tipo

        <select
          {...register('documentType')}
        >
          <option value="RG">
            RG
          </option>

          <option value="CNH">
            CNH
          </option>

          <option value="CPF">
            CPF
          </option>
        </select>
      </label>

      <Button
        type="submit"
        disabled={
          mutation.isPending ||
          mutation.isSuccess
        }
      >
        {mutation.isPending
          ? 'Criando...'
          : mutation.isSuccess
            ? 'Criado!'
            : 'Criar'}
      </Button>

      {mutation.isError && (
        <p>
          Não foi possível criar a validação.
        </p>
      )}
    </form>
  );
}