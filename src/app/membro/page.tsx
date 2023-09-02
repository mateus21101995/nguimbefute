import Advertising from "@/components/ advertising";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Membro from "@/components/membro";

export default function PageMambro(){
    return(
        <main className="flex-1 min-h-screen flex-col justify-between">
            <Advertising />
            <Header />
            <section className='flex flex-col gap-4 py-3 rounded-lg'>
                <Membro />
            </section>
            <Footer />
        </main>
    )
}