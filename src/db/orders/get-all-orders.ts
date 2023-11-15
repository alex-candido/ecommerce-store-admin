import prismadb from '@/lib/prismadb';

interface IOrdersDataProps {
  storeId: string;
}

export const getAllOrderByStoreId = async ({
  storeId,
}: IOrdersDataProps): Promise<any> => {
  const orders = await prismadb.order.findMany({
      where: {
        storeId,
      },
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

  if (!orders) {
    console.log('Not return orders!');
  }
  return orders;
};
