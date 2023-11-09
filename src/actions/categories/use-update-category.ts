import { api } from "@/lib/fetcher";

interface IUserStoreProps {
  categoryId: string;
  storeId: string;
}

const useUpdateCategory = async ({
  categoryId,
  storeId
}: IUserStoreProps): Promise<CategoryData> => {
  try {
    const url = `/api/${storeId}/categories/${categoryId}`
    const { data } = await api.patch(url)

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    return {} as CategoryData
  }
};

export default useUpdateCategory;
