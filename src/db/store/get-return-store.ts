import prismadb from '@/lib/prismadb';

interface IStoreDataProps {
  userId: string;
}

export const getFirstStore = async ({ userId }: IStoreDataProps): Promise<any> => {
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
