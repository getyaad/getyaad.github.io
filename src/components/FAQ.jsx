import React, { useState } from 'react'

const FAQ = () => {
  const [activeFAQ, setActiveFAQ] = useState(null)

  const faqs = [
    {
      id: 1,
      icon: "💰",
      question: "Is Yaad completely free?",
      answer: {
        intro: "Yes, early access is completely free! You get full access to all core features including:",
        list: [
          "30 years of PYQs (1995-2024)",
          "Smart spaced repetition algorithm",
          "Progress tracking and mastery levels",
          "Unlimited practice sessions"
        ],
        conclusion: "No hidden costs, no premium tiers during early access. Just pure learning."
      }
    },
    {
      id: 2,
      icon: "🎓",
      question: "Will this replace my coaching classes?",
      answer: {
        intro: "No, Yaad complements your existing preparation. Think of it as your smart revision partner:",
        list: [
          "After classes: Test what you learned with PYQs",
          "After reading: Use active recall instead of passive re-reading",
          "Before mocks: Quick revision of weak areas only",
          "Daily habit: 10-15 minutes to maintain and strengthen memory"
        ],
        conclusion: "Use Yaad alongside your books, classes, and notes for maximum retention."
      }
    },
    {
      id: 3,
      icon: "🔒",
      question: "Is my WhatsApp number safe?",
      answer: {
        intro: "Your privacy is our priority. Here's exactly how we use your number:",
        list: [
          "Only for Yaad updates: App launch notifications, feature updates",
          "Never sold or shared: We don't sell your data to anyone, ever",
          "Easy opt-out: Text \"STOP\" anytime to unsubscribe",
          "Minimal contact: Only important updates, no spam"
        ],
        conclusion: "We're UPSC aspirants too. We understand the value of trust and privacy."
      }
    },
    {
      id: 4,
      icon: "📱",
      question: "Which devices can I use?",
      answer: {
        intro: "Android is ready now, iOS coming very soon!",
        list: [
          "Android: Available from Day 1 (Aug 17, 2025)",
          "iOS: In development, launching within 2-3 weeks",
          "Web version: Coming later for desktop users",
          "Offline mode: Practice anywhere, sync when connected"
        ],
        conclusion: "iPhone users: Join the waitlist now to get notified the moment iOS version drops!"
      }
    },
    {
      id: 5,
      icon: "⚡",
      question: "How much time should I spend daily?",
      answer: {
        intro: "Just 10-15 minutes daily for maximum impact. Yaad is designed for micro-learning:",
        list: [
          "Morning routine: 5 mins with coffee",
          "Commute time: Practice during travel",
          "Study breaks: Quick sessions between subjects",
          "Before bed: Light revision to strengthen memory"
        ],
        conclusion: "Quality over quantity. Consistent daily practice beats long weekend marathons."
      }
    }
  ]

  const toggleFAQ = (faqId) => {
    setActiveFAQ(activeFAQ === faqId ? null : faqId)
  }

  return (
    <div className="section-wrapper-alt">
      <section className="section">
        <h2 className="section-title">Quick Answers</h2>
        <p style={{textAlign: 'center', color: '#6b7280', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 3rem'}}>
          Everything you need to know about getting started with Yaad
        </p>
        
        <div className="faq-accordion">
          {faqs.map((faq) => (
            <div key={faq.id} className={`faq-accordion-item ${activeFAQ === faq.id ? 'active' : ''}`}>
              <div className="faq-header" onClick={() => toggleFAQ(faq.id)}>
                <div className="faq-icon">{faq.icon}</div>
                <h3 className="faq-question">{faq.question}</h3>
                <div className="faq-toggle">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </div>
              </div>
              <div className="faq-content">
                <div className="faq-answer">
                  <p><strong>{faq.answer.intro.split('!')[0]}!</strong> {faq.answer.intro.split('!')[1]}</p>
                  <ul>
                    {faq.answer.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p>{faq.answer.conclusion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default FAQ
