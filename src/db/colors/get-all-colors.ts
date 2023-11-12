import prismadb from '@/lib/prismadb';

interface IColorsDataProps {
  storeId: string;
}

export const getAllColorsByStoreId = async ({
  storeId,
}: IColorsDataProps): Promise<any> => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  if (!colors) {
    console.log('Not return colors!');
  }
  return colors;
};
