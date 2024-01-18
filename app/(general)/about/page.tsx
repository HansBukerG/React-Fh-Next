import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Sobre nosotros',
    description: 'Esta es la pagina de nosotros :3',
    keywords: ['About Page', 'Hans Page', 'Informacion']
}

export default function AboutPage(){
    return (
        <>
            <h1 className="text-1xl">Quien soy</h1>
            <div className="grid gap-y-10 gap-x-5 grid-cols-2">
                <div><span className="text-center">Hola, mi nombre es hans buker gutierrez, me gusta programar</span></div>
                <div className="border rounded-xl p-4"><span className="text-7xl">Esta es mi pagina de ejemplo</span></div>
                <div><span className="text-7xl">About Page</span></div>

            </div>
        </>
    )
}