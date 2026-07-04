export interface KycDto {
  id: string;
  name: string;
  document: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
}