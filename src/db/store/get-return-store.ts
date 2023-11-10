import prismadb from '@/lib/prismadb';

interface IStoreDataProps {
  userId: string;
  storeId: string;
}

export const getFirstStoreByUser = async (userId: string): Promise<any> => {
  const store = await prismadb.store.findFirst({
    where: {
      userId,
    },
  });

  if (!store) {
    console.log('Not return store!');
  }
  return store;
};

export const getAllStoresByUser = async (userId: string): Promise<any> => {
  const store = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  if (!store) {
    console.log('Not return stores!');
  }
  return store;
};

export const getFirstStoreById = async ({
  userId,
  storeId,
}: IStoreDataProps): Promise<any> => {
  const store = await prismadb.store.findFirst({
    where: { id: storeId, userId },
  });

  if (!store) {
    console.log('Not return store!');
  }
  return store;
};
