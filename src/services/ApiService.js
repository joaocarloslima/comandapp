
 async function getSaldo(comanda) {
    const res = await fetch('http://localhost:8000/api/comanda/' + comanda, {
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
    const res = await fetch('http://localhost:8000/api/produtos/' + setor, {
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

