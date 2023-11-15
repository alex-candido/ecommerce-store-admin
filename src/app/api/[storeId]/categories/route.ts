import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import { getAllCategoriesByStoreId } from '@/db/categories/get-all-categories';
import { createCategory } from '@/db/categories/post-create-category';
import { getFirstStoreById } from '@/db/store/get-return-store';

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } },
) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const { name, billboardId } = body;

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!name) {
      return new NextResponse('Name is required', { status: 400 });
    }

    if (!billboardId) {
      return new NextResponse('Billboard ID is required', { status: 400 });
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

    const category = await createCategory({
      name,
      billboardId,
      storeId: params.storeId,
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log('[CATEGORIES_POST]', error);
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

    const categories = await getAllCategoriesByStoreId({storeId: params.storeId});

    return NextResponse.json(categories);
  } catch (error) {
    console.log('[CATEGORIES_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
