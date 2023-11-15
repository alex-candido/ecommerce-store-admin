import prismadb from '@/lib/prismadb';

interface ICategoryDataProps {
  name: string;
  billboardId: string;
  categoryId: string;
}

export const setUpdateCategory = async ({
  name,
  billboardId,
  categoryId,
}: ICategoryDataProps): Promise<any> => {
  const category = await prismadb.category.update({
    where: {
        id: categoryId,
      },
      data: {
        name,
        billboardId,
      },
  });

  if (!category) {
    console.log('Not update category!');
  }
  return category;
};
