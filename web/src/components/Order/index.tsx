import { OrderProps } from '../../@types/Order';
import { OrderBoard } from '../OrderBoard';

export function Order() {

  const orders: OrderProps[] = [
    {
      '_id': '63750c1da59520df0875b3b1',
      'table': '4',
      'status': 'WAITING',
      'products': [
        {
          'product': {
            'name': 'Hambúrguer de Frango',
            'imagePath': '1668613049309-chicken.png',
            'price': 85,
          },
          'quantity': 5,
          '_id': '63750c1da59520df0875b3b2'
        },
        {
          'product': {
            'name': 'Coca cola',
            'imagePath': '1668613283068-coca-cola.png',
            'price': 12,
          },
          'quantity': 4,
          '_id': '63750c1da59520df0875b3b3'
        },
        {
          'product': {

            'name': 'Suco de Laranja',
            'imagePath': '1668613323489-suco-de-laranja.png',
            'price': 7,
          },
          'quantity': 1,
          '_id': '63750c1da59520df0875b3b4'
        }
      ]
    }
  ];

  return (
    <main className="w-full max-w-[1216px] my-10 mx-auto flex gap-8">
      <OrderBoard icon='🕑' title="Fila de espera" orders={orders} key={orders[0]._id} />
      <OrderBoard icon="👩‍🍳" title="Em produção" orders={[]} />
      <OrderBoard icon="✅" title="Pronto!" orders={[]} />
    </main>
  );
}
