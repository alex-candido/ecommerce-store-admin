import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } },
) {
  try {
    if (!params.storeId) {
      return new NextResponse('Store id is required', { status: 400 });
    }

    const colors = await prismadb.color.findMany({
      where: {
        storeId: params.storeId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(colors);
  } catch (error) {
    console.log('[COLOR_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
