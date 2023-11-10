import { api } from '@/lib/fetcher';

interface IColorProps {
  storeId: string;
  colorId: string;
}

const useDeleteColor = async ({ storeId, colorId }: IColorProps): Promise<any> => {
  try {
    const url = `/api/${storeId}/colors/${colorId}`;
    return await api.delete(url);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export default useDeleteColor;
