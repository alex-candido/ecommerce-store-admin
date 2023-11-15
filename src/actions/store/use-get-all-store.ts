import { api } from '@/lib/fetcher';

interface IUserStoreProps {
  userId: string;
}

const useGetAllStore = async ({
  userId,
}: IUserStoreProps): Promise<StoreData[]> => {
  try {
    const url = `/api/stores/user?userId=${userId}`
    const { data } = await api.get(url)

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    return []
  }
};

export default useGetAllStore;
