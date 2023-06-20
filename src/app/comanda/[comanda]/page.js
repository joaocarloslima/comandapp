"use client";

import Produto from '@/components/Produto';
import { fecharPedido, getPedidoData } from '@/services/ApiService';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';


export default function Pedido({ params }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState({
    saldo: 0,
    total: 0,
    saldoFinal: 0,
    produtos: []
  })

  useEffect(() => {
    async function carregarDados() {
      if (!params.comanda) router.push('/comanda')
      if (!sessionStorage.getItem('token')) router.push('/login')

      try {
        const user = JSON.parse(sessionStorage.getItem('user'))
        const { saldo, produtos } = await getPedidoData(params.comanda, user.setor_id)
        setData({
          saldo,
          total: 0,
          saldoFinal: saldo,
          produtos: produtos.produtos
        })
      } catch (err) {
        console.log(err, err.message)
        setError("Erro ao carregar dados")
      }
    }
    carregarDados()
  }, [params.comanda])

  const handleAddProduto = (produto) => {
    if (data.saldoFinal < produto.preco) return

    const index = data.produtos.findIndex(p => p.id === produto.id)
    const produtos = [...data.produtos]
    produtos[index].qtde++
    const total = Number(data.total) + Number(produto.preco)
    setData({
      ...data,
      total: total,
      saldoFinal: Number(data.saldo) - total,
      produtos
    })
  }

  const handleRemoveProduto = (produto) => {
    if (produto.qtde === 0) return
    const index = data.produtos.findIndex(p => p.id === produto.id)
    const produtos = [...data.produtos]
    produtos[index].qtde--
    const total = Number(data.total) - Number(produto.preco)
    setData({
      ...data,
      total: total,
      saldoFinal: Number(data.saldo) - total,
      produtos
    })
  }

  const handleFecharPedido = async () => {
    setLoading(true)
    try {
      const produtos = data.produtos.filter(p => p.qtde > 0)
      await fecharPedido(params.comanda, produtos)
      router.push('/comanda')
    } catch (err) {
      console.log(err, err.message)
      setError(err.message || "Erro ao fechar pedido")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex gap-2 items-center justify-between border-b-2 p-2">
        <Link href="/comanda">
          <ArrowBackIcon className="text-sky-950" />
        </Link>
        <div className="flex flex-col items-center text-sky-950 bg-white	border-sky-800 border rounded p-2">
          <p className="text-sm">comanda</p>
          <strong className="text-3xl">{params.comanda}</strong>
        </div>
        <div className="flex flex-col items-center text-sky-950 bg-white	border-sky-800 border rounded p-2">
          <p className="text-sm">saldo</p>
          <p className="text-sm">
            R$
            <strong className="text-3xl">{data.saldo}</strong>
          </p>
        </div>
      </div>

      <main className="flex min-h-screen flex-col p-4 bg-slate-100	">


        <div className='flex flex-col gap-4 text-sky-950 w-full bg-white p-2 rounded'>
          <h3 className='font-bold text-xl'>Pedido</h3>
          <div className='flex justify-between'>
            <span>Saldo da comanda</span>
            <span className='text-green-600'>R$ {data.saldo}</span>
          </div>
          <div className='flex justify-between border-b-2'>
            <span>Total do pedido</span>
            <span className='text-red-600'>R$ {data.total}</span>
          </div>
          <div className='flex justify-between'>
            <span>Saldo</span>
            <span className='font-bold'>R$ {data.saldoFinal}</span>
          </div>
        </div>

        <div className='flex gap-2 flex-col text-sky-950 mt-4'>
          <h2 className='font-bold text-xl'>Produtos</h2>


          {data.produtos.length > 0 ? (
            data.produtos.map((produto, index) => (
              <Produto key={index} produto={produto} add={handleAddProduto} remove={handleRemoveProduto} />
            ))
          ) : (
            <p className='text-center'>carregando...</p>
          )}
        </div>

        <div className='relative'>
          <div className='text-center w-full'>
            {error && <p className='text-red-600 font-bold'>Erro: {error}</p>}
          </div>
          <button
            onClick={handleFecharPedido}
            className='fixed inset-x-0 bottom-0 bg-sky-950 rounded-md p-2 text-amber-400 font-bold m-4'>
            {loading ? 'carregando...' : 'fechar pedido'}
          </button>
        </div>

      </main>
    </>
  )
}
