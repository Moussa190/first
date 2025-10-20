import React from 'react'

export default function About() {
  return (
    <>
      <section id="about" className="about">
  <div className="container" data-aos="fade-up">
    <div className="row">
      <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
        <img src="assets/img/about.png" className="img-fluid" alt />
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay={100}>
        <h3>Über uns  </h3>
        <p className="fst-italic">
          Als vielseitiges Transportunternehmen und Experte für Umzüge sind wir Ihr vertrauenswürdiger Partner für sämtliche Transport- und Umzugsanliegen. 
        </p>
        <ul>
          <li>
            <i className="ri-check-double-line" /> Mit langjähriger Erfahrung und einem engagierten Team bieten wir Ihnen maßgeschneiderte Lösungen für Ihre individuellen Bedürfnisse.
          </li>
          <li>
            <i className="ri-check-double-line" /> Ob Sie nur einen Transport oder einen vollständigen Umzug benötigen – wir sind hier, um Ihnen einen erstklassigen Service zu bieten
          </li>
          <li>
            <i className="ri-check-double-line" /> Verlassen Sie sich auf Transport Group für einen reibungslosen Ablauf. 
          </li>
          
          <li>
            <i className="ri-check-double-line" /> Kontaktieren Sie uns noch heute, um mehr zu erfahren!
          </li>
        </ul>
        <br />
        Wir bieten Ihnen einen freundlichen, kompetenten und fairen Service, der auf Ihre Bedürfnisse zugeschnitten ist.
        <p />
      </div>
    </div>
  </div>
</section>

    <div>

  {/* ======= Features Section ======= */}
  <section id="features" className="features">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="image col-lg-6" style={{backgroundImage: 'url("assets/img/features.png")'}} data-aos="fade-right" />
        <div className="col-lg-6" data-aos="fade-left" data-aos-delay={100}>
          <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay={150}>
            <i className="bx bx-receipt" />
            <h4>Umzüge (Komplett- und Kleinumzüge)</h4>
            <p>
              Wir kümmern uns um den gesamten Umzugsprozess, von der Verpackung bis zum Transport und dem Aufbau der Möbel, egal ob es sich um einen großen Haushalt oder nur wenige Gegenstände handelt.
            </p>
          </div>
          <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay={150}>
            <i className="bx bx-cube-alt" />
            <h4>Wohnungsauflösung</h4>
            <p>
              Wir leeren Wohnungen und Häuser vollständig, einschließlich der Entsorgung von Möbeln und Haushaltsgegenständen, um sie besenrein zu übergeben. 
            </p>
          </div>
          <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay={150}>
            <i className="bx bx-images" />
            <h4>Transport aller Art - privat und gewerblich</h4>
            <p>
               Wir transportieren eine Vielzahl von Gütern für Privatpersonen und Unternehmen, von einzelnen Möbelstücken bis hin zu größeren Sendungen.
            </p>
          </div>
          <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay={150}>
            <i className="bx bx-shield" />
            <h4> Transport und Entsorgung von Elektrogeräten</h4>
            <p>
              Wir holen alte Elektrogeräte wie Kühlschränke und Waschmaschinen ab und stellen sicher, dass sie umweltgerecht recycelt oder entsorgt werden. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Features Section */}
</div>

    </>
  )
}
