import { z } from 'zod';

export const createKycSchema = z.object({
  name: z.string().min(3, 'Informe o nome'),

  document: z.string().min(5, 'Documento inválido'),

  documentType: z.enum([
    'RG',
    'CNH',
    'CPF',
  ]),
});

export type CreateKycFormData =
  z.infer<typeof createKycSchema>;