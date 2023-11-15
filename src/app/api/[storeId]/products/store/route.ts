import { NextResponse } from 'next/server';

import { getAllProductsByStoreId } from '@/db/products/get-all-products';

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } },
) {
  try {

    if (!params.storeId) {
      return new NextResponse('Store id is required', { status: 400 });
    }

    const products = await getAllProductsByStoreId(params.storeId)

    return NextResponse.json(products);
  } catch (error) {
    console.log('[PRODUCTS_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
