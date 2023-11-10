import { ColorFormValues } from '@/app/(dashboard)/[storeId]/(routes)/colors/[colorId]/components/color-form';
import { api } from '@/lib/fetcher';

interface IColorProps {
  storeId: string;
  data: ColorFormValues;
}

const usePostCreateColor = async ({
  storeId,
  data,
}: IColorProps): Promise<any> => {
  try {
    const url = `/api/${storeId}/colors`;
    return await api.post(url, data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export default usePostCreateColor;
