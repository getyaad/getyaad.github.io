import React from 'react'
import './Team.css'

const Team = () => {
  return (
    <div className="section-wrapper-dark">
      <section className="section">
        <h2 className="section-title">Founder team</h2>
        
        <div className="founders-minimal">
          <div className="founder-card">
            <div className="founder-image">
              <img 
                src="/akanksha.jpg" 
                alt="Akanksha Ramakrishna" 
                className="founder-photo"
              />
            </div>
            <div className="founder-info">
              <h3 className="founder-name">Akanksha Ramakrishna</h3>
              <p className="founder-role">Co-founder & CEO</p>
              <p className="founder-bio">
                Former UPSC aspirant for three years, moved on from preparation after securing an internship at the Ministry of External Affairs and a strategy consulting role in Dubai.
              </p>
            </div>
          </div>

          <a href="https://www.linkedin.com/jobs/view/4302123247/" target="_blank" rel="noopener noreferrer" className="founder-card hiring-card">
            <div className="founder-image">
              <div className="hiring-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                </svg>
              </div>
            </div>
            <div className="founder-info">
              <h3 className="founder-name">Hiring</h3>
              <p className="founder-role">Co-Founder & CTO</p>
              <p className="founder-bio">
                Equal equity.<br/>Full-time.<br/>Remote.<br/>Bangalore preferred.
              </p>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Team
