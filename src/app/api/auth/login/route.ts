import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  const { email, password } = body;

  if (
    email !== 'admin@identityhub.com' ||
    password !== '123456'
  ) {
    return NextResponse.json(
      {
        message: 'Usuário ou senha inválidos.',
      },
      {
        status: 401,
      },
    );
  }

  return NextResponse.json({
    accessToken: 'access-token',
    refreshToken: 'refresh-token',
  });
}