import prismadb from "@/lib/prismadb";

export const getStockCount = async (storeId: string) => {
  const stockCount = await prismadb.product.count({
    where: {
      storeId,
      isArchived: false,
    }
  });

  if (!stockCount) {
    console.log('Not return stockCount!');
  }

  return stockCount;
};
