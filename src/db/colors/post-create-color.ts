import prismadb from '@/lib/prismadb';

interface IColorDataProps {
  storeId: string;
  name: string;
  value: string;
}

export const createColor = async ({
  name,
  storeId,
  value,
}: IColorDataProps): Promise<any> => {
  const color = await prismadb.color.create({
    data: {
      name,
      value,
      storeId,
    },
  });

  if (!color) {
    console.log('Not create color!');
  }
  return color;
};
