import Image from "next/image"
import Tundavala from "../../../public/tundavala.jpg"

export default function SlideBar(){
    return(
        <main className="flex flex-col h-[500px] justify-center rounded-lg">
            <div className="container m-auto max-w-[1200px] flex justify-between gap-4">
                <div className="w-full rounded-lg bg-blue-200 h-[490px]">
                    <div className="flex flex-col">
                        <Image src={Tundavala} alt="Tundavala" className="w-full rounded-lg h-[490px]" />
                    </div>
                </div>
                <div className="w-[500px] rounded-lg bg-blue-200 h-[490px] flex justify-center p-2">
                    Classificação
                </div>
            </div>
        </main>
    )
}