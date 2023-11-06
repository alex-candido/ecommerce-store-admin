'use client';

import { format } from 'date-fns';

import useGetAllBillboards from '@/actions/billboards/use-get-all-billboards';
import { BillboardClient } from '@/app/(dashboard)/[storeId]/(routes)/billboards/components/client';
import { BillboardColumn } from '@/app/(dashboard)/[storeId]/(routes)/billboards/components/columns';

const BillboardsPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await useGetAllBillboards({
    storeId: params.storeId,
  });

  const formattedBillboards: BillboardColumn[] = billboards.map(item => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default BillboardsPage;
