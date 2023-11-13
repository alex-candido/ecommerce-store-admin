import prismadb from '@/lib/prismadb';

interface IProductDataProps {
  productId: string;
  name: string;
  price: number;
  isFeatured: boolean;
  isArchived: boolean;
  categoryId: string;
  colorId: string;
  sizeId: string;
  images: [];
}

export const setUpdateProduct = async ({
  productId,
  name,
  price,
  isFeatured,
  isArchived,
  categoryId,
  colorId,
  sizeId,
  images,
}: IProductDataProps): Promise<any> => {
  await prismadb.product.update({
    where: {
      id: productId,
    },
    data: {
      name,
      price,
      categoryId,
      colorId,
      sizeId,
      images: {
        deleteMany: {},
      },
      isFeatured,
      isArchived,
    },
  });

  const product = await prismadb.product.update({
    where: {
      id: productId,
    },
    data: {
      images: {
        createMany: {
          data: [...images.map((image: { url: string }) => image)],
        },
      },
    },
  });

  if (!product) {
    console.log('Not update product!');
  }
  return product;
};
