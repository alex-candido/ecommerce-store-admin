import { api } from '@/lib/fetcher';

interface IProductsProps {
  storeId: string;
}

const useGetAllProducts = async ({
  storeId,
}: IProductsProps): Promise<ProductData[]> => {
  try {
    const url = `/api/products?storeId=${storeId}`
    const { data } = await api.get(url)

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    return []
  }
};

export default useGetAllProducts;

