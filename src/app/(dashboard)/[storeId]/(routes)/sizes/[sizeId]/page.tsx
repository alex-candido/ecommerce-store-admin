import useGetSize from '@/actions/sizes/use-get-size';
import { SizeForm } from './components/size-form';

const SizePage = async ({ params }: { params: { sizeId: string } }) => {
  const size = await useGetSize({ sizeId: params.sizeId });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={size} />
      </div>
    </div>
  );
};

export default SizePage;
