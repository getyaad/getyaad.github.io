import React from 'react'
import { WHATSAPP_NUMBER } from '../../config/constants'
import './HowToJoin.css'

const HowToJoin = () => {
  const displayNumber = WHATSAPP_NUMBER.replace(/^91/, '')
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')
  }

  return (
    <section className="section">
      <h2 className="section-title">How to join</h2>
      <p style={{textAlign: 'center', color: '#6b7280', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 3rem'}}>
        Get early access in three simple steps (10 seconds)
      </p>
      
      <div className="join-steps-timeline">
        <div className="timeline-step">
          <div className="step-number-circle">
            <span className="step-num">01</span>
          </div>
          <div className="step-content-area">
            <h3>Start Here</h3>
            <button className="step-whatsapp-button" onClick={handleWhatsAppClick}>
              💬 Join on WhatsApp
            </button>
            <p className="step-subtitle">WhatsApp opens automatically</p>
          </div>
          <div className="step-connector"></div>
        </div>
        
        <div className="timeline-step">
          <div className="step-number-circle">
            <span className="step-num">02</span>
          </div>
          <div className="step-content-area">
            <h3>Save our contact</h3>
            <p className="phone-number-bold">+91 {displayNumber}</p>
            <p className="step-subtitle">📱 Save as "Yaad UPSC"</p>
          </div>
          <div className="step-connector"></div>
        </div>
        
        <div className="timeline-step">
          <div className="step-number-circle">
            <span className="step-num">03</span>
          </div>
          <div className="step-content-area">
            <h3>Send "Saved"</h3>
            <p className="step-main-content">✅ You're on the waitlist!</p>
            <p className="step-subtitle">We will notify you on Aug 27th!</p>
          </div>
        </div>
      </div>

      <div className="join-reminder">
        <p><strong>Important:</strong> You must save our contact and send "Saved" to join the waitlist.</p>
      </div>
    </section>
  )
}

export default HowToJoin
