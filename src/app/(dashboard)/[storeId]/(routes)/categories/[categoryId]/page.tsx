import useGetAllBillboards from '@/actions/billboards/use-get-all-billboards';
import useGetCategory from '@/actions/categories/use-get-category';
import { CategoryForm } from './components/category-form';

const CategoryPage = async ({
  params,
}: {
  params: { categoryId: string; storeId: string };
}) => {
  const category = await useGetCategory({
    categoryId: params.categoryId,
  });

  const billboards = await useGetAllBillboards({
    storeId: params.storeId,
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm billboards={billboards} initialData={category} />
      </div>
    </div>
  );
};

export default CategoryPage;
