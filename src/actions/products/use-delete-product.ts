import { api } from '@/lib/fetcher';

interface IProductsProps {
  storeId: string;
  productId: string;
}

const useDeleteProduct = async (
  { storeId, productId }: IProductsProps): Promise<any> => {
  try {
    const url = `/api/${storeId}/products/${productId}`
    return await api.delete(url)
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    return []
  }
};

export default useDeleteProduct;

