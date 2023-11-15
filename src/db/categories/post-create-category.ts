import prismadb from '@/lib/prismadb';

interface ICategoryDataProps {
  name: string;
  billboardId: string;
  storeId: string;
}

export const createCategory = async ({
  name,
  billboardId,
  storeId,
}: ICategoryDataProps): Promise<any> => {
  const category = await prismadb.category.create({
    data: {
      name,
      billboardId,
      storeId,
    },
  });

  if (!category) {
    console.log('Not create category!');
  }
  return category;
};
