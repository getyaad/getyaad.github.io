import React from 'react'

const Dashboard = () => {
  return (
    <div className="section-wrapper-alt">
      <section className="section" id="dashboard">
        <h2 className="section-title">Your Personal Study Dashboard</h2>
        <p style={{textAlign: 'center', color: '#6b7280', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 3rem'}}>
          Yaad tracks every answer to show your true mastery. No more guessing what to study next.
        </p>
        
        <div className="dashboard-container">
          <div className="dashboard-header">
            <div className="dashboard-stat">
              <div className="stat-icon">📊</div>
              <div className="stat-content">
                <span className="stat-number">2,847</span>
                <span className="stat-label">Questions Practiced</span>
              </div>
            </div>

            <div className="dashboard-stat">
              <div className="stat-icon">🎯</div>
              <div className="stat-content">
                <span className="stat-number">68%</span>
                <span className="stat-label">Overall Accuracy</span>
              </div>
            </div>

            <div className="dashboard-stat">
              <div className="stat-icon">🔥</div>
              <div className="stat-content">
                <span className="stat-number">12</span>
                <span className="stat-label">Day Streak</span>
              </div>
            </div>
          </div>

          <div className="mastery-dashboard">
            <div className="dashboard-section-title">
              <h3>📈 Mastery Levels</h3>
              <p>Focus on subjects below 70% for faster improvement</p>
            </div>

            <div className="mastery-grid">
              <div className="subject-mastery-card" data-subject="polity">
                <div className="subject-header">
                  <div className="subject-icon">🏛️</div>
                  <div className="subject-info">
                    <span className="subject-name">Polity</span>
                    <span className="subject-status ready">Ready for mocks</span>
                  </div>
                  <div className="mastery-percentage-large">78%</div>
                </div>
                <div className="animated-progress-bar">
                  <div className="progress-fill high" data-width="78%"></div>
                </div>
                <div className="subject-info-footer">
                  <span className="action-suggestion">Practice Weak Areas</span>
                  <span className="questions-left">127 questions to master</span>
                </div>
              </div>

              <div className="subject-mastery-card" data-subject="geography">
                <div className="subject-header">
                  <div className="subject-icon">🌍</div>
                  <div className="subject-info">
                    <span className="subject-name">Geography</span>
                    <span className="subject-status needs-work">Focus needed</span>
                  </div>
                  <div className="mastery-percentage-large">42%</div>
                </div>
                <div className="animated-progress-bar">
                  <div className="progress-fill medium" data-width="42%"></div>
                </div>
                <div className="subject-info-footer">
                  <span className="action-suggestion priority">Start Revision</span>
                  <span className="questions-left">293 questions to master</span>
                </div>
              </div>

              <div className="subject-mastery-card" data-subject="history">
                <div className="subject-header">
                  <div className="subject-icon">📜</div>
                  <div className="subject-info">
                    <span className="subject-name">History</span>
                    <span className="subject-status strong">Strong foundation</span>
                  </div>
                  <div className="mastery-percentage-large">85%</div>
                </div>
                <div className="animated-progress-bar">
                  <div className="progress-fill high" data-width="85%"></div>
                </div>
                <div className="subject-info-footer">
                  <span className="action-suggestion">Quick Review</span>
                  <span className="questions-left">87 questions to master</span>
                </div>
              </div>

              <div className="subject-mastery-card" data-subject="economics">
                <div className="subject-header">
                  <div className="subject-icon">💰</div>
                  <div className="subject-info">
                    <span className="subject-name">Economics</span>
                    <span className="subject-status needs-work">Building up</span>
                  </div>
                  <div className="mastery-percentage-large">56%</div>
                </div>
                <div className="animated-progress-bar">
                  <div className="progress-fill medium" data-width="56%"></div>
                </div>
                <div className="subject-info-footer">
                  <span className="action-suggestion">Practice Daily</span>
                  <span className="questions-left">201 questions to master</span>
                </div>
              </div>
            </div>
          </div>

          <div className="smart-recommendations">
            <h4>🎯 Smart Recommendations</h4>
            <div className="recommendations-grid">
              <div className="recommendation-card">
                <span className="rec-icon">⚡</span>
                <div className="rec-content">
                  <strong>Focus on Geography</strong>
                  <p>Spend 20 min daily to reach 70% by next week</p>
                </div>
              </div>
              <div className="recommendation-card">
                <span className="rec-icon">🔄</span>
                <div className="rec-content">
                  <strong>Review Polity basics</strong>
                  <p>Quick 5-min sessions to maintain your lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
