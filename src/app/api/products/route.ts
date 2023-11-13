import { getAllProductsByStoreId } from '@/db/products/get-all-products';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const storeId = await req.nextUrl.searchParams.get('storeId');

    if (!storeId) {
      return new NextResponse('Store id is required', { status: 400 });
    }

    const products = await getAllProductsByStoreId(storeId)

    return NextResponse.json(products);
  } catch (error) {
    console.log('[PRODUCTS_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
