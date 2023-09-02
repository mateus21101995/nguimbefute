import Advertising from '@/components/ advertising'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HomeDiaspora from '@/components/home/home-diaspora'
import HomeInternacional from '@/components/home/home-internacional'
import HomeNacional from '@/components/home/home-nacional'
import HomePodcast from '@/components/home/home-podcast'
import HomeSelecao from '@/components/home/home-selecao'
import SlideBar from '@/components/home/slide-bar'

export default function Home() {
  return (
    <main className="flex-1 min-h-screen flex-col">
       <Advertising />
       <Header />
       <section className='flex flex-col gap-4 py-3 rounded-lg'>
          <SlideBar />
          <HomeNacional />
          <HomePodcast />
          <HomeInternacional />
          <HomeSelecao />
          <HomeDiaspora />
       </section>
       <Footer />
    </main>
  )
}
