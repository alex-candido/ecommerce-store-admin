import { NextResponse } from 'next/server';

import { getUniqueSizeById } from '@/db/sizes/get-return-size';

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
