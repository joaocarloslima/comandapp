import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold text-sky-950">Comanda Etecia</h1>
            <p className="text-xl text-sky-950">Bem vindo ao sistema de comanda da Etec Irmã Agostina</p>
            <Link href={'/login'} className="bg-sky-950 rounded-md p-2 text-amber-400 font-bold px-8">
                Começar
            </Link>
        </main>
    )
}
