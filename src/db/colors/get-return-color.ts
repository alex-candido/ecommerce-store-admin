import prismadb from '@/lib/prismadb';

interface IColorsDataProps {
  colorId: string;
}

export const getUniqueColorById = async ({
  colorId,
}: IColorsDataProps): Promise<any> => {
  const colors = await prismadb.color.findUnique({
    where: {
      id: colorId,
    },
  });

  if (!colors) {
    console.log('Not return colors!');
  }
  return colors;
};
