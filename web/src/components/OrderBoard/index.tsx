import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';

import { OrderProps } from '../../@types/Order';
import { api } from '../../utils/api';
import { CreateModal } from '../CreateModal';

interface OrderBoardProps {
  icon: string;
  title: string;
  orders: OrderProps[];
  onCancelOrder: (orderId: string) => void;
}

export function OrderBoard({ icon, title, orders, onCancelOrder }: OrderBoardProps) {
  const [selectedOrderModal, setSelectedOrderModal] = useState<null | OrderProps>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal(order: OrderProps) {
    setIsOpenModal(true);
    setSelectedOrderModal(order);
  }

  /* Deletar || Cancelar um pedido */
  async function handleDeleteOrder() {
    setIsLoading(true);
    try {
      await api.delete(`/orders/${selectedOrderModal?._id}`);


      onCancelOrder(selectedOrderModal!._id);
      setIsLoading(false);
      setIsOpenModal(false);


    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dialog.Root open={isOpenModal}>
      <div className="p-4 border rounded-2xl flex flex-col items-center flex-1">
        <header className="p-2 flex gap-2 text-sm items-center text-[#333]">
          <span>{icon}</span>
          <strong>{title}</strong>
          <span>({orders.length})</span>
        </header>

        <CreateModal order={selectedOrderModal} onDeleteOrder={handleDeleteOrder} isLoading={isLoading} onCloseModal={() => setIsOpenModal(false)} />


        {orders.length > 0 && <div className="flex flex-col w-full mt-6">
          {orders.map((order) => (
            <Dialog.Trigger key={order._id} onClick={() => handleOpenModal(order)} className="border h-32 bg-white rounded-lg flex flex-col items-center justify-center gap-1 mb-6 hover:cursor-pointer">
              <strong className="font-medium text-[#333] text-base">
                Mesa {order.table}
              </strong>
              <span className="font-normal text-sm text-[#666]">
                {order.products.length} items
              </span>
            </Dialog.Trigger>
          ))}
        </div>
        }
      </div>
    </Dialog.Root>
  );
}
