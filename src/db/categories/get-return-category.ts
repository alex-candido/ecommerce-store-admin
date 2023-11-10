import prismadb from '@/lib/prismadb';

interface ICategoryDataProps {
  categoryId: string;
}

export const getUniqueCategoryById = async ({
  categoryId,
}: ICategoryDataProps): Promise<any> => {
  const category = await prismadb.category.findUnique({
    where: {
      id: categoryId,
    },
    include: {
      billboard: true,
    },
  });

  if (!category) {
    console.log('Not return category!');
  }
  return category;
};


