import prismadb from '@/lib/prismadb';

interface IProductDataProps {
  productId: string;
}

export const getUniqueProductById = async ({
  productId,
}: IProductDataProps): Promise<any> => {
  const product = await prismadb.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      images: true,
      category: true,
      size: true,
      color: true,
    },
  });

  if (!product) {
    console.log('Not return product!');
  }
  return product;
};
