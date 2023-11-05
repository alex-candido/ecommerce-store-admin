import useStore from '@/actions/use-store';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const { data: store } = await useStore(userId);

  if (store) {
    redirect(`/${store.id}`);
  }

  return <>{children}</>;
}
