import { api } from '@/lib/fetcher';

interface IUserStoreProps {
  storeId: string;
}

const useDeleteStore = async ({
  storeId,
}: IUserStoreProps): Promise<any> => {
  try {
    const url = `/api/stores/${storeId}`;
    return await api.delete(url);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export default useDeleteStore;
