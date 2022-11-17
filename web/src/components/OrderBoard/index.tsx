export function OrderBoard() {
  return (
    <div className="p-4 border rounded-2xl flex flex-col items-center flex-1">
      <header className="p-2 flex gap-2 text-sm items-center text-[#333]">
        <span>🕑</span>
        <strong>Fila de espera</strong>
        <span>(1)</span>
      </header>

      <div className="flex flex-col w-full mt-6">
        <button className="border h-32 bg-white rounded-lg flex flex-col items-center justify-center gap-1 mb-6 hover:cursor-pointer">
          <strong className="font-medium text-[#333] text-base">Mesa 2</strong>
          <span className="font-normal text-sm text-[#666]">2 itens</span>
        </button>
      </div>
    </div>
  );
}
