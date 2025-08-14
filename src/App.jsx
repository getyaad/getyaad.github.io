import React from 'react'
import './App.css'

// Import all components
import Hero from './components/Hero'
import HowToJoin from './components/HowToJoin'
import WhyYaadWorks from './components/WhyYaadWorks'
import Dashboard from './components/Dashboard'
import Day1Journey from './components/Day1Journey'
import TopperCarousel from './components/TopperCarousel'
import FAQ from './components/FAQ'
import Team from './components/Team'
import CTA from './components/CTA'
import Footer from './components/Footer'

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
      <Dashboard />
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
