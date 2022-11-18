import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';

import { OrderProps } from '../../@types/Order';
import { CreateModal } from '../CreateModal';

interface OrderBoardProps {
  icon: string;
  title: string;
  orders: OrderProps[];
}

export function OrderBoard({ icon, title, orders }: OrderBoardProps) {
  const [selectedOrderModal, setSelectedOrderModal] = useState<null | OrderProps>(null);

  function handleOpenModal(order: OrderProps) {
    console.log(order);
    setSelectedOrderModal(order);
  }

  return (
    <Dialog.Root>
      <div className="p-4 border rounded-2xl flex flex-col items-center flex-1">
        <header className="p-2 flex gap-2 text-sm items-center text-[#333]">
          <span>{icon}</span>
          <strong>{title}</strong>
          <span>({orders.length})</span>
        </header>

        <CreateModal order={selectedOrderModal} />


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
