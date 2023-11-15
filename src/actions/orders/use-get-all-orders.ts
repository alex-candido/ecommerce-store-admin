import { api } from '@/lib/fetcher';

interface IOrdersProps {
  storeId: string;
}

const useGetAllOrders = async ({
  storeId,
}: IOrdersProps): Promise<OrderData[]> => {
  try {
    const url = `/api/${storeId}/orders`
    const { data } = await api.get(url)

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    return []
  }
};

export default useGetAllOrders;

