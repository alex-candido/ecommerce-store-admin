import { ProductFormValues } from '@/app/(dashboard)/[storeId]/(routes)/products/[productId]/components/product-form';
import { api } from '@/lib/fetcher';

interface IProductProps {
  storeId: string;
  data: ProductFormValues;
}

const usePostCreateProduct = async ({
  storeId,
  data,
}: IProductProps): Promise<any> => {
  try {
    const url = `/api/${storeId}/products`;
    return await api.post(url, data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export default usePostCreateProduct;
