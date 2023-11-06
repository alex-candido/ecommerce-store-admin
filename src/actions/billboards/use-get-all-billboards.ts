import { api } from '@/lib/fetcher';

interface IUserStoreProps {
  storeId: string;
}

const useGetAllBillboards = async ({
  storeId,
}: IUserStoreProps): Promise<BillboardData[]> => {
  try {
    const url = `/api/billboards/user?storeId=${storeId}`
    const { data } = await api.get(url)

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    return []
  }
};

export default useGetAllBillboards;
