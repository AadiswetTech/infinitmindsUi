import React from 'react'

type Props = {}

const FeatureCard = (props: any) => {
    const IconsComponent=props.icons
  return (
    <>
    <div className='flex flex-col bg-gray-100 justify-around border rounded-md w-[80vw] mx-auto lg:w-[28vw]'>
    {IconsComponent &&<IconsComponent size={30}/>}
     <span className='text-xl'>{props.stats}</span>
     <h2 className="text-2xl font-semibold">{props.heading}</h2>
 <p className="text-lg font-light">{props.paragraph}</p>

 

    </div>
    </>
  )
}

export default FeatureCard