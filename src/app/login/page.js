"use client"

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'

import { login } from "../../services/AuthService"

export default function Login() {
  const [values, setValues] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const route = useRouter()

  useEffect(() => {
    if (sessionStorage.getItem('token')) route.push('/comanda')
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await login(values)
      route.push('/comanda')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

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

      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4'>
          
          <input 
            className='border border-sky-700 rounded-md p-2 text-sky-900' 
            type='text' 
            placeholder='matrícula' 
            autoFocus 
            inputMode="numeric" 
            pattern="[0-9]*"
            value={values.matricula}
            onChange={e => setValues({ ...values, matricula: e.target.value })}
          />
          
          <input 
            className='border border-sky-700 rounded-md p-2 text-sky-900' 
            type='password' 
            placeholder='senha'
            value={values.password}
            onChange={e => setValues({ ...values, password: e.target.value })}
          />
          <button className='bg-sky-950 rounded-md p-2 text-amber-400 font-bold'>
            {loading ? 'Carregando...' : 'Entrar'}
          </button>

          <a className='text-sky-950 text-sm' href='/registrar'>criar conta</a>

          {error && <p className='text-red-500'>{error}</p>}
        </div>

      </form>
    </main>
  )
}
