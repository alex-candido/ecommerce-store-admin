import prismadb from '@/lib/prismadb';

interface ICategoryDataProps {
  storeId: string;
}

export const getAllCategoriesByStoreId = async ({
  storeId,
}: ICategoryDataProps): Promise<any> => {
  const category = await prismadb.category.findMany({
    where: {
      storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  if (!category) {
    console.log('Not return category!');
  }
  return category;
};
