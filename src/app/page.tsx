import Contact from '@/Components/Contact'
import Feature from '@/Components/Feature'
import HeroSection from '@/Components/HeroSection'
import Navbar from '@/Components/NavBar'
import Slider from '@/Components/Slides'

import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image'
import Hero from '@/Components/Hero'
import Topfeature from '@/Components/Topfeature'
import Feature2 from '@/Components/Feature2'
import Stats from '@/Components/Stats';

import Feature3 from '@/Components/Feature3';
import OurFeature from '@/Components/OurFeature';
import OurCustomer from '@/Components/OurCustomer';
import Partner from '@/Components/Partner';
import Footer from '@/Components/Footer';
import Testimonial from '@/Components/Testimonial/Testimonial'
export default function Home() {
  return (
 
    <>
        
    <Hero/>
    <Topfeature/>
    <Feature2/>
    <Stats/>
    <Feature3/>
    <OurFeature/>
   <Testimonial/>
    <Partner/>
    <Footer/>
    </>
 
  )
}
