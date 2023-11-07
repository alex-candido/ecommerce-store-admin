import { BillboardFormValues } from "@/app/(dashboard)/[storeId]/(routes)/billboards/[billboardId]/components/billboard-form";
import { api } from "@/lib/fetcher";

interface IUserStoreProps {
  storeId: string;
  data: BillboardFormValues;
}

const usePostCreateBillboard = async ({
  storeId,
  data
}: IUserStoreProps): Promise<BillboardData> => {
  try {
    const url = `/api/${storeId}/billboards`;
    return await api.post(url, data)
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    return {} as BillboardData
  }
};

export default usePostCreateBillboard;
