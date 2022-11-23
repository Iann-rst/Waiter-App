import { useEffect, useState } from 'react';
import { OrderProps } from '../../@types/Order';
import { api } from '../../utils/api';
import { OrderBoard } from '../OrderBoard';

export function Order() {
  const [orders, setOrders] = useState<OrderProps[]>([]);


  useEffect(() => {
    api.get('/orders').then(({ data }) => {
      setOrders(data);
    });
  }, []);


  const waitingOrder = orders.filter((order) => order.status === 'WAITING');

  const inProductionOrder = orders.filter((order) =>
    order.status === 'IN_PRODUCTION'
  );

  const doneOrder = orders.filter((order) =>
    order.status === 'DONE'
  );

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) => prevState.filter(order => order._id !== orderId));
  }

  return (
    <main className="w-full max-w-[1216px] my-10 mx-auto flex gap-8">
      <OrderBoard icon='🕑' title="Fila de espera" orders={waitingOrder} onCancelOrder={handleCancelOrder} />
      <OrderBoard icon="👩‍🍳" title="Em produção" orders={inProductionOrder} onCancelOrder={handleCancelOrder} />
      <OrderBoard icon="✅" title="Pronto!" orders={doneOrder} onCancelOrder={handleCancelOrder} />
    </main>
  );
}
