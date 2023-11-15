import { api } from '@/lib/fetcher';

interface ISizeProps {
  sizeId: string;
}

const useGetSize = async ({ sizeId }: ISizeProps): Promise<SizeData> => {
  try {
    const url = `/api/sizes/${sizeId}`;
    const { data } = await api.get(url);

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return {} as SizeData;
  }
};

export default useGetSize;
