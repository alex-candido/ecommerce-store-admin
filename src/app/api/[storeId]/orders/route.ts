import { getAllOrderByStoreId } from '@/db/orders/get-all-orders';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } },
) {
  try {
    if (!params.storeId) {
      return new NextResponse('Store id is required', { status: 400 });
    }

    const orders = await getAllOrderByStoreId({storeId: params.storeId})

    return NextResponse.json(orders);
  } catch (error) {
    console.log('[CORDERS_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
