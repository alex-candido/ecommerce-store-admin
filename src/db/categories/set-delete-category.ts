import prismadb from '@/lib/prismadb';

interface ICategoryDataProps {
  categoryId: string;
}

export const setDeleteCategory = async ({
  categoryId,
}: ICategoryDataProps): Promise<any> => {
  const category = await prismadb.category.delete({
    where: {
      id: categoryId,
    },
  });

  if (!category) {
    console.log('Not delete category!');
  }
  return category;
};
