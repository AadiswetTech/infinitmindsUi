import React from 'react'
import "@/styles/style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/responsive.css"
type Props = {}

const weLove = (props: Props) => {
  return (
   <>
   <section className="cta-area pad-tb">
<div className="container">
<div className="row justify-content-center">
<div className="col-lg-8">
<div className="common-heading">
<span>Let's work together</span>
<h2>We Love to Listen to Your Requirements</h2>
<a href="javascript:void(0)" className="btn-outline">Estimate Project <i className="fas fa-chevron-right fa-icon"></i></a>
<p className="cta-call">Or call us now <a href="tel:+1234567890"><i className="fas fa-phone-alt"></i> (123) 456 7890</a></p>
</div>
</div>
</div>
</div>
<div className="shape shape-a1"><img src="./shape/shape-3.svg" alt="shape"/></div>
<div className="shape shape-a2"><img src="./shape/shape-4.svg" alt="shape"/></div>
<div className="shape shape-a3"><img src="./shape/shape-13.svg" alt="shape"/></div>
<div className="shape shape-a4"><img src="./shape/shape-11.svg" alt="shape"/></div>
</section>
   </>
  )
}

export default weLove