import * as Dialog from '@radix-ui/react-dialog';
import { OrderProps } from '../../@types/Order';
import closeModal from '../../assets/image/close-icon.svg';
import { formatCurrency } from '../../utils/formatCurrency';

interface OrderModalProps {
  order: OrderProps | null;
  onCloseModal: () => void;
  onDeleteOrder: () => Promise<void>;
  isLoading: boolean;
  onChangeStatus: () => Promise<void>;
}

export function CreateModal({ order, onDeleteOrder, onCloseModal, isLoading, onChangeStatus }: OrderModalProps) {

  if (!order) {
    return null;
  }

  const totalPrice = order.products.reduce((acc, { product, quantity }) => {
    return acc + (product.price * quantity);
  }, 0);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed p-8 rounded-lg bg-white w-[480px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <Dialog.Title className="flex justify-between items-center text-2xl font-semibold text-[#333]">
          Mesa {order.table}
          <Dialog.Close onClick={onCloseModal}>
            <img src={closeModal} alt="" />
          </Dialog.Close>
        </Dialog.Title>

        <div className="mt-8">
          <small className="text-[#333]/80">Status do pedido</small>
          <div className="mt-2 flex items-center gap-2">
            <span>
              {order.status === 'WAITING' && '🕑'}
              {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong className="text-[#333]">
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em produção'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </div>

        <div className="mt-8">
          <strong className="text-[#333]/80 text-sm" >Itens</strong>

          {order.products.map(({ _id, product, quantity }) => (
            <div key={_id} className="flex py-1 items-start mt-4 border-b-2">
              <img className="rounded-md w-14 h-10" src={`http://localhost:3002/uploads/${product.imagePath}`} alt={product.name} />

              <span className='ml-3 block min-w-[20px] text-[#666] text-sm leading-6'>{quantity}x</span>

              <div className='flex flex-col ml-1 gap-1'>
                <strong className='text-[#333] font-semibold text-base '>{product.name}</strong>
                <span className="text-sm leading-6 font-normal text-[#666]">R$ {formatCurrency(product.price)}</span>
              </div>
            </div>
          ))}

        </div>
        <div className="mt-6 flex justify-between items-center">
          <span className='font-medium text-sm text-[#333]/80'>Total</span>
          <strong>{formatCurrency(totalPrice)}</strong>
        </div>

        <footer className='flex flex-col gap-4 mt-8'>
          {order.status !== 'DONE' && (
            <button
              disabled={isLoading}
              className='flex items-center justify-center gap-2 bg-[#333] text-white py-3 rounded-[48px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
              onClick={onChangeStatus}
            >
              <span>
                {order.status === 'WAITING' && '👩‍🍳'}
                {order.status === 'IN_PRODUCTION' && '✅'}

              </span>
              <span className="font-semibold text-base leading-none">
                {order.status === 'WAITING' && 'Iniciar Produção'}
                {order.status === 'IN_PRODUCTION' && 'Concluir Pedido'}

              </span>
            </button>
          )}

          <button
            disabled={isLoading}
            className='text-[#D73035] text-base leading-none font-semibold  py-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
            onClick={onDeleteOrder}
          >
            Cancelar Pedido
          </button>
        </footer>

      </Dialog.Content>
    </Dialog.Portal>
  );
}
