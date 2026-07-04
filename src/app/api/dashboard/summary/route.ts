import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const authorization = request.headers.get('authorization');

  if (!authorization) {
    return NextResponse.json(
      {
        message: 'Unauthorized',
      },
      {
        status: 401,
      },
    );
  }

  return NextResponse.json({
    totalUsers: 1824,
    pendingValidations: 27,
    approvedToday: 84,
  });
}