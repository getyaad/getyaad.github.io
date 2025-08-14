import React from 'react'
import { WHATSAPP_NUMBER } from '../config/constants'

const HowToJoin = () => {
  const displayNumber = WHATSAPP_NUMBER.replace(/^91/, '')

  return (
    <section className="section">
      <h2 className="section-title">How to join</h2>
      <p style={{textAlign: 'center', color: '#6b7280', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 3rem'}}>
        Get early access in three simple steps
      </p>
      
      <div className="simple-steps-container">
        <div className="simple-step">
          <div className="step-number">1</div>
          <h3>Tap WhatsApp button</h3>
          <p>Opens automatically with our number</p>
        </div>
        
        <div className="step-arrow">→</div>
        
        <div className="simple-step">
          <div className="step-number">2</div>
          <h3>Save our contact</h3>
          <p>+91 {displayNumber} as "Yaad UPSC"</p>
        </div>

        <div className="step-arrow">→</div>
        
        <div className="simple-step">
          <div className="step-number">3</div>
          <h3>Send "Saved"</h3>
          <p>You're on the waitlist!</p>
        </div>
      </div>

      <div className="join-reminder">
        <p><strong>Important:</strong> You must save our contact and send "Saved" to join the waitlist.</p>
      </div>
    </section>
  )
}

export default HowToJoin
