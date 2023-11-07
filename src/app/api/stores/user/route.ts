import { getAllStoresByUser } from '@/db/store/get-return-store';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const userId = await req.nextUrl.searchParams.get('userId');

    if (!userId) {
      return new NextResponse('User id is required', { status: 400 });
    }

    const store = await getAllStoresByUser(userId);

    return NextResponse.json(store);
  } catch (error) {
    console.log('[STORES_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
