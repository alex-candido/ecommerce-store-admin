import { api } from '@/lib/fetcher';

interface IUserStoreProps {
  storeId: string;
}

const useGetAllCategories = async ({
  storeId,
}: IUserStoreProps): Promise<CategoryData[]> => {
  try {
    const url = `/api/${storeId}/categories`;
    const { data } = await api.get(url);

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return [];
  }
};

export default useGetAllCategories;
