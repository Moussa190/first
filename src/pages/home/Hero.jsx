import React from 'react'
import { Link } from 'react-router-dom'



export default function Hero() {
  return (
    <>
 {/* ======= Hero Section ======= */}
<section id="hero" className="d-flex align-items-center justify-content-center">
  <div className="container" data-aos="fade-up">
    <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={150}>
      <div className="col-xl-6 col-lg-8">
        <h1>Umzüge<span>Transport Group</span></h1>
        <h2>Ihren Umzug planen? <span>Holen Sie sich ein Angebot</span>
          
        </h2>
      </div>
    </div>
    <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay={250}>
      <div className="col-xl-2 col-md-4">
        <div className="icon-box">
          <i className="ri-store-line" />
          <h3><a href="https://wa.me/message/7TEJZNO3QI2RM1" >Kontaktieren Sie uns</a>
</h3>
        </div>
      </div>
      <div className="col-xl-2 col-md-4">
        <div className="icon-box">
          <i className="ri-bar-chart-box-line" />
          <h3><Link to={"About"}>About </Link></h3>
        </div>
      </div>
      <div className="col-xl-2 col-md-4">
        <div className="icon-box">
          <i className="ri-calendar-todo-line" />
          <h3><Link to={"Portfolio"} >Portfolio </Link></h3>
        </div>
      </div>
      <div className="col-xl-2 col-md-4">
        <div className="icon-box">
          <i className="ri-paint-brush-line" />
          <h3><Link to={"Contact"}>Contact</Link></h3>
        </div>
      </div>
      <div className="col-xl-2 col-md-4">
        <div className="icon-box">
          <i className="ri-database-2-line" />
          <h3><Link to={"Services"}>Service</Link></h3>
        </div>
      </div>
    </div>
  </div>
</section>
{/* End Hero */}

    </>
  )
}
