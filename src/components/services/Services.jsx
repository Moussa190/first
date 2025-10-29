import React from "react";

export default function Service() {
  return (
    <>
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <p>Schauen Sie sich unsere Leistungen „unser Dienst“ an"</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
              <div className="icon-box">
                <div className="icon"><i className="bx bxl-dribbble" /></div>
                <h4><a href="#">Möbelmontage</a></h4>
                <p>Wir montieren und demontieren neue oder gebrauchte Möbelstücke fachgerecht und schnell.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
              <div className="icon-box">
                <div className="icon"><i className="bx bx-file" /></div>
                <h4><a href="#">Entrümpelungen</a></h4>
                <p>Komplette Räumungen von Kellern, Dachböden oder ganzen Wohnungen.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}>
              <div className="icon-box">
                <div className="icon"><i className="bx bx-tachometer" /></div>
                <h4><a href="#">Sperrmüllentsorgung</a></h4>
                <p>Wir holen große Haushaltsgegenstände ab und entsorgen sie fachgerecht.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={100}>
              <div className="icon-box">
                <div className="icon"><i className="bx bx-world" /></div>
                <h4><a href="#">Umzugshelfer </a></h4>
                <p>
                  Wir stellen Ihnen kräftige und erfahrene Helfer zur Seite, die Sie beim Tragen, Laden und bei allen anfallenden Aufgaben während Ihres Umzugs unterstützen.            </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={200}>
              <div className="icon-box">
                <div className="icon"><i className="bx bx-slideshow" /></div>
                <h4><a href="#">Ab- und Aufbau von Möbeln</a></h4>
                <p>
                  Es heißt Traumflugzeug.
                  Boeing gab bekannt, dass dieses Flugzeug mit zwei Triebwerken eines der treibstoffeffizientesten Flugzeuge ist, da es 20 % weniger Treibstoff verbraucht als sein Gegenstück.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={300}>
              <div className="icon-box">
                <div className="icon"><i className="bx bx-arch" /></div>
                <h4><a href="#">Umzüge</a></h4>
                <p>
                  Unser Team übernimmt für Sie den kompletten Ablauf – von der Verpackung über den Transport bis hin zur Montage Ihrer Möbel. Egal ob ein kompletter Haushalt oder nur wenige Gegenstände: Wir sorgen dafür, dass alles sicher und zuverlässig ankommt.            </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={300}>
              <div className="icon-box">
                <div className="icon"><i className="bx bx-arch" /></div>
                <h4><a href="#">Wohnungsauflösung</a></h4>
                <p>
                  Wir räumen Wohnungen und Häuser komplett und kümmern uns um die fachgerechte Entsorgung von Möbeln und Haushaltsgegenständen – auf Wunsch bis zur besenreinen Übergabe.
                </p>
              </div>
            </div>


            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={300}>
              <div className="icon-box">
                <div className="icon"><i className="bx bx-arch" /></div>
                <h4><a href="#">Transport aller Art - privat und gewerblich:</a></h4>
                <p>
                  Als Umzugsfirma in Augsburg transportieren wir für private Haushalte und Unternehmen alles zuverlässig – von kleinen Möbelstücken bis zu umfangreichen Transporten.
                </p>
              </div>
            </div>


            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={300}>
              <div className="icon-box">
                <div className="icon"><i className="bx bx-arch" /></div>
                <h4><a href="#">Transport und Entsorgung von Elektrogeräten</a></h4>
                <p>
                  In Augsburg und Umgebung übernehmen wir die Abholung von Elektrogeräten – ob Kühlschrank, Waschmaschine oder Herd – und sorgen für ein umweltgerechtes Recycling.
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section id="cta" className="cta">
        <div className="container" data-aos="zoom-in">
          <div className="text-center">
            <h3>Kontaktieren Sie uns</h3>
            <p>Brauchen Sie Hilfe bei Ihrem Umzug? Fragen Sie bei uns an. Wir haben auch kurzfristige Termine frei.</p>
            <a className="cta-btn" href="https://wa.me/message/7TEJZNO3QI2RM1">Kontaktieren Sie uns</a>
          </div>
        </div>
      </section>
    </>
  );
}
