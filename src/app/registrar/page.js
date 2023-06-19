
export default function Login() {
  return (
    <>
      <div className="w-full">
        <img
          src="/images/broa.png"
          alt="imagem de brias na mesa"
          className="object-cover w-full h-64"
        />
      </div>

      <main className="flex flex-col items-center justify-between px-24 py-8">
        <div className='text-center'>
          <h2 className='text-sky-950 text-xl'>criar</h2>
          <h1 className='text-sky-950 font-bold text-2xl'>Conta</h1>
        </div>

        <form>
          <div className='flex flex-col gap-4'>
            <input className='border border-sky-700 rounded-md p-2 text-sky-900' type='text' placeholder='nome completo' autoFocus />
            <input className='border border-sky-700 rounded-md p-2 text-sky-900' type='text' placeholder='matrícula'/>
            <input className='border border-sky-700 rounded-md p-2 text-sky-900' type='password' placeholder='senha' />
            <select className='border border-sky-700 rounded-md p-2 text-sky-900'>
              <option value=''>selecione o setor</option>
              <option value='pastel'>pastel</option>
              <option value='caixa'>caixa</option>
            </select>

            <button className='bg-sky-950 rounded-md p-2 text-amber-400 font-bold'>criar conta</button>
            <a className='text-sky-950 text-sm' href='/login'>fazer login</a>
          </div>

        </form>
      </main>
    </>
  )
}
