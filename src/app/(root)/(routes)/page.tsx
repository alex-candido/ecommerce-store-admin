import { UserButton } from '@clerk/nextjs';

const SetupPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Olá mundo!</h1>
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
};

export default SetupPage;
