import { NextResponse } from 'next/server';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  request: Request,
  { params }: Props,
) {
  const { id } = await params;

  return NextResponse.json({
    id,
    name: 'João Silva',
    document: '123.456.789-00',
    documentType: 'RG',
    status: 'APPROVED',
  });
}