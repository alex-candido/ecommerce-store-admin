import { auth } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';

import {
  getFirstStoreById,
  getFirstStoreByUser,
} from '@/db/store/get-return-store';
import { createStore } from '@/db/store/post-create-store';


export async function POST(req: Request) {
  try {
    const { userId }: { userId: string | null } = auth();
    const body = await req.json();

    const { name } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 403 });
    }

    if (!name) {
      return new NextResponse('Name is required', { status: 400 });
    }

    const store = await createStore({
      name,
      userId,
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log('[STORES_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const userId = await req.nextUrl.searchParams.get('userId');
    const storeId = await req.nextUrl.searchParams.get('storeId');

    if (!userId) {
      return new NextResponse('User id is required', { status: 400 });
    }

    let store;

    if (storeId === 'undefined') {
      store = await getFirstStoreByUser(userId);
    } else {
      store = await getFirstStoreById({ storeId: String(storeId), userId });
    }

    return NextResponse.json(store);
  } catch (error) {
    console.log('[STORES_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
