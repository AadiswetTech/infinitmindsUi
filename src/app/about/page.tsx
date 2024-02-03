import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image'
import Hero from '@/Components/Hero'
import Topfeature from '@/Components/Topfeature'
import Feature2 from '@/Components/Feature2'
import Stats from '@/Components/Stats';
import Feature from '@/Components/Feature';
import Feature3 from '@/Components/Feature3';
import OurFeature from '@/Components/OurFeature';
import OurCustomer from '@/Components/OurCustomer';
import Partner from '@/Components/Partner';
import Footer from '@/Components/Footer';
type Props = {}

const page = (props: Props) => {
  return (
    <>
     {/* <div className="bg-white mb-6">
         <div className="bg-gradient-to-r from-slate-200 to-sky-800 w-[95vw] mx-auto border h-auto mt-12 rounded-2xl">
<div className='grid grid-cols-1 lg:grid-cols-2 h-full'>
  <div className=" mx-auto my-5 flex flex-col justify-around align-sub text-start w-8/12 text-red-900 px-6">
    <h1 className='text-4xl text-blue-900 font-bold pr-8  '>Predictable Growth start here</h1>
    <p className="text-lg font-medium text-slate-900">We understand the importance of timely follow ups with your leads and various touchpoints with your clients in their fitness journey.</p>
    <button className='bg-blue-900  text-xl align-start h-12 text-slate-50 rounded-md justify-start w-48'>Get started</button>
  </div>
  <div className=" pr-0 mx-auto my-[70px] bg-black">
    <Image src="/gym2.jpeg" className='pl-8' width={400} height={200} alt={''}/>
  </div>

</div> */}
  {/* </div>
         </div> */}
    <Hero/>
    <Topfeature/>
    <Feature2/>
    <Stats/>
    <Feature3/>
    <OurFeature/>
    <OurCustomer/>
    <Partner/>
    <Footer/>
    </>
  )
}

export default page