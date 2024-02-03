import React from 'react'
import FeatureCard from './SubComponent/FeatureCard'
import { featuredata } from '@/data/featuredata'
type Props =
 {}

const Feature = (props: Props) => {
  return (
    <div className=" w-[90vw] mx-auto mt-5 bg-slate-800 flex flex-wrap justify-around gap-6" >
      {featuredata.map((item,index)=>
      (
        <li key={index}>
          <FeatureCard  icon={item.icons} heading={item.heading}  paragraph={item.paragraph} stats={item.stats}/>
        </li>
      ))}
      
    </div>
  )
}

export default Feature