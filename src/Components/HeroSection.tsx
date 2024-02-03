"use client"
import React from 'react'
import { PiPhoneCallDuotone } from 'react-icons/pi'

type Props = {}

const HeroSection = (props: Props) => {
  return (
   <>
   <div className='w-[95vw] mx-auto  min-h-[80vh] mt-5 '>
    <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 min-h-[90vh] ">
        <div className="border">
            <div className="flex flex-col gap-4 w-11/12 mx-auto pl-6 h-11/12 pt-6 bg-white mt-8">
                <h1 className='font-bold pl-5 font-noto-serif text-6xl text-slate-800 text-centers'>Make Your Gym Management Easier
                
                <span className=' text-6xl text-yellow-700'> with </span><span className='text-8xl text-black font-semibold'>TechFlex.</span></h1>
           <p className="font-semibold px-5 text-xl text-slate-900">Manage members, staff, memberships, send SMS, biometric, access control and more...</p>
           <div className="flex flex-row gap-14 pt-6 w-10/12 mx-auto">
            <div> <button className='rounded-md  pt-2 w-[25vw] lg:w-[15vw] bg-slate-900 text-white font-noto-serif text-xl text-center'> Start Free Demo</button> </div>
          <div className='flex flex-row'> <span className='pt-2 '>Call us:</span> <PiPhoneCallDuotone size={40}/><span className='pt-2'>6203259061</span></div>
         

           </div>
         
            </div>
        </div>
        {/* img of hero */}
        <div className="">
        <div className="flex flex-col gap-4 w-11/12 mx-auto justify-center h-full ">
          <img src="/gymsoftware.png" className='pb-24 h-[80vh]'/>
        </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default HeroSection