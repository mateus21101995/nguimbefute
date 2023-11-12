import Image from "next/image";
import Tundavala from "../../../public/tundavala.jpg"
import Link from "next/link";
import axios from "axios";
import { PostsProps } from "@/app/entidade/postProps";

async function getPost(){
    const response = await axios.get<PostsProps[]>("http://localhost:4000/posts");
    return response.data;
}

export default async function HomeNacional(){

    const posts = await getPost();
    return(
        <main className="flex p-3">
            <div className="container m-auto max-w-[1200px]">
                <div className="text-3xl py-5 font-semibold">
                    <h1>DESTAQUES</h1>
                </div>
                <div className="w-full grid grid-cols-4 gap-6">
                    {posts.slice(0,4).map((post)=>(
                        <div className="w-full h-60 flex flex-col gap-2" key={post.id}>
                            <div className="w-full rounded-lg bg-blue-100 h-48">
                                <Image src={Tundavala} alt="Tundavala" className="w-full rounded-lg h-full" />
                            </div>
                            <div className="">
                                <Link href={post.slug} className="text-slate-900 text-lg">
                                    {post.title}
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="text-3xl py-5 font-semibold ">
                    <h1>NOTÍCIAS AO MINUTO</h1>
                </div>

                <div className="flex justify-between gap-8">
                    <div className="w-full grid grid-cols-2 gap-6">
                        <div className="w-full h-60 flex flex-col gap-2">
                            <div className="w-full rounded-lg bg-blue-100 h-48">
                                <Image src={Tundavala} alt="Tundavala" className="w-full rounded-lg h-full" />
                            </div>
                            <div className="">
                                <Link href={"/"} className="text-slate-900 text-xl">
                                    Estadio da Tundavala
                                </Link>
                            </div>
                        </div>
                        
                        <div className="w-full h-60 flex flex-col gap-2">
                            <div className="w-full rounded-lg bg-blue-100 h-48">
                                <Image src={Tundavala} alt="Tundavala" className="w-full rounded-lg h-full" />
                            </div>
                            <div className="">
                                <Link href={"/"} className="text-slate-900 text-xl">
                                    Estadio da Tundavala
                                </Link>
                            </div>
                        </div>
                        
                        <div className="w-full h-60 flex flex-col gap-2">
                            <div className="w-full rounded-lg bg-blue-100 h-48">
                                <Image src={Tundavala} alt="Tundavala" className="w-full rounded-lg h-full" />
                            </div>
                            <div className="">
                                <Link href={"/"} className="text-slate-900 text-xl">
                                    Estadio da Tundavala
                                </Link>
                            </div>
                        </div>
                        
                        <div className="w-full h-60 flex flex-col gap-2">
                            <div className="w-full rounded-lg bg-blue-100 h-48">
                                <Image src={Tundavala} alt="Tundavala" className="w-full rounded-lg h-full" />
                            </div>
                            <div className="">
                                <Link href={"/"} className="text-slate-900 text-xl">
                                    Estadio da Tundavala
                                </Link>
                            </div>
                        </div>

                        
                    </div>
                    <div className="w-[700px] bg-slate-200 rounded-lg">
                        <h1>Transferências e Rumores</h1>
                        
                    </div>
                </div>

                
                <div className="w-full grid grid-cols-4 gap-6 py-4">
                    <div className="w-full h-60 flex flex-col gap-2">
                        <div className="w-full rounded-lg bg-blue-100 h-48">
                            <Image src={Tundavala} alt="Tundavala" className="w-full rounded-lg h-full" />
                        </div>
                        <div className="">
                            <Link href={"/"} className="text-slate-900 text-xl">
                                Estadio da Tundavala
                            </Link>
                        </div>
                    </div>

                    <div className="w-full h-60 flex flex-col gap-2">
                        <div className="w-full rounded-lg bg-blue-100 h-48">
                            <Image src={Tundavala} alt="Tundavala" className="w-full rounded-lg h-full" />
                        </div>
                        <div className="">
                            <Link href={"/"} className="text-slate-900 text-xl">
                                Estadio da Tundavala
                            </Link>
                        </div>
                    </div>

                    <div className="w-full h-60 flex flex-col gap-2">
                        <div className="w-full rounded-lg bg-blue-100 h-48">
                            <Image src={Tundavala} alt="Tundavala" className="w-full rounded-lg h-full" />
                        </div>
                        <div className="">
                            <Link href={"/"} className="text-slate-900 text-xl">
                                Estadio da Tundavala
                            </Link>
                        </div>
                    </div>

                    <div className="w-full h-60 flex flex-col gap-2">
                        <div className="w-full rounded-lg bg-blue-100 h-48">
                            <Image src={Tundavala} alt="Tundavala" className="w-full rounded-lg h-full" />
                        </div>
                        <div className="">
                            <Link href={"/"} className="text-slate-900 text-xl">
                                Estadio da Tundavala
                            </Link>
                        </div>
                    </div>
                    <div className="w-full h-60 flex flex-col gap-2">
                        <div className="w-full rounded-lg bg-blue-100 h-48">
                            <Image src={Tundavala} alt="Tundavala" className="w-full rounded-lg h-full" />
                        </div>
                        <div className="">
                            <Link href={"/"} className="text-slate-900 text-xl">
                                Estadio da Tundavala
                            </Link>
                        </div>
                    </div>

                    <div className="w-full h-60 flex flex-col gap-2">
                        <div className="w-full rounded-lg bg-blue-100 h-48">
                            <Image src={Tundavala} alt="Tundavala" className="w-full rounded-lg h-full" />
                        </div>
                        <div className="">
                            <Link href={"/"} className="text-slate-900 text-xl">
                                Estadio da Tundavala
                            </Link>
                        </div>
                    </div>

                    <div className="w-full h-60 flex flex-col gap-2">
                        <div className="w-full rounded-lg bg-blue-100 h-48">
                            <Image src={Tundavala} alt="Tundavala" className="w-full rounded-lg h-full" />
                        </div>
                        <div className="">
                            <Link href={"/"} className="text-slate-900 text-xl">
                                Estadio da Tundavala
                            </Link>
                        </div>
                    </div>

                    <div className="w-full h-60 flex flex-col gap-2">
                        <div className="w-full rounded-lg bg-blue-100 h-48">
                            <Image src={Tundavala} alt="Tundavala" className="w-full rounded-lg h-full" />
                        </div>
                        <div className="">
                            <Link href={"/"} className="text-slate-900 text-xl">
                                Estadio da Tundavala
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}