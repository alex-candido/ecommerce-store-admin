import { format } from 'date-fns';

import useGetAllCategories from '@/actions/categories/use-get-all-categories';
import { CategoriesClient } from './components/client';
import { CategoryColumn } from './components/columns';

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {
  const categories = await useGetAllCategories({ storeId: params.storeId });

  const formattedCategories: CategoryColumn[] = categories.map(item => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoriesClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
