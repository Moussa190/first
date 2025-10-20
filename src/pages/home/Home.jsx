import React from 'react'
// import Hero from './Hero.jsx'
// import About from '../../components/about/About.jsx'
// import Services from '../../components/services/Services.jsx'
// import Portfolio from '../../components/portfolio/Portfolio.jsx'
// import Team from '../../components/team/Team.jsx'
// import Contact from '../../components/contact/Contact.jsx'
import { lazy } from 'react';

const Hero = lazy(() => import('./Hero.jsx'))
const About = lazy(() => import('../../components/about/About.jsx'))
const Services = lazy(() => import('../../components/services/Services.jsx'))
const Portfolio = lazy(() => import('../../components/portfolio/Portfolio.jsx'))
const Team = lazy(() => import('../../components/team/Team.jsx'))
const Contact = lazy(() => import('../../components/contact/Contact.jsx'))
export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Contact />
      </main>
    </>
  )
}
