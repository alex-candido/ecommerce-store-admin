import { ColorFormValues } from '@/app/(dashboard)/[storeId]/(routes)/colors/[colorId]/components/color-form';
import { api } from '@/lib/fetcher';

interface IColorProps {
  storeId: string;
  colorId: string;
  data: ColorFormValues;
}

const useUpdateColor = async ({
  storeId,
  colorId,
  data,
}: IColorProps): Promise<any> => {
  try {
    const url =  `/api/${storeId}/colors/${colorId}`;
    return await api.patch(url, data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export default useUpdateColor;
