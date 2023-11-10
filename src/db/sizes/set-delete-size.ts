import prismadb from '@/lib/prismadb';

interface ISizeDataProps {
  sizeId: string;
}

export const setDeleteSize = async ({
  sizeId,
}: ISizeDataProps): Promise<any> => {
  const size = await prismadb.size.delete({
    where: {
      id: sizeId,
    },
  });

  if (!size) {
    console.log('Not delete size!');
  }
  return size;
};
