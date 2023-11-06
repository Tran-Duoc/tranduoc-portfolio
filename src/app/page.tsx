import BackToTop from '@/components/BackToTop'
import Header from '@/components/Header'
import { About, Intro } from '@/components/sections'
import SectionTouch from '@/components/SectionTouch'

export default function Home() {
  return (
    <div className=' min-h-screen'>
      <Header />
      {/* <Intro /> */}
      <About />
      <>
        <SectionTouch />
        <BackToTop />
      </>
    </div>
  )
}
