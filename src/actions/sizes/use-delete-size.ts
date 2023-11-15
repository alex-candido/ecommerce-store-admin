import { api } from '@/lib/fetcher';

interface ISizeProps {
  storeId: string;
  sizeId: string;
}

const useDeleteSize = async ({ storeId, sizeId }: ISizeProps): Promise<any> => {
  try {
    const url = `/api/${storeId}/sizes/${sizeId}`;
    return await api.delete(url);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export default useDeleteSize;
