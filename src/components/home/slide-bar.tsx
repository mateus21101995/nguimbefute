import Image from "next/image"
import LogoSite from "../../../public/tundavala.jpg"

export default function SlideBar(){
    return(
        <main className="flex flex-col bg-white min-h-[500px] items-center justify-center rounded-lg">
            <Image src={LogoSite} alt="Manchete" className="w-full" />
        </main>
    )
}