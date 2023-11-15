import { SizeFormValues } from '@/app/(dashboard)/[storeId]/(routes)/sizes/[sizeId]/components/size-form';
import { api } from '@/lib/fetcher';

interface ISizeProps {
  storeId: string;
  data: SizeFormValues;
}

const usePostCreateSize = async ({
  storeId,
  data,
}: ISizeProps): Promise<any> => {
  try {
    const url = `/api/${storeId}/sizes`;
    return await api.post(url, data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export default usePostCreateSize;
