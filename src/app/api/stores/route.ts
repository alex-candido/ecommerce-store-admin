import { getFirstStore } from '@/db/store/get-return-store';
import { createStore } from '@/db/store/post-create-store';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { userId } : { userId: string | null } = auth();
    const body = await req.json();

    const { name } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 403 });
    }

    if (!name) {
      return new NextResponse('Name is required', { status: 400 });
    }

    const store = await createStore({
      name,
      userId,
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log('[STORES_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    if (!params.userId) {
      return new NextResponse("User id is required", { status: 400 });
    }

    const store = await getFirstStore({userId: params.userId})

    return NextResponse.json(store);
  } catch (error) {
    console.log('[STORES_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
