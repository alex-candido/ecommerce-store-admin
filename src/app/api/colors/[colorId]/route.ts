import { getUniqueColorById } from '@/db/colors/get-return-color';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { colorId: string } },
) {
  try {
    if (!params.colorId) {
      return new NextResponse('Color id is required', { status: 400 });
    }

    const colors = await getUniqueColorById({ colorId: params.colorId });

    return NextResponse.json(colors);
  } catch (error) {
    console.log('[COLOR_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
