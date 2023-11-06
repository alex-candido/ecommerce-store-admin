import prismadb from '@/lib/prismadb';

interface IStoreDataProps {
  name: string;
  userId: string;
  storeId: string;
}

export const setUpdateStore = async ({
  name,
  userId,
  storeId,
}: IStoreDataProps): Promise<any> => {
  const store = await prismadb.store.updateMany({
    where: {
      id: storeId,
      userId,
    },
    data: {
      name,
    },
  });

  if (!store) {
    console.log('Not update store!');
  }
  return store;
};
