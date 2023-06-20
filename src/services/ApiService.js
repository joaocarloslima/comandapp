const url = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL

 async function getSaldo(comanda) {
    const res = await fetch(url + '/api/comanda/' + comanda, {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            'Accept': 'application/json',
        }
    })
    const data = await res.json()
    if (data.error)
        throw new Error(data.error)

    return data.saldo
}

 async function getProdutos(setor) {
    const res = await fetch(url + '/api/produtos/' + setor, {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            'Accept': 'application/json',
        }
    })
    const data = await res.json()
    if (data.error)
        throw new Error(data.error)

    return data
}

export async function getPedidoData(comanda, setor) {
    const saldo = await getSaldo(comanda)
    const produtos = await getProdutos(setor)
    return { saldo, produtos }
}

export async function fecharPedido(comanda, produtos) {
    const res = await fetch(url + '/api/fechar-pedido', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comanda_id: comanda, produtos })
    })
    const data = await res.json()
    
    if (data.error)
        throw new Error(data.error)

    return data
}