import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import useGetStore from '@/actions/store/use-get-store';
import { SettingsForm } from '@/app/(dashboard)/[storeId]/(routes)/settings/components/settings-form';

const SettingsPage = async ({ params }: { params: { storeId: string } }) => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await useGetStore({ userId, storeId: params.storeId });

  if (!store) {
    redirect('/');
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
};

export default SettingsPage;
