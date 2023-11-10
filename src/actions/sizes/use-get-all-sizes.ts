import { api } from '@/lib/fetcher';

interface ISizesProps {
  storeId: string;
}

const useGetAllSizes = async ({
  storeId,
}: ISizesProps): Promise<SizeData[]> => {
  try {
    const url = `/api/${storeId}/sizes`
    const { data } = await api.get(url)

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    return []
  }
};

export default useGetAllSizes;

