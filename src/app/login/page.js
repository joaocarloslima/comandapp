
export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <img
        src="/images/bowl.png"
        alt="Imagem de uma tigela"
        width={250}
        height={250}
      />
      <div className='text-center'>
        <h2 className='text-sky-950 text-xl'>Sistema</h2>
        <h1 className='text-sky-950 font-bold text-2xl'>Comanda</h1>
      </div>

      <form>
        <div className='flex flex-col gap-4'>
          <input className='border border-sky-700 rounded-md p-2 text-sky-900' type='text' placeholder='matrícula' autoFocus />
          <input className='border border-sky-700 rounded-md p-2 text-sky-900' type='password' placeholder='senha' />
          <button className='bg-sky-950 rounded-md p-2 text-amber-400 font-bold'>entrar</button>
          <a className='text-sky-950 text-sm' href='/registrar'>criar conta</a>
        </div>

      </form>
    </main>
  )
}
