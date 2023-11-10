import prismadb from '@/lib/prismadb';

interface ISizeDataProps {
  name: string;
  sizeId: string;
  value: string;
}

export const setUpdateSize = async ({
  name,
  sizeId,
  value,
}: ISizeDataProps): Promise<any> => {
  const size = await prismadb.size.update({
    where: {
      id: sizeId,
    },
    data: {
      name,
      value,
    },
  });

  if (!size) {
    console.log('Not update size!');
  }
  return size;
};
