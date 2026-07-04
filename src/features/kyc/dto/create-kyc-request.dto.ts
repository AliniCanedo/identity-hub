export interface CreateKycRequestDto {
  name: string;
  document: string;
  documentType: 'RG' | 'CNH' | 'CPF';
}