import { SizeFormValues } from '@/app/(dashboard)/[storeId]/(routes)/sizes/[sizeId]/components/size-form';
import { api } from '@/lib/fetcher';

interface ISizeProps {
  storeId: string;
  sizeId: string;
  data: SizeFormValues;
}

const useUpdateSize = async ({
  storeId,
  sizeId,
  data,
}: ISizeProps): Promise<any> => {
  try {
    const url = `/api/${storeId}/sizes/${sizeId}`;
    return await api.patch(url, data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export default useUpdateSize;
