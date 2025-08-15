import React from 'react'
import './WhyYaadWorks.css'

const WhyYaadWorks = () => {
  return (
    <div className="section-wrapper-alt">
      <section className="section">
        <h2 className="section-title">Why Join the Waitlist</h2>
        <p style={{textAlign: 'center', color: '#6b7280', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem'}}>
          Science-backed methods meet 30 years of UPSC questions. Here's what makes Yaad different:
        </p>
        
        <div className="why-works-grid">
          <div className="works-card premium">
            <div className="works-icon-img">
              <img src="/target.webp" alt="Target icon" />
            </div>
            <h3>Fully Free</h3>
            <p><strong>₹0</strong> for 30 years of PYQs neatly sorted by subject & topic. Complete collection from 1995-2024 during early access.</p>
          </div>

          <div className="works-card premium">
            <div className="works-icon-img">
              <img src="/brain.webp" alt="Brain icon" />
            </div>
            <h3>Spaced Repetition Made for UPSC</h3>
            <p>You'll see mistakes more often and mastered items less often. More time on weaknesses. Less time on strengths. Faster improvement. No other UPSC app does this meaningfully.</p>
          </div>

          <div className="works-card premium">
            <div className="works-icon-img">
              <img src="/rocket.png" alt="Rocket icon" />
            </div>
            <h3>Know Exactly What to Study Next</h3>
            <p>Yaad doesn't just score one mock. It tracks all your answers over time to form a true picture of mastery. Mastery bars show where you stand. With one tap, revise only your weak areas and watch the list get smaller each day.</p>
          </div>
        </div>

        <div className="research-credibility">
          <h4>Why This Approach Wins</h4>
          <div className="research-points-grid">
            <div className="research-point-compact">
              <h5>Active Recall</h5>
              <p>Helps you remember more than passive rereading or highlighting.</p>
            </div>
            <div className="research-point-compact">
              <h5>Spaced Repetition</h5>
              <p>Beats cramming so you forget less and don't have to relearn topics.</p>
            </div>
            <div className="research-point-compact">
              <h5>Testing Effect</h5>
              <p>Reduces overconfidence and reveals your true weak areas.</p>
            </div>
          </div>
          <p style={{color: '#6b7280', fontSize: '0.9rem', margin: '1.5rem 0 1rem', textAlign: 'center'}}>
            Research sources: <a href="https://www.hup.harvard.edu/file/feeds/PDF/9780674729018_sample.pdf" target="_blank" rel="noopener">Harvard — <em>Make It Stick</em></a> · <a href="https://openlearning.mit.edu/mit-faculty/research-based-learning-findings/spaced-and-interleaved-practice" target="_blank" rel="noopener">MIT Open Learning</a>
          </p>
          <div className="institution-logos">
            <div className="institution-badge">
              <img src="/harvard-logo.png" alt="Harvard University Press" className="institution-logo" />
              <span>Harvard University Press</span>
            </div>
            <div className="institution-badge">
              <img src="/mit-logo.png" alt="MIT Open Learning" className="institution-logo" />
              <span>MIT Open Learning</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyYaadWorks
