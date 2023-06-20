"use client"

import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { logout } from '@/services/AuthService';

export default function Comanda() {
  const [comanda, setComanda] = useState(null)
  const route = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
    route.push('/comanda/' + comanda)
  }

  async function sair() {
    await logout()
    route.push('/login')
  }

  return (
    <>
      <div className='fixed top-8 right-8'>
        <a onClick={sair} className='text-sky-950 text-sm'>
          <ExitToAppIcon />
        </a>
      </div>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='text-center'>
          <h2 className='text-sky-950 text-xl'>Comanda</h2>
          <h1 className='text-sky-950 font-bold text-2xl'>Festa Junina</h1>
        </div>

        <img
          src="/images/ticket.png"
          alt="Imagem de uma tigela"
          width={250}
          height={250}
        />

        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4'>
            <div className="flex gap-4">
              <input 
                className='border border-sky-700 rounded-md p-2 text-sky-900 text-center' 
                type='number' 
                placeholder='comanda' 
                autoFocus 
                inputMode="numeric" 
                pattern="[0-9]*"
                value={comanda}
                onChange={e => setComanda(e.target.value)}
              />
              <button className="bg-sky-950 rounded-md p-2 text-amber-400 font-bold">
                <DocumentScannerIcon />
              </button>
            </div>

            <button className='bg-sky-950 rounded-md p-2 text-amber-400 font-bold'>confirmar</button>
          </div>

        </form>
      </main>
    </>
  )
}
