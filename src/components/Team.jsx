import React from 'react'

const Team = () => {
  return (
    <section className="section">
      <h2 className="section-title">Meet the Team</h2>
      <p style={{textAlign: 'center', color: '#6b7280', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 2rem'}}>
        Built by people who understand the UPSC journey.
      </p>
      
      <div className="founders-showcase">
        <div className="founder-spotlight-card" data-founder="akanksha">
          <div className="founder-photo-container">
            <img src="/akanksha.jpg" alt="Akanksha Ramakrishna" className="founder-photo" />
            <div className="photo-overlay">
              <div className="founder-emoji">👩‍💼</div>
            </div>
          </div>
          
          <div className="founder-content">
            <div className="founder-header">
              <h3 className="founder-name">Akanksha Ramakrishna</h3>
              <div className="founder-role">
                <span className="role-badge ceo">Co-founder & CEO</span>
              </div>
            </div>
            
            <div className="founder-story">
              <div className="story-point">
                <span className="story-icon">🎯</span>
                <p>Former UPSC aspirant for 3 years</p>
              </div>
              <div className="story-point">
                <span className="story-icon">🏛️</span>
                <p>Interned at Ministry of External Affairs</p>
              </div>
              <div className="story-point">
                <span className="story-icon">🌍</span>
                <p>Strategy consulting experience in Dubai</p>
              </div>
            </div>
            
            <div className="founder-message">
              <div className="message-bubble">
                <span className="quote-mark">"</span>
                <p>I've felt the frustration of forgetting what I studied. That's why we built Yaad.</p>
              </div>
            </div>
            
            <div className="founder-traits">
              <span className="trait">UPSC Journey</span>
              <span className="trait">Strategy Expert</span>
              <span className="trait">User Focus</span>
            </div>
          </div>
        </div>

        <div className="founder-spotlight-card" data-founder="tony">
          <div className="founder-photo-container">
            <img src="/tony.jpg" alt="Tony Montes" className="founder-photo" />
            <div className="photo-overlay">
              <div className="founder-emoji">👨‍💻</div>
            </div>
          </div>
          
          <div className="founder-content">
            <div className="founder-header">
              <h3 className="founder-name">Tony Montes</h3>
              <div className="founder-role">
                <span className="role-badge cto">Co-founder & CTO</span>
              </div>
            </div>
            
            <div className="founder-story">
              <div className="story-point">
                <span className="story-icon">🤖</span>
                <p>AI Engineer at Domu (YC S24)</p>
              </div>
              <div className="story-point">
                <span className="story-icon">🎓</span>
                <p>Cornell researcher with 6+ publications</p>
              </div>
              <div className="story-point">
                <span className="story-icon">🧠</span>
                <p>Spaced repetition algorithm expert</p>
              </div>
            </div>
            
            <div className="founder-message">
              <div className="message-bubble">
                <span className="quote-mark">"</span>
                <p>Science-backed learning isn't just theory. It's how we built Yaad's core.</p>
              </div>
            </div>
            
            <div className="founder-traits">
              <span className="trait">AI Research</span>
              <span className="trait">EdTech Builder</span>
              <span className="trait">Data Science</span>
            </div>
          </div>
        </div>
      </div>

      <div className="team-connection">
        <div className="connection-card">
          <h4>Why We Started Yaad</h4>
          <p>After years of UPSC preparation and extensive research in memory algorithms, we realized most learning apps ignore the science of retention. We built Yaad to solve the forgetting problem that affects millions of aspirants.</p>
          
          <div className="connection-stats">
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Years of UPSC experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Research publications</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1M+</span>
              <span className="stat-label">Aspirants we want to help</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
