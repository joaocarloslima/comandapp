"use client"

import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function Login() {
  return (
    <>
      <div className='fixed top-8 right-8'>
        <a className='text-sky-950 text-sm' href='/login'>
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

        <form>
          <div className='flex flex-col gap-4'>
            <div className="flex gap-4">
              <input className='border border-sky-700 rounded-md p-2 text-sky-900 text-center' type='number' placeholder='comanda' autoFocus inputMode="numeric" />
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
