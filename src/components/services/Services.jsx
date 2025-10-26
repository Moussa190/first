import React from 'react'

export default function Service() {
  return (
    <>
      <div>
        {/* ======= Services Section ======= */}
        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Services</h2>
              <h3>Schauen Sie sich unsere Leistungen „unser Dienst“ an"</h3>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                <div className="icon-box">
                  <div className="icon"><i className="bx bxl-dribbble" /></div>
                  <h4><p >Möbelmontage </p></h4>
                  <p>
                    Wir montieren und demontieren neue oder gebrauchte Möbelstücke fachgerecht und schnell, insbesondere auch komplexe Bausätze von Herstellern wie Ikea.            </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-file" /></div>
                  <h4><p >Entrümpelungen</p></h4>
                  <p>
                    Wir übernehmen die komplette Räumung von Kellern, Dachböden oder ganzen Wohnungen, um Platz zu schaffen und ungenutzte Gegenstände zu entsorgen.            </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}>
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-tachometer" /></div>
                  <h4><p >Sperrmüllentsorgung</p></h4>
                  <p>
                    Wir holen große, unhandliche Haushaltsgegenstände, die nicht in den regulären Müll passen, ab und entsorgen sie fachgerecht.            </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={100}>
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-world" /></div>
                  <h4><p >Umzugshelfer </p></h4>
                  <p>
                    Wir stellen Ihnen kräftige und erfahrene Helfer zur Seite, die Sie beim Tragen, Laden und bei allen anfallenden Aufgaben während Ihres Umzugs unterstützen.            </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={200}>
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-slideshow" /></div>
                  <h4><p >Ab- und Aufbau von Möbeln</p></h4>
                  <p>
                    Es heißt Traumflugzeug.
                    Boeing gab bekannt, dass dieses Flugzeug mit zwei Triebwerken eines der treibstoffeffizientesten Flugzeuge ist, da es 20 % weniger Treibstoff verbraucht als sein Gegenstück.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={300}>
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-arch" /></div>
                  <h4><p >Umzüge</p></h4>
                  <p>
                    Wir kümmern uns um den gesamten Umzugsprozess, von der Verpackung bis zum Transport und dem Aufbau der Möbel, egal ob es sich um einen großen Haushalt oder nur wenige Gegenstände handelt.            </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={300}>
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-arch" /></div>
                  <h4><p >Wohnungsauflösung</p></h4>
                  <p>
                    Wir leeren Wohnungen und Häuser vollständig, einschließlich der Entsorgung von Möbeln und Haushaltsgegenständen, um sie besenrein zu übergeben.
                  </p>
                </div>
              </div>


              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={300}>
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-arch" /></div>
                  <h4><p >Transport aller Art - privat und gewerblich:</p></h4>
                  <p>
                    Wir transportieren eine Vielzahl von Gütern für Privatpersonen und Unternehmen, von einzelnen Möbelstücken bis hin zu größeren Sendungen.
                  </p>
                </div>
              </div>


              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={300}>
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-arch" /></div>
                  <h4><p >Transport und Entsorgung von Elektrogeräten</p></h4>
                  <p>
                    Wir holen alte Elektrogeräte wie Kühlschränke und Waschmaschinen ab und stellen sicher, dass sie umweltgerecht recycelt oder entsorgt werden.
                  </p>
                </div>
              </div>


            </div>
          </div>
        </section>
        {/* End Services Section */}
        {/* ======= Cta Section ======= */}
        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="text-center">
              <h3>Kontaktieren Sie uns</h3>
              <p>
                Brauchen Sie Hilfe bei Ihrem Umzug? Fragen Sie bei uns an. Wir haben auch kurzfristige Termine frei.
              </p>
              <a className="cta-btn" href=" https://wa.me/message/7TEJZNO3QI2RM1">Kontaktieren Sie uns</a>
            </div>
          </div>
        </section>
        {/* End Cta Section */}
      </div>

    </>
  )
}
