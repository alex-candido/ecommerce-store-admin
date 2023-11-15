import { api } from '@/lib/fetcher';

interface IUserStoreProps {
  userId: string;
  storeId?: string;
}

const useGetStore = async ({
  userId,
  storeId,
}: IUserStoreProps): Promise<StoreData | undefined> => {
  try {
    const url = !userId ? `/api/stores?userId=${userId}` : `/api/stores?userId=${userId}&storeId=${storeId}`;
    const { data } = await api.get(url)

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
};

export default useGetStore;
