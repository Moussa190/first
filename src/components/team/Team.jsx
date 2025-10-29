import React from "react";

export default function Team() {
  // cards data
  const data = [
    {
      id: 1,
      title: "Kompetenz & Erfahrung",
      description:
        "Unser Team begleitet sowohl Privatumzüge als auch Firmenumzüge, Kompletttransporte und Möbelmontage – mit hoher Fachkenntnis und organisiertem Ablauf.",
    },
    {
      id: 2,
      title: "Zuverlässigkeit & Pünktlichkeit",
      description:
        "Termintreue und transparente Planung sind für uns selbstverständlich. So läuft Ihr Umzug stressfrei und effizient.",
    },
    {
      id: 3,
      title: "Kundennähe & Transparenz",
      description:
        "Sie haben von der ersten Besichtigung bis zur finalen Abnahme einen festen Ansprechpartner. Kosten, Ablauf und Ansprechpartner sind klar kommuniziert.",
    },
    {
      id: 4,
      title: "Qualität & Sorgfalt",
      description:
        "Ob Verpackung, Einlagerung oder Montage – wir behandeln Ihre Möbel und Ihr Hab und Gut mit größter Sorgfalt und Verantwortung.",
    },
  ];

  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <div className="row">
          {data.map((card) => (
            <div key={card.id} className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-content">
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
