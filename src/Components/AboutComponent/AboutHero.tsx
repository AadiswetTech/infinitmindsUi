import React from 'react'

type Props = {}

const AboutHero = (props: Props) => {
  return (
    <>
    <section className="hero-section business-startup">
<div className="text-block">
<div className="container">
<div className="row">
<div className="col-lg-6 v-center">
<div className="header-heading">
<h1 className="wow fadeInUp" data-wow-delay=".2s">We Build Scalable & Smart Solution</h1>
<p className="wow fadeInUp" data-wow-delay=".4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus, risus sit amet auctor sodales, justo erat tempor eros.</p>
<a href="#" className="btn-main bg-btn3 lnk wow fadeInUp" data-wow-delay=".6s">GET STARTED<i className="fas fa-chevron-right fa-icon"></i><span className="circle"></span></a>
</div>
</div>
<div className="col-lg-6 v-center">
<div className="hero-photo"><img src="./hero/designer-girl-animate.svg" alt="img"/></div>
</div>
</div>
</div>
</div>
</section>
    </>
  )
}

export default AboutHero