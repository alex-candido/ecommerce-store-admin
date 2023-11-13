import { api } from '@/lib/fetcher';

interface IProductsProps {
  productId: string;
}

const useGetProduct = async (
  { productId }: IProductsProps): Promise<ProductData> => {
  try {
    const url = `/api/products/${productId}`
    const { data } = await api.get(url)

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    return {} as ProductData;
  }
};

export default useGetProduct;

