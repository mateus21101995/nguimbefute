import Link from "next/link";
import { FaFacebook, FaYoutube} from 'react-icons/fa' ;
import {FiInstagram} from "react-icons/fi"
import Logotipo from "../../public/nguinbifute.jpg"
import Image from "next/image";

export default function Header(){
    return(
        <main className="flex flex-col p-3 shadow-sm box-content h-16 font-semibold">
            <div className="container m-auto grid grid-cols-6 items-center">
                <div className="">
                    <Link href={"/"} className="font-bold text-3xl text-red-600">
                        <Image src={Logotipo} alt="NguimbiFute" className="h-12 w-14" />
                    </Link>
                </div>
                <div className="flex gap-10 items-center justify-center col-span-4">
                    <div className="flex gap-3">
                        <Link href={"/"} className="">Home</Link>
                        <Link href={"/"} className="">Girabola</Link>
                        <Link href={"/"} className="">Seleção</Link>
                        <Link href={"/"} className="">Diáspora</Link>
                        <Link href={"/"} className="">Internacional</Link>
                        <Link href={"/"} className="">Podcast</Link>
                        <Link href={"/"}>Buscar</Link>
                        <Link href={"/"} className="">Publicite</Link>
                    </div>
                </div>

                <div className="flex gap-2 rounded-lg border-slate-400 items-center h-9 px-2 justify-end">
                    <Link href={"https://www.facebook.com/nguimbefute"} target="_blank" className="hover:bg-slate-100 hover:rounded-lg"><FaFacebook /></Link>
                    <Link href={"https://www.instagram.com/nguimbefute/"} target="_blank" className="hover:bg-slate-100 hover:rounded-lg"><FiInstagram /></Link>
                    <Link href={"https://www.youtube.com/@nguimbefute2425"} target="_blank" className="hover:bg-slate-100 hover:rounded-lg"><FaYoutube /></Link>
                </div>
            </div>
        </main>
    )
}