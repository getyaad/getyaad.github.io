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

          <div className="founder-card">
            <div className="founder-image">
              <img 
                src="/tony.jpg" 
                alt="Tony Montes" 
                className="founder-photo"
              />
            </div>
            <div className="founder-info">
              <h3 className="founder-name">Tony Montes</h3>
              <p className="founder-role">Co-founder & CTO</p>
              <p className="founder-bio">
                AI software engineer at Domu (YC S24) and Cornell researcher with 6+ international publications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team
