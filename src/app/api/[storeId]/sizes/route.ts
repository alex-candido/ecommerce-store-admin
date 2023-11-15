import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import { getAllSizesByStoreId } from '@/db/sizes/get-return-size';
import { createSize } from '@/db/sizes/post-create-size';
import { getFirstStoreById } from '@/db/store/get-return-store';

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } },
) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const { name, value } = body;

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!name) {
      return new NextResponse('Name is required', { status: 400 });
    }

    if (!value) {
      return new NextResponse('Value is required', { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse('Store id is required', { status: 400 });
    }

    const storeByUserId = await getFirstStoreById({
      storeId: params.storeId,
      userId,
    });

    if (!storeByUserId) {
      return new NextResponse('Unauthorized', { status: 405 });
    }

    const size = await createSize({ name, value, storeId: params.storeId });

    return NextResponse.json(size);
  } catch (error) {
    console.log('[SIZES_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } },
) {
  try {
    if (!params.storeId) {
      return new NextResponse('Store id is required', { status: 400 });
    }

    const sizes = await getAllSizesByStoreId(params.storeId);

    return NextResponse.json(sizes);
  } catch (error) {
    console.log('[SIZES_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
