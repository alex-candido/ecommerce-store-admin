import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import useGetStore from '@/actions/store/use-get-store';

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await useGetStore({ userId });

  if (store) {
    redirect(`/${store.id}`);
  }

  return <>{children}</>;
}
