import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    {
      id: '1',
      name: 'João Silva',
      document: '123.456.789-00',
      status: 'APPROVED',
    },
    {
      id: '2',
      name: 'Maria Souza',
      document: '987.654.321-00',
      status: 'PENDING',
    },
    {
      id: '3',
      name: 'Pedro Santos',
      document: '111.222.333-44',
      status: 'REJECTED',
    },
  ]);
}

export async function POST(request: Request) {
  const body = await request.json();

  return Response.json({
    id: crypto.randomUUID(),
    ...body,
  });
}