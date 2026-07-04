import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();

  const file = formData.get('file') as File | null;

  if (!file) {
    return NextResponse.json(
      { message: 'Arquivo obrigatório.' },
      { status: 400 },
    );
  }

  return NextResponse.json({
    fileName: file.name,
    size: file.size,
    type: file.type,
    url: `/uploads/${file.name}`,
  });
}