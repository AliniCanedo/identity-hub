export interface KycDetailsDto {
  id: string;
  name: string;
  document: string;
  documentType: 'RG' | 'CNH' | 'CPF';
  status: 'APPROVED' | 'PENDING' | 'REJECTED';
}