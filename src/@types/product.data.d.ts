interface ProductData {
  id: string;
  storeId: string;
  store: StoreData;
  categoryId: string;
  category: CategoryData;
  name: string;
  price: float;
  isFeatured: boolean;
  isArchived: boolean;
  sizeId: string;
  size: SizeData;
  colorId: string;
  color: ColorData;
  images: ImagesData[];
  orderItems: OrderData[]
  createdAt: Date;
  updatedAt: Date;
}
