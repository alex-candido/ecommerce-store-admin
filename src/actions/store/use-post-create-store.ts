import { SettingsFormValues } from '@/app/(dashboard)/[storeId]/(routes)/settings/components/settings-form';
import { api } from '@/lib/fetcher';

const usePostCreateStore = async (values: SettingsFormValues): Promise<StoreData> => {
  try {
    const url = '/api/stores'
    const { data } = await api.post(url, values);

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    return {} as StoreData
  }
};

export default usePostCreateStore;
