import prismadb from '@/lib/prismadb';

interface IStoreDataProps {
  name: string;
  userId: string;
}

export const createStore = async ({
  name,
  userId,
}: IStoreDataProps): Promise<any> => {
  const store = await prismadb.store.create({
    data: {
      name,
      userId,
    },
  });

  if (!store) {
    console.log('Not create store!');
  }
  return store;
};
