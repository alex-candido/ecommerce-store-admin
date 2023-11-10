import prismadb from '@/lib/prismadb';

interface ISizeDataProps {
  userId?: string;
  storeId?: string;
  sizeId: string;
}

export const getUniqueSizeById = async ({
  sizeId,
}: ISizeDataProps): Promise<any> => {
  const size = await prismadb.size.findUnique({
    where: {
      id: sizeId,
    },
  });

  if (!size) {
    console.log('Not return size!');
  }
  return size;
};

export const getAllSizesByStoreId = async (storeId: string): Promise<any> => {
  const sizes = await prismadb.size.findMany({
    where: {
      storeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  if (!sizes) {
    console.log('Not return sizes!');
  }
  return sizes;
};
