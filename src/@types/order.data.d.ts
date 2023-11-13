interface OrderData {
  id: string;
  storeId: string;
  store: StoreData;
  isPaid: boolean;
  orderItems: OrderItemData[];
  phone: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}





