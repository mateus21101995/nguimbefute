"use client"

import Link from "next/link";
import { FaAngleDown, FaAngleUp, FaFacebook, FaYoutube} from 'react-icons/fa' ;
import {FiInstagram} from "react-icons/fi";
import Image from "next/image";
import LogoNguimbiFute from "../../public/nguinbifute.jpg"
import { useState } from "react";

export default function Header(){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <main className="flex flex-col shadow-sm box-content bg-white">
            <div className="flex bg-amber-500 text-slate-900">
                <div className="container m-auto max-w-[1200px] flex justify-between items-center font-semibold">
                    <div className="flex gap-4">
                        <Link href={"#"}>Publicite Aqui</Link>
                        <Link href={"#"}>Sobre</Link>
                    </div>
                    <div className="flex gap-2 rounded-lg border-slate-400 items-center h-9 px-2 justify-end  text-lg">
                        <Link href={"https://www.facebook.com/nguimbefute"} target="_blank" className="hover:text-blue-700 hover:rounded-lg"><FaFacebook /></Link>
                        <Link href={"https://www.instagram.com/nguimbefute/"} target="_blank" className="hover:text-orange-600 hover:rounded-lg"><FiInstagram /></Link>
                        <Link href={"https://www.youtube.com/@nguimbefute2425"} target="_blank" className="hover:text-red-500 hover:rounded-lg"><FaYoutube /></Link>
                    </div>
                </div>
            </div>

            <div className="flex h-36 justify-center items-center shadow-sm box-content gap-4">
                <div className="">
                    <Link href={"/"}>
                        <div className="text-5xl font-semibold text-red-500 flex gap-2 items-center">
                            <Image src={LogoNguimbiFute} alt="Nguimbifute" className="w-24 h-24" />
                            <h1 className="">NGUIMBIFUTE</h1>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="flex shadow-sm box-content py-4 font-medium text-lg">
                <div className="container m-auto  max-w-[1200px] flex gap-10 justify-between items-center">
                    <div className="flex gap-5 text-slate-800">
                        <div className="">
                            <button className="flex gap-1 items-center hover:text-red-400" onClick={()=> setIsOpen((prev) => !prev)}>
                                Notícias
                                {!isOpen ? (
                                    <div className="block">
                                        <h1>
                                            <FaAngleDown />
                                        </h1>
                                    </div>
                                ):(
                                    <div className="">
                                        <h1>
                                            <FaAngleUp />
                                        </h1>
                                    </div>
                                )}
                            </button>

                            {isOpen && (
                                <div className="flex flex-col absolute mt-2 bg-red-500 p-3 rounded w-48 text-slate-50">
                                    <Link href={"#"} className="rounded hover:bg-red-400 px-3 py-2">Nacional</Link>
                                    <Link href={"#"} className="rounded hover:bg-red-400 px-3 py-2">Diaspora</Link>
                                    <Link href={"#"} className="rounded hover:bg-red-400 px-3 py-2">Internacional</Link>
                                    <Link href={"#"} className="rounded hover:bg-red-400 px-3 py-2">Seleção</Link>
                                </div>
                            )}
                        </div>
                        <div className="flex gap-4">   
                            <Link href={"#"} className="hover:text-red-400">Tabelas</Link>
                            <Link href={"#"} className="hover:text-red-400">Podcasts</Link>
                        </div>
                    </div>
                    <div className="">
                        <Link href={"/membro"} className="bg-amber-500 px-5 py-2 rounded text-slate-800">Seja Membro</Link>
                    </div>
                    
                </div>
            </div>
                
        </main>
    )
}