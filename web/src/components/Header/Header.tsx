import logo from '../../assets/image/logo.svg';

export default function Header() {
  return (
    <header className='bg-[#D73035] flex justify-center h-48'>
      <div className='flex items-center justify-between w-full max-w-[1216px]'>
        <div>
          <h1 className='font-semibold text-4xl text-white'>Pedidos</h1>
          <h2 className='font-normal text-base text-white opacity-90'>Acompanhe os pedidos dos clientes</h2>
        </div>
        <img src={logo} alt="" />
      </div>
    </header>
  );
}
