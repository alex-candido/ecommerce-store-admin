import { api } from '@/lib/fetcher';

interface IColorProps {
  colorId: string;
}

const useGetColor = async ({ colorId }: IColorProps): Promise<ColorData> => {
  try {
    const url = `/api/color/${colorId}`;
    const { data } = await api.get(url);

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return {} as ColorData;
  }
};

export default useGetColor;
