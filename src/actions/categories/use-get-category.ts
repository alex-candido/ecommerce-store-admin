import { api } from "@/lib/fetcher";

interface IUserStoreProps {
  categoryId: string;
}

const useGetCategory = async ({
  categoryId,
}: IUserStoreProps): Promise<CategoryData> => {
  try {
    const url = `/api/categories/${categoryId}`
    const { data } = await api.get(url)

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    return {} as CategoryData
  }
};

export default useGetCategory;
