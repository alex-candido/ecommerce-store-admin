import prismadb from '@/lib/prismadb';

interface IStoreDataProps {
  userId: string;
  storeId: string;
}

export const setDeleteStore = async ({
  userId,
  storeId,
}: IStoreDataProps): Promise<any> => {
  const store = await prismadb.store.deleteMany({
    where: {
      id: storeId,
      userId,
    },
  });

  if (!store) {
    console.log('Not delete store!');
  }
  return store;
};
