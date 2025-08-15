import React from 'react'
import './App.css'

// Import all components
import Hero from './components/Hero/Hero'
import HowToJoin from './components/HowToJoin/HowToJoin'
import WhyYaadWorks from './components/WhyYaadWorks/WhyYaadWorks'
import Day1Journey from './components/Day1Journey/Day1Journey'
import TopperCarousel from './components/TopperCarousel/TopperCarousel'
import FAQ from './components/FAQ/FAQ'
import Team from './components/Team/Team'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'

function App() {
  // Smooth scrolling for anchor links
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Hero />
      <HowToJoin />
      <WhyYaadWorks scrollToSection={scrollToSection} />
      <Day1Journey />
      <TopperCarousel />
      <FAQ />
      <Team />
      <CTA />
      <Footer />
    </>
  )
}

export default App
