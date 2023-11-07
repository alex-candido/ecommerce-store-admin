import prismadb from '@/lib/prismadb';

export const getAllBillboardsByStoreId = async (storeId: string): Promise<any> => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  if (!billboards) {
    console.log('Not return billboards!');
  }
  return billboards;
};
