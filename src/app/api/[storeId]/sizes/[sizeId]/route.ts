import { NextResponse } from 'next/server';

import { getUniqueSizeById } from '@/db/sizes/get-return-size';
import { setDeleteSize } from '@/db/sizes/set-delete-size';
import { setUpdateSize } from '@/db/sizes/set-update-size';
import { getFirstStoreById } from '@/db/store/get-return-store';

import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';

export async function GET(
  req: Request,
  { params }: { params: { sizeId: string } },
) {
  try {
    if (!params.sizeId) {
      return new NextResponse('Size id is required', { status: 400 });
    }

    const size = await getUniqueSizeById({ sizeId: params.sizeId });

    return NextResponse.json(size);
  } catch (error) {
    console.log('[SIZE_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { sizeId: string; storeId: string } },
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!params.sizeId) {
      return new NextResponse('Size id is required', { status: 400 });
    }

    const storeByUserId = await getFirstStoreById({
      storeId: params.storeId,
      userId,
    });

    if (!storeByUserId) {
      return new NextResponse('Unauthorized', { status: 405 });
    }

    const size = await setDeleteSize({ sizeId: params.sizeId });

    return NextResponse.json(size);
  } catch (error) {
    console.log('[SIZE_DELETE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { sizeId: string; storeId: string } },
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

    if (!params.sizeId) {
      return new NextResponse('Size id is required', { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse('Unauthorized', { status: 405 });
    }

    const size = await setUpdateSize({ sizeId: params.sizeId, name, value });

    return NextResponse.json(size);
  } catch (error) {
    console.log('[SIZE_PATCH]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
