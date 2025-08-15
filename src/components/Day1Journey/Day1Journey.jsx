import React from 'react'
import './Day1Journey.css'

const Day1Journey = () => {
  return (
    <section className="section" id="day1-journey">
      <h2 className="section-title">How it works on Day 1</h2>
      
      <div className="day1-container">
        <div className="day1-grid">
          <div className="day1-timeline">
            <div className="timeline-line"></div>
            
            <div className="day1-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Open Yaad and test yourself on PYQs</h3>
                <p className="step-subtitle">(active recall)</p>
              </div>
            </div>

            <div className="day1-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Whatever you miss returns in about 1 minute</h3>
                <p className="step-subtitle">so you learn from the mistake while it's fresh</p>
              </div>
            </div>

            <div className="day1-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Get it right later? It shows up again on Day 1, 3, 7, 21…</h3>
                <p className="step-subtitle">(spaced repetition)</p>
                <div className="spacing-visual">
                  <span className="day active">1</span>
                  <span className="day">3</span>
                  <span className="day">7</span>
                  <span className="day">21</span>
                </div>
              </div>
            </div>

            <div className="day1-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Questions you already know appear less often</h3>
                <p className="step-subtitle">so you save time and build recall where it's needed</p>
              </div>
            </div>
          </div>

          <div className="day1-visual">
            <div className="visual-container">
              <div className="phone-mockup">
                <img 
                  src="/phone-mcq.png" 
                  alt="Yaad app showing MCQ question: Which article deals with fundamental rights? with Article 14-32 highlighted as correct answer"
                  className="phone-app-image"
                />
              </div>
              
              <div className="learning-flow">
                <div className="flow-step">
                  <div className="flow-icon">🧠</div>
                  <span>Test</span>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <div className="flow-icon">⚡</div>
                  <span>Review</span>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <div className="flow-icon">📈</div>
                  <span>Repeat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Day1Journey
