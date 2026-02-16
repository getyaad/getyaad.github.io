import React from 'react'
import { Routes, Route } from 'react-router-dom'
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
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions'

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <HowToJoin />
    <WhyYaadWorks />
    <Day1Journey />
    <TopperCarousel />
    <FAQ />
    <Team />
    <CTA />
    <Footer />
  </>
)

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<><PrivacyPolicy /><Footer /></>} />
      <Route path="/terms-and-conditions" element={<><TermsAndConditions /><Footer /></>} />
    </Routes>
  )
}

export default App
