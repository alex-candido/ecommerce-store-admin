import useGetAllCategories from '@/actions/categories/use-get-all-categories';
import useGetAllColors from '@/actions/colors/use-get-all-colors';
import useGetProduct from '@/actions/products/use-get-product';
import useGetAllSizes from '@/actions/sizes/use-get-all-sizes';
import { ProductForm } from './components/product-form';

const ProductPage = async ({
  params,
}: {
  params: { productId: string; storeId: string };
}) => {
  const product = await useGetProduct({ productId: params.productId });

  const categories = await useGetAllCategories({ storeId: params.storeId });

  const sizes = await useGetAllSizes({ storeId: params.storeId });

  const colors = await useGetAllColors({ storeId: params.storeId });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm
          categories={categories}
          colors={colors}
          sizes={sizes}
          initialData={product}
        />
      </div>
    </div>
  );
};

export default ProductPage;
