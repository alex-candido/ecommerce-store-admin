import { Modal } from '@/components/UI/modal';
import { useStoreModal } from '@/hooks/use-store-modal';

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories."
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <div className="space-y-2">Future Create Store Form</div>
        </div>
      </div>
    </Modal>
  );
};
