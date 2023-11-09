import { CategoryFormValues } from "@/app/(dashboard)/[storeId]/(routes)/categories/[categoryId]/components/category-form";
import { api } from "@/lib/fetcher";

interface IUserStoreProps {
  storeId: string;
  data: CategoryFormValues;
}

const usePostCreateCategory = async ({
  storeId,
  data
}: IUserStoreProps): Promise<CategoryData> => {
  try {
    const url = `/api/${storeId}/categories`;
    return await api.post(url, data)
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    return {} as CategoryData
  }
};

export default usePostCreateCategory;
