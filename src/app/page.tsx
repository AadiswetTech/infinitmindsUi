import Contact from '@/Components/Contact'
import Feature from '@/Components/Feature'
import HeroSection from '@/Components/HeroSection'
import Navbar from '@/Components/NavBar'
import Slider from '@/Components/Slides'
import Image from 'next/image'

export default function Home() {
  return (
 
    <>
       <HeroSection/>
       {/* <Slider/> */}
       <Feature/>
       <Contact/>
    </>
 
  )
}
