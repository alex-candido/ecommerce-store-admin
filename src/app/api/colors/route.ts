import { getAllColorsByStoreId } from '@/db/colors/get-all-colors';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const storeId = await req.nextUrl.searchParams.get('storeId');

    if (!storeId) {
      return new NextResponse('Store id is required', { status: 400 });
    }

    const colors = await getAllColorsByStoreId({ storeId });

    return NextResponse.json(colors);
  } catch (error) {
    console.log('[COLOR_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
