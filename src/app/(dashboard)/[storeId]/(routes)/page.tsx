interface DashboardPageProps {
  params: {
    storeId: string;
  };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  return (
    <div>
      This is a Dashboard!
      <p>{params.storeId}</p>
    </div>
  );
};

export default DashboardPage;
