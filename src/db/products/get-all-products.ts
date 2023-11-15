import prismadb from '@/lib/prismadb';

interface IProductDataProps {
  storeId: string;
  categoryId: string | undefined;
  colorId: string | undefined;
  sizeId: string | undefined;
  isFeatured: string | null;
}

export const getAllProductsByStoreId = async (
  storeId: string,
): Promise<any> => {
  const products = await prismadb.product.findMany({
    where: {
      storeId,
    },
    include: {
      category: true,
      size: true,
      color: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  if (!products) {
    console.log('Not return products!');
  }
  return products;
};

export const getAllProducts = async ({
  storeId,
  categoryId,
  colorId,
  sizeId,
  isFeatured,
}: IProductDataProps): Promise<any> => {
  const products = await prismadb.product.findMany({
    where: {
      storeId,
      categoryId,
      colorId,
      sizeId,
      isFeatured: isFeatured ? true : undefined,
      isArchived: false,
    },
    include: {
      images: true,
      category: true,
      color: true,
      size: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  if (!products) {
    console.log('Not return products!');
  }
  return products;
};
