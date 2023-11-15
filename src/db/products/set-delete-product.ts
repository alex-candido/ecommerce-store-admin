import prismadb from '@/lib/prismadb';

interface IProductDataProps {
  productId: string;
}

export const setDeleteProduct = async ({
  productId,
}: IProductDataProps): Promise<any> => {
  const product = await prismadb.product.delete({
    where: {
      id: productId,
    },
  });

  if (!product) {
    console.log('Not delete product!');
  }
  return product;
};
