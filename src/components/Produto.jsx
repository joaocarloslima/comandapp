export default function Produto(props) {
    const produto = props.produto
    const add = props.add
    const remove = props.remove

    function adicionar(){
        add(produto)
    }

    function remover(){
        remove(produto)
    }

    return (
        <div className='flex justify-between items-center w-full bg-white rounded p-2 gap-2'>
            <img className='rounded-lg' src='https://via.placeholder.com/60' alt='produto' />
            <div className='flex-1'>
                <h3 className='text-lg font-semibold'>{produto.nome}</h3>
                <p className='text-green-600 font-medium'>{produto.preco}</p>
            </div>
            <div className='bg-gray-200 text-sky-950 rounded-full'>
                <button onClick={remover} className='bg-gray-100 font-bold rounded-full h-10 w-10'>-</button>
                <span className='font-semibold p-2'>{produto.qtde}</span>
                <button onClick={adicionar} className='bg-sky-950 text-gray-200 font-bold rounded-full h-10 w-10'>+</button>
            </div>
        </div>
    )
}