import { CategoryFormValues } from "@/app/(dashboard)/[storeId]/(routes)/categories/[categoryId]/components/category-form";
import { api } from "@/lib/fetcher";

interface IUserStoreProps {
  storeId: string;
  categoryId: string;
  data: CategoryFormValues;
}

const useUpdateCategory = async ({
  storeId,
  categoryId,
  data
}: IUserStoreProps): Promise<CategoryData> => {
  try {
    const url = `/api/${storeId}/categories/${categoryId}`;
    return await api.patch(url, data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    return {} as CategoryData
  }
};

export default useUpdateCategory;
