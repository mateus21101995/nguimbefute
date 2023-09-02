import Image from "next/image";
import Faf from "../../../public/faf.jpg"

export default function HomeInternacional(){
    return(
        <main className="container m-auto max-h-[700px] grid grid-cols-4 gap-3">
            <div className="w-full h-64 rounded-lg flex flex-col gap-2 shadow">
                <div className="w-full h-40">
                    <Image src={Faf} alt="faf" className="w-full h-full rounded-lg" />
                </div>
                <div className="p-2">
                    <h1 className="font-semibold">Titulo da Notícia</h1>
                    <p className="text-slate-950 text-sm">resumo da noticias em 200 caracteres</p>
                    <p className="text-slate-950 text-sm"><strong>Publicado por: </strong>Mateus</p>
                </div>
            </div>
        </main>
    )
}