
export default function Team() {


  // cards data
  const data = [
    {
      id: 1,
      title: "Kompetenz & Erfahrung",
      description: "Unser Team begleitet sowohl Privatumzüge als auch Firmenumzüge, Kompletttransporte und Möbelmontage – mit hoher Fachkenntnis und organisiertem Ablauf."
    },
    {
      id: 2,
      title: "Zuverlässigkeit & Pünktlichkeit",
      description: "Termintreue und transparente Planung sind für uns selbstverständlich. So läuft Ihr Umzug stressfrei und effizient."
    },
    {
      id: 3,
      title: "Kundennähe & Transparenz",
      description: "Sie haben von der ersten Besichtigung bis zur finalen Abnahme einen festen Ansprechpartner. Kosten, Ablauf und Ansprechpartner sind klar kommuniziert."
    },
    {
      id: 4,
      title: "Qualität & Sorgfalt",
      description: "Ob Verpackung, Einlagerung oder Montage – wir behandeln Ihre Möbel und Ihr Hab und Gut mit größter Sorgfalt und Verantwortung."
    },
  ]

  // card html
  const cardLayout = (title, description) => <div class="col-md-6">
    <div class="card border-0 shadow-sm h-100 p-3">
      <div class="card-body">
        <h3 class="h5 card-title text-warning"><i class="bi bi-person-rolodex me-2"></i>{title}</h3>
        <p class="card-text">{description}</p>
      </div>
    </div>
  </div>

  const renderCards = data.map(cardItem => cardLayout(cardItem.title, cardItem.description))
  return (
    <>

      {/* ======= Team Section ======= */}
      <section id="team" className="team">
        <div className="container" data-aos="fade-up">
          <div className="section-title" >
            <h2>Team</h2>
            <p>Unser engagiertes Team – Umzüge Transportgroup </p>
          </div>
          <div class="container my-2" data-aos="fade-up" data-aos-delay={100}>


            <div class="row">
              {/* ======= left Section start ======= */}
              <div class="col-lg-8">
                <p class="lead mb-4">
                  Wenn ein Umzug in Augsburg oder im Umland ansteht, sind wir Ihr verlässlicher Ansprechpartner. Die Umzüge Transportgroup steht für ein professionelles Team aus Umzugshelfern, Fahrern und Montagespezialisten, das Ihre Umzugs- und Transportaufgaben mit Erfahrung, Sorgfalt und engagierter Betreuung übernimmt.
                </p>

                {/* ===== cards section  ===== */}
                <h2 class="h3 fw-semibold text-secondary mt-5 mb-3">Unsere Kernwerte</h2>
                <div class="row g-4">
                  {renderCards}
                </div>


                <h2 class="h3 fw-semibold text-secondary mt-5 mb-3">Ihr Vorteil mit uns</h2>
                <div class="alert alert-warning p-4 shadow-sm">
                  <p class="mb-0">
                    Unser eingespieltes Team deckt das komplette Leistungsspektrum ab: vom Privatumzug über den Büroumzug bis hin zu Möbeltransporten und Küchenmontagen. Gemeinsam sorgen wir dafür, dass Ihr Umzug in Augsburg oder Umgebung schnell, sicher und angenehm durchgeführt wird. Mit der **Umzüge Transportgroup** wählen Sie nicht einfach Helfer – Sie wählen ein **kompetentes Profi-Team**, das Verantwortung übernimmt und Sie von Anfang bis Ende begleitet.
                  </p>
                </div>

              </div>
              {/* ======= left Section end ======= */}



              {/* ======= right Section start ======= */}
              <div class="col-lg-4 d-none d-lg-block">
                <div class="bg- p-4 rounded text-center h-100 d-flex align-items-stretch justify-content-center">
                  <img src="assets/img/portfolio/portfolio-3.png" alt="teams" className='img-fluid' />
                </div>
              </div>
              {/* ======= right Section end ======= */}

            </div>

          </div>
        </div>
      </section>
      {/* End Team Section */}

    </>
  )
}
