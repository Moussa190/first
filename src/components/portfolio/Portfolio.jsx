import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { initializePortfolioAssets } from './portfolioInitializer';



export default function Portfolio() {
    useEffect(() => {
        initializePortfolioAssets();

        if (typeof window.Swiper !== 'undefined') {
            new window.Swiper('.testimonials-slider', {
                // ... بقية خيارات Testimonials Slider
            });
        }
    }, []);

    // const portfolioData = [
    //     {
    //         id: 1,
    //         title: "umzug",
    //         subtitle: "umzug",
    //         image: "assets/img/portfolio/portfolio-1.png",
    //         alt: "Umzug service item 1",
    //         filteredTitle: "Airbus 1"
    //     },
    //     {
    //         id: 2,
    //         title: "Services 3",
    //         subtitle: "Services",
    //         image: "assets/img/portfolio/portfolio-2.png",
    //         alt: "Services category item 3",
    //         filteredTitle: "Web 3"
    //     },
    //     {
    //         id: 3,
    //         title: "Airbus 2",
    //         subtitle: "Airbus",
    //         image: "assets/img/service/airbusA330.png",
    //         alt: "Airbus A330 aircraft",
    //         filteredTitle: "App 2"
    //     },
    //     {
    //         id: 4,
    //         title: "Transport",
    //         subtitle: "Transport",
    //         image: "assets/img/service/boeing747.png",
    //         alt: "Boeing 747 transport aircraft",
    //         filteredTitle: "Card 2"
    //     },
    //     {
    //         id: 5,
    //         title: "Services 2",
    //         subtitle: "Services",
    //         image: "assets/img/portfolio/portfolio-8.png",
    //         alt: "Services category item 2",
    //         filteredTitle: "Web 2"
    //     },
    //     {
    //         id: 6,
    //         title: "umzug",
    //         subtitle: "umzug",
    //         image: "assets/img/service/airbusA320.png",
    //         alt: "Airbus A320 for umzug service",
    //         filteredTitle: "App 3"
    //     },
    //     {
    //         id: 7,
    //         title: "Transport",
    //         subtitle: "Transport",
    //         image: "assets/img/service/boeing787.png",
    //         alt: "Boeing 787 transport aircraft",
    //         filteredTitle: "Card 1"
    //     },
    //     {
    //         id: 8,
    //         title: "Transport",
    //         subtitle: "Transport",
    //         image: "assets/img/service/boeing737.png",
    //         alt: "Boeing 737 transport aircraft",
    //         filteredTitle: "Card 3"
    //     },
    //     {
    //         id: 9,
    //         title: "Services 3",
    //         subtitle: "Services",
    //         image: "assets/img/portfolio/portfolio-10.png",
    //         alt: "Services category item 3 (Image 2)",
    //         filteredTitle: "Web 3"
    //     }
    // ];
    // const PortfolioItem = (image, title, subTitle, alt, filteredTitle) => <div key={image} className="col-lg-4 col-md-6 portfolio-item filter-web">
    //     <div className="portfolio-wrap">
    //         <img src={image} className="img-fluid" alt={alt} />
    //         <div className="portfolio-info">
    //             <h4>{title}</h4>
    //             <p>{subTitle}</p>
    //             <div className="portfolio-links">
    //                 {console.log(image, "image")}
    //                 {console.log(filteredTitle, "filteredTitle")}
    //                 <a href={{ image }} data-gallery="portfolioGallery" className="portfolio-lightbox" title={filteredTitle}><i className="bx bx-plus" /></a>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    // const renderProfileImages = portfolioData.map(item => PortfolioItem(item.image, item.title, item.subtitle, item.alt, item.filteredTitle))
    return (
        <>
            <div>
                {/* ======= Portfolio Section ======= */}
                <section id="portfolio" className="portfolio">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Portfolio</h2>
                            <h3>Schauen Sie sich unsere Portfolio an</h3>
                        </div>
                        <div className="row" data-aos="fade-up" data-aos-delay={100}>
                            <div className="col-lg-12 d-flex justify-content-center">
                                <ul id="portfolio-flters">
                                    <li data-filter="*" className="filter-active">All</li>
                                    <li data-filter=".filter-app">umzug</li>
                                    <li data-filter=".filter-card">Transport</li>
                                    <li data-filter=".filter-web">Services</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
                            {/* {renderProfileImages} */}
                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="/assets/img/portfolio/portfolio-1.png" className="img-fluid" alt='portfolio-1' />
                                    <div className="portfolio-info">
                                        <h4>umzug</h4>
                                        <p>umzug</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-1.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Airbus 1"><i className="bx bx-plus" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-2.png" className="img-fluid" alt='portfolio-2' />
                                    <div className="portfolio-info">
                                        <h4>Services 3</h4>
                                        <p>Services</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-2.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/service/airbusA330.png" className="img-fluid" alt='service/airbusA330' />
                                    <div className="portfolio-info">
                                        <h4>Airbus 2</h4>
                                        <p>Airbus</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-3.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/service/boeing747.png" className="img-fluid" alt='service/boeing747' />
                                    <div className="portfolio-info">
                                        <h4>Transport</h4>
                                        <p>Transport</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-4.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-8.png" className="img-fluid" alt='portfolio-8' />
                                    <div className="portfolio-info">
                                        <h4>Services 2</h4>
                                        <p>Services</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-8.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/service/airbusA320.png" className="img-fluid" alt='service/airbusA320' />
                                    <div className="portfolio-info">
                                        <h4>umzug</h4>
                                        <p>umzug</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/service/boeing787.png" className="img-fluid" alt='service/boeing787' />
                                    <div className="portfolio-info">
                                        <h4>Transport</h4>
                                        <p>Transport</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-7.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/service/boeing737.png" className="img-fluid" alt='service/boeing737' />
                                    <div className="portfolio-info">
                                        <h4>Transport</h4>
                                        <p>Transport</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-9.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-10.png" className="img-fluid" alt='portfolio-10' />
                                    <div className="portfolio-info">
                                        <h4>Services 3</h4>
                                        <p>Services</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-10.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Portfolio Section */}
                {/* ======= Counts Section ======= */}
                <section id="counts" className="counts">
                    <div className="container" data-aos="fade-up">
                        <div className="row no-gutters">
                            <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-right" data-aos-delay={100} />
                            <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch" data-aos="fade-left" data-aos-delay={100}>
                                <div className="content d-flex flex-column justify-content-center">
                                    <h3>Professioneller Umzugsservice: Stressfreier Umzug garantiert!</h3>
                                    <p>
                                        Planen Sie einen Umzug? Lassen Sie uns Ihnen helfen! Unsere erfahrene Umzugsfirma bietet Ihnen einen zuverlässigen und professionellen Service für Ihren reibungslosen Umzug.

                                        Warum uns wählen?
                                    </p>
                                    <div className="row">
                                        <div className="col-md-6 d-md-flex align-items-md-stretch">
                                            <div className="count-box">
                                                <i className="bi bi-emoji-smile" />
                                                <span data-purecounter-start={0} data-purecounter-end={65} data-purecounter-duration={2} className="purecounter" />
                                                <p>
                                                    <strong>Erfahrene und freundliche Mitarbeiter,</strong> die Ihre Bedürfnisse verstehen.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-md-flex align-items-md-stretch">
                                            <div className="count-box">
                                                <i className="bi bi-journal-richtext" />
                                                <span data-purecounter-start={0} data-purecounter-end={85} data-purecounter-duration={2} className="purecounter" />
                                                <p>
                                                    <strong>Sorgfältige</strong> Handhabung Ihrer persönlichen Gegenstände.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-md-flex align-items-md-stretch">
                                            <div className="count-box">
                                                <i className="bi bi-clock" />
                                                <span data-purecounter-start={0} data-purecounter-end={35} data-purecounter-duration={4} className="purecounter" />
                                                <p>
                                                    <strong>Pünktlichkeit</strong> und Zuverlässigkeit in unserem Service.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-md-flex align-items-md-stretch">
                                            <div className="count-box">
                                                <i className="bi bi-award" />
                                                <span data-purecounter-start={0} data-purecounter-end={20} data-purecounter-duration={4} className="purecounter" />
                                                <p>
                                                    <strong>Maßgeschneiderte Lösungen</strong>, die Ihren Anforderungen gerecht werden.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End .content*/}
                            </div>
                        </div>

                    </div>
                </section>
                {/* End Counts Section */}
                {/* ======= Testimonials Section ======= */}
                <section id="testimonials" className="testimonials">
                    <div className="container" data-aos="zoom-in">
                        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <h3>UmzügeTransport Group</h3>
                                        {/* <h4>Ceo &amp; Founder</h4> */}
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Von der Planung bis zur Ausführung kümmern wir uns um jeden Schritt Ihres Umzugsprozesses, damit Sie sich entspannt zurücklehnen können. Kontaktieren Sie uns jetzt für ein unverbindliches Angebot und lassen Sie uns Ihren Umzug stressfrei gestalten!

                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Testimonials Section */}
            </div>

        </>
    )
}