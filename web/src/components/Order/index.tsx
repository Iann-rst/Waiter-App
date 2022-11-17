import { OrderBoard } from '../OrderBoard';

export function Order() {
  return (
    <main className="w-full max-w-[1216px] my-10 mx-auto flex gap-8">
      <OrderBoard />
      <OrderBoard />
      <OrderBoard />
    </main>
  );
}
