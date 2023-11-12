import prismadb from '@/lib/prismadb';

interface IColorsDataProps {
  colorId: string;
}

export const setDeleteColor = async ({
  colorId,
}: IColorsDataProps): Promise<any> => {
  const color = await prismadb.color.delete({
    where: {
      id: colorId,
    },
  });

  if (!color) {
    console.log('Not return color!');
  }
  return color;
};
