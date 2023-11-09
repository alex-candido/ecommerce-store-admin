import { BillboardFormValues } from "@/app/(dashboard)/[storeId]/(routes)/billboards/[billboardId]/components/billboard-form";
import { api } from "@/lib/fetcher";

interface IUserStoreProps {
  billboardId: string;
  storeId: string;
  data: BillboardFormValues;
}

const useUpdateBillboard = async ({
  billboardId,
  storeId,
  data
}: IUserStoreProps): Promise<BillboardData> => {
  try {
    const url = `/api/${storeId}/billboards/${billboardId}`
    return await api.patch(url, data)
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    return {} as BillboardData
  }
};

export default useUpdateBillboard;
