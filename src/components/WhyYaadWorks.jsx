import React from 'react'

const WhyYaadWorks = ({ scrollToSection }) => {
  return (
    <div className="section-wrapper-alt">
      <section className="section">
        <h2 className="section-title">Why Yaad Works</h2>
        <p style={{textAlign: 'center', color: '#6b7280', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem'}}>
          Science-backed methodology meets 30 years of UPSC questions. Here's what makes the difference:
        </p>
        
        <div className="why-works-grid">
          <div className="works-card premium">
            <div className="works-icon-img">
              <img src="/target.webp" alt="Target icon" />
            </div>
            <h3>30 Years of PYQs</h3>
            <p>Complete collection from 1995-2024. Every question that matters, sorted by subject and topic. Fully free access.</p>
            <div className="works-badge">Complete Archive</div>
            <a href="#dashboard" className="works-action" onClick={() => scrollToSection('dashboard')}>Dashboard →</a>
          </div>

          <div className="works-card premium">
            <div className="works-icon-img">
              <img src="/brain.webp" alt="Brain icon" />
            </div>
            <h3>Smart Spaced Repetition</h3>
            <p>See mistakes more often, mastered items less often. More time on weaknesses, less on strengths. Faster improvement.</p>
            <div className="works-badge">Science-Based</div>
            <a href="#day1-journey" className="works-action" onClick={() => scrollToSection('day1-journey')}>How it Works →</a>
          </div>

          <div className="works-card premium">
            <div className="works-icon-img">
              <img src="/rocket.png" alt="Rocket icon" />
            </div>
            <h3>Research-Backed</h3>
            <p>Active recall beats passive reading. Spacing beats cramming. Testing reveals true weak areas.</p>
            <div className="works-badge">Science-Proven</div>
            <a href="#toppers" className="works-action" onClick={() => scrollToSection('toppers')}>See Toppers →</a>
          </div>
        </div>

        <div className="research-credibility">
          <h4>Research-backed approach</h4>
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
          <p style={{color: '#6b7280', fontSize: '0.9rem', margin: '1rem 0'}}>
            Yaad uses scientifically proven methods backed by research from top institutions worldwide.
          </p>
          <div className="research-links-compact">
            <a href="https://www.hup.harvard.edu/file/feeds/PDF/9780674729018_sample.pdf" target="_blank" rel="noopener">
              Harvard Research
            </a>
            <span>•</span>
            <a href="https://openlearning.mit.edu/mit-faculty/research-based-learning-findings/spaced-and-interleaved-practice" target="_blank" rel="noopener">
              MIT Study
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyYaadWorks
