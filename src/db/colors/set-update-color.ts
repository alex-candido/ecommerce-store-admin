import prismadb from '@/lib/prismadb';

interface IColorsDataProps {
  colorId: string;
  name: string;
  value: string;
}

export const setUpdateColor = async ({
  colorId,
  name,
  value,
}: IColorsDataProps): Promise<any> => {
  const color = await prismadb.color.update({
    where: {
      id: colorId,
    },
    data: {
      name,
      value,
    },
  });

  if (!color) {
    console.log('Not return color!');
  }
  return color;
};
