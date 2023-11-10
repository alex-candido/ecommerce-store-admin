import prismadb from '@/lib/prismadb';

interface ISizeDataProps {
  name: string;
  storeId: string;
  value: string;
}

export const createSize = async ({
  name,
  storeId,
  value,
}: ISizeDataProps): Promise<any> => {
  const size = await prismadb.size.create({
    data: {
      name,
      value,
      storeId,
    },
  });

  if (!size) {
    console.log('Not create size!');
  }
  return size;
};
