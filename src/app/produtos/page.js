"use client";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Login() {
  return (
    <>
      <div className="flex gap-2 items-center justify-between border-b-2 p-2">
        <ArrowBackIcon className="text-sky-950" />
        <div className="flex flex-col items-center text-sky-950 bg-white	border-sky-800 border rounded p-2">
          <p className="text-sm">comanda</p>
          <strong className="text-3xl">0250</strong>
        </div>
        <div className="flex flex-col items-center text-sky-950 bg-white	border-sky-800 border rounded p-2">
          <p className="text-sm">saldo</p>
          <p className="text-sm">
            R$
            <strong className="text-3xl">110.50</strong>
          </p>
        </div>
      </div>

      <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-slate-100	">
        <div className='flex flex-col gap-4 text-sky-950 w-full bg-white p-2 rounded'>
          <h3 className='font-bold text-xl'>Produtos</h3>
          <div className='flex justify-between'>
            <span>Saldo da comanda</span>
            <span className='text-green-600'>R$ 110.50</span>
          </div>
          <div className='flex justify-between border-b-2'>
            <span>Total do pedido</span>
            <span className='text-red-600'>R$ 50.00</span>
          </div>
          <div className='flex justify-between'>
            <span>Saldo</span>
            <span className='font-bold'>R$ 59.90</span>
          </div>
        </div>

        <div className='relative'>
          <button className='fixed inset-x-0 bottom-0 bg-sky-950 rounded-md p-2 text-amber-400 font-bold m-4'>fechar pedido</button>    
        </div>
          
      </main>
    </>
  )
}
