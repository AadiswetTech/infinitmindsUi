import ContactForm from '@/Components/ContactForm'
import Serv from '@/Components/SubComponent/Serv'
import Service1 from '@/Components/SubComponent/Service1'
import Service2 from '@/Components/SubComponent/Service2'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
<>
<Service1/>
<Service2/>
<Serv/>
<ContactForm/>
</>
  )
}

export default page