import React, { useState, useEffect } from 'react'
import { useUtmTracking } from '../hooks/useUtmTracking'
import { APP_CONFIG } from '../config/constants'

const Hero = () => {
  const { whatsappUrl } = useUtmTracking()
  const [timeLeft, setTimeLeft] = useState({})

  // Countdown to August 27, 2025 12:00 AM India Time (UTC+5:30)
  useEffect(() => {
    const targetDate = new Date('2025-08-27T00:00:00+05:30')
    
    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        setTimeLeft({ expired: true })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero">
      {/* 1. Thin Top Banner */}
      <div className="hero-top-banner">
        <img src="/india-emoji.png" alt="India Flag" className="banner-flag" />
        <span className="banner-text">Freedom from Forgetting starts this Independence Day. <a href={whatsappUrl} className="banner-link" target="_blank" rel="noopener">Join the waitlist now.</a></span>
      </div>

      <div className="hero-content">
        {/* 2. Horizontal Logo + Tagline */}
        <div className="hero-header-horizontal">
          <div className="logo-section">
            <img src="/logo-square.svg" alt="Yaad" className="logo-square" />
            <span className="logo-text">Yaad</span>
          </div>
          <h1 className="hero-tagline">{APP_CONFIG.tagline}</h1>
        </div>

        {/* 4-6. Organic Journey Layout */}
        <div className="journey-container">
          {/* Independence Day Card */}
          <div className="journey-card independence-card">
            <div className="card-icon">
              <img src="/india-flag-curve.webp" alt="Independence Day" className="milestone-emoji india-independence-icon" />
            </div>
            <h3 className="card-title">Independence Day</h3>
            <p className="card-subtitle">Join the waitlist today</p>
            <p className="card-description">
              Sign up for free to get early access to Yaad. We help you remember UPSC questions 
              better using smart study methods.
            </p>
            <span className="status-badge current">Today</span>
          </div>

          {/* Curved Journey Path with Countdown */}
          <div className="journey-path">
            {/* Announcement Info */}
            <div className="journey-announcement">
              <div className="announcement-text">
                Early access opens on Ganesh Chaturthi
              </div>
              <p className="info-subtitle">Join now to get in first • Free PYQs • Opt out anytime • No Spam</p>
            </div>

            {/* SVG Curve and Icons Container */}
            <div className="curve-with-icons">
              {/* SVG Curved Path */}
              <svg className="journey-curve" viewBox="0 0 500 200" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff7700" />
                    <stop offset="50%" stopColor="#6493E6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <path 
                  d="M 30 100 Q 250 40 470 100" 
                  stroke="url(#pathGradient)" 
                  strokeWidth="4" 
                  fill="none"
                  strokeDasharray="8,5"
                />
              </svg>

              {/* Journey Icons positioned at curve endpoints */}
              <div className="journey-icons-container">
                <img src="/india-independence-2.png" alt="Independence" className="journey-icon independence-icon" />
                <img src="/ganesh-2.png" alt="Ganesh" className="journey-icon ganesh-journey-icon" />
              </div>
            </div>

            {/* Compact Countdown */}
            <div className="countdown-widget">
              <div className="countdown-label">App launches in</div>
              {!timeLeft.expired ? (
                <div className="countdown-display">
                  <span className="countdown-unit">{timeLeft.days || 0}d</span>
                  <span className="countdown-unit">{timeLeft.hours || 0}h</span>
                  <span className="countdown-unit">{timeLeft.minutes || 0}m</span>
                  <span className="countdown-unit">{timeLeft.seconds || 0}s</span>
                </div>
              ) : (
                <div className="countdown-live">Live now!</div>
              )}
            </div>
          </div>

          {/* Ganesh Chaturthi Card */}
          <div className="journey-card ganesh-card">
            <div className="card-icon">
              <img src="/ganesh-icon.png" alt="Ganesh Chaturthi" className="milestone-emoji ganesh-icon" />
            </div>
            <h3 className="card-title">Ganesh Chaturthi</h3>
            <p className="card-subtitle">App launches completely free</p>
            <p className="card-description">
              Get full access to Yaad with 30 years of UPSC questions (1995-2024). 
              Everything is free during early access.<br/>&nbsp;
            </p>
            <span className="status-badge upcoming">Aug 27, 2025</span>
          </div>
        </div>

        {/* 7. CTA Section */}
        <div className="hero-cta-section">
          <h2 className="cta-question">Think you know your PYQs? Test yourself on Yaad.</h2>
          <a href={whatsappUrl} className="cta-button" target="_blank" rel="noopener">
            <svg className="whatsapp-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span>Claim Early Access</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
