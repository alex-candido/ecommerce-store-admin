import useGetAllStore from '@/actions/use-get-all-store';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const stores = await useGetAllStore({
    userId,
  });

  console.log(stores);

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        navbar
        <div className="ml-auto flex items-center space-x-4">Buttons</div>
      </div>
    </div>
  );
};

export default Navbar;
