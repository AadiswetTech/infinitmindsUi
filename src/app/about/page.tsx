import AboutHero from '@/Components/AboutComponent/AboutHero'
import Part2 from '@/Components/AboutComponent/Part2'
import Part3 from '@/Components/AboutComponent/Part3'
import Part4 from '@/Components/AboutComponent/Part4'
import Part5 from '@/Components/AboutComponent/Part5'
import ContactForm from '@/Components/ContactForm'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <AboutHero/>
    <Part2/>
    <Part3/>
    <Part4/>
    <Part5/>
    <ContactForm/>
    </>
  )
}

export default page