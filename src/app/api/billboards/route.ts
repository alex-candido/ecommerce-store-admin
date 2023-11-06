import { getAllBillboardsByStoreId } from "@/db/billboards/get-return-billboards";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const storeId = await req.nextUrl.searchParams.get('storeId');

    if (!storeId) {
      return new NextResponse('Store id is required', { status: 400 });
    }

    const billboards = getAllBillboardsByStoreId(storeId)

    return NextResponse.json(billboards);
  } catch (error) {
    console.log('[BILLBOARDS_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
