import prismadb from '@/lib/prismadb';

interface IProductDataProps {
  name: string;
  price: number;
  isFeatured: boolean;
  isArchived: boolean;
  categoryId: string;
  colorId: string;
  sizeId: string;
  storeId: string;
  images: [];
}

export const createProduct = async ({
  name,
  price,
  isFeatured,
  isArchived,
  categoryId,
  colorId,
  sizeId,
  storeId,
  images,
}: IProductDataProps): Promise<any> => {
  const product = await prismadb.product.create({
    data: {
      name,
      price,
      isFeatured,
      isArchived,
      categoryId,
      colorId,
      sizeId,
      storeId,
      images: {
        createMany: {
          data: [...images.map((image: { url: string }) => image)],
        },
      },
    },
  });

  if (!product) {
    console.log('Not create product!');
  }
  return product;
};
