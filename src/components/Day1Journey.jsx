import React from 'react'

const Day1Journey = () => {
  return (
    <section className="section" id="day1-journey">
      <h2 className="section-title">Your First Day Journey</h2>
      <p style={{textAlign: 'center', color: '#6b7280', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 3rem'}}>
        Experience the science-backed learning that makes the difference
      </p>
      
      <div className="improved-journey-container">
        <div className="journey-steps-horizontal">
          <div className="journey-step-simple" data-step="1">
            <div className="step-time-badge">Start</div>
            <div className="step-icon-simple">🧠</div>
            <h3>Test Yourself First</h3>
            <p>Start with PYQs to activate recall. Your brain engages differently when testing vs reading.</p>
            <div className="step-example">
              <div className="example-content">❓ Which article deals with fundamental rights?</div>
            </div>
          </div>

          <div className="journey-arrow">→</div>

          <div className="journey-step-simple" data-step="2">
            <div className="step-time-badge">1 min later</div>
            <div className="step-icon-simple">⚡</div>
            <h3>Instant Review</h3>
            <p>Missed questions return immediately. Learn while the mistake is fresh in memory.</p>
            <div className="step-example">
              <div className="example-content">❌ Returning for review...</div>
            </div>
          </div>

          <div className="journey-arrow">→</div>

          <div className="journey-step-simple" data-step="3">
            <div className="step-time-badge">1 day later</div>
            <div className="step-icon-simple">📅</div>
            <h3>Spaced Repetition</h3>
            <p>Got it right? It returns on optimized intervals: Day 1 → 3 → 7 → 21...</p>
            <div className="step-example">
              <div className="spacing-dots">
                <span className="dot active">1</span>
                <span className="dot">3</span>
                <span className="dot">7</span>
                <span className="dot">21</span>
              </div>
            </div>
          </div>

          <div className="journey-arrow">→</div>

          <div className="journey-step-simple" data-step="4">
            <div className="step-time-badge">Over time</div>
            <div className="step-icon-simple">🎯</div>
            <h3>Smart Optimization</h3>
            <p>Mastered questions appear less often. Focus your energy where it matters most.</p>
            <div className="step-example">
              <div className="optimization-bars">
                <div className="bar weak">Weak areas</div>
                <div className="bar strong">Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="simple-outcome">
        <p><strong>The result:</strong> Most people misjudge what they know. Yaad removes the guesswork with data-driven learning.</p>
      </div>
    </section>
  )
}

export default Day1Journey
