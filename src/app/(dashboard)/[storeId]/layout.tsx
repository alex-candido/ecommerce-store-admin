import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import useGetStore from '@/actions/use-get-store';

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await useGetStore({ userId, storeId: params.storeId });

  if (!store) {
    redirect('/');
  }

  return <>{children}</>;
}
