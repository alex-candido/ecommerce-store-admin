import { ProductFormValues } from '@/app/(dashboard)/[storeId]/(routes)/products/[productId]/components/product-form';
import { api } from '@/lib/fetcher';

interface IProductProps {
  storeId: string;
  productId: string;
  data: ProductFormValues;
}

const useUpdateProduct = async ({
  storeId,
  productId,
  data,
}: IProductProps): Promise<any> => {
  try {
    const url =   `/api/${storeId}/products/${productId}`;
    return await api.patch(url, data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export default useUpdateProduct;
