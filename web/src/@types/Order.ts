export interface OrderProps {
  _id: string;
  table: string;
  status: 'WAITING' | 'DONE' | 'IN_PRODUCTION';
  products: {
    _id: string;
    quantity: number;
    product: {
      name: string;
      imagePath: string;
      price: number;
    }
  }[]
}
