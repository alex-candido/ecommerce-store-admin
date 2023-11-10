import { api } from '@/lib/fetcher';

interface IColorsProps {
  storeId: string;
}

const useGetAllColors = async ({
  storeId,
}: IColorsProps): Promise<ColorData[]> => {
  try {
    const url = `/api/colors/${storeId}`
    const { data } = await api.get(url)

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    return []
  }
};

export default useGetAllColors;

