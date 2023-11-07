import { api } from "@/lib/fetcher";

interface IUserStoreProps {
  billboardId: string;
  storeId: string;
}

const useUpdateBillboard = async ({
  billboardId,
  storeId
}: IUserStoreProps): Promise<BillboardData> => {
  try {
    const url = `/api/${storeId}/billboards/${billboardId}`
    const { data } = await api.patch(url)

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    return {} as BillboardData
  }
};

export default useUpdateBillboard;
