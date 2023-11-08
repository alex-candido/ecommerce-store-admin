import { SettingsFormValues } from '@/app/(dashboard)/[storeId]/(routes)/settings/components/settings-form';
import { api } from '@/lib/fetcher';

interface IUserStoreProps {
  storeId: string;
  data: SettingsFormValues;
}

const useUpdateStore = async ({
  storeId,
  data,
}: IUserStoreProps): Promise<any> => {
  try {
    const url = `/api/stores/${storeId}`;
    return await api.patch(url, data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export default useUpdateStore;
