import { NextResponse } from 'next/server';

import { getAllColorsByStoreId } from '@/db/colors/get-all-colors';
import { createColor } from '@/db/colors/post-create-color';
import { getFirstStoreById } from '@/db/store/get-return-store';
import { auth } from '@clerk/nextjs';

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
      userId: userId,
    });

    if (!storeByUserId) {
      return new NextResponse('Unauthorized', { status: 405 });
    }

    const color = await createColor({ storeId: params.storeId, name, value });

    return NextResponse.json(color);
  } catch (error) {
    console.log('[COLORS_POST]', error);
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

    const colors = await getAllColorsByStoreId({ storeId: params.storeId });

    return NextResponse.json(colors);
  } catch (error) {
    console.log('[COLORS_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
