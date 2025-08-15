import React, { useState } from 'react'
import './FAQ.css'

const FAQ = () => {
  const [openFAQs, setOpenFAQs] = useState(new Set())

  const faqs = [
    {
      id: 1,
      icon: "💰",
      question: "Is it free?",
      answer: {
        intro: "Yes. Early access is free.",
        list: [
          "30 years of PYQs (1995-2024)",
          "Spaced repetition system",
          "Progress tracking",
          "Unlimited practice"
        ],
        conclusion: "No hidden costs. Everything is free during early access."
      }
    },
    {
      id: 2,
      icon: "🎓",
      question: "Does it replace coaching?",
      answer: {
        intro: "No. Use Yaad after classes and books to revise smart.",
        list: [
          "After classes: Test what you learned",
          "After reading: Practice active recall",
          "Before mocks: Revise weak areas",
          "Daily habit: 10-15 minutes practice"
        ],
        conclusion: "Use Yaad with your books and classes for best results."
      }
    },
    {
      id: 3,
      icon: "🔒",
      question: "Is my number safe?",
      answer: {
        intro: "Yes. We use it only for Yaad updates.",
        list: [
          "Only for app updates and notifications",
          "Never sold to anyone",
          "Easy to stop: Text 'STOP' anytime",
          "Only important updates, no spam"
        ],
        conclusion: "We never sell your data. Your privacy is important to us."
      }
    },
    {
      id: 4,
      icon: "📱",
      question: "Which devices?",
      answer: {
        intro: "Android now. iOS coming soon.",
        list: [
          "Android: Available from Day 1",
          "iOS: Coming in 2-3 weeks",
          "Web version: Coming later",
          "Works offline, syncs when connected"
        ],
        conclusion: "iPhone users: Join waitlist to get notified when iOS is ready!"
      }
    },
    {
      id: 5,
      icon: "⚡",
      question: "How much time daily?",
      answer: {
        intro: "Just 10-15 minutes daily for best results.",
        list: [
          "Morning: 5 minutes with coffee",
          "Travel time: Practice during commute",
          "Study breaks: Quick sessions",
          "Before bed: Light revision"
        ],
        conclusion: "Small daily practice is better than long weekend sessions."
      }
    },
    {
      id: 6,
      icon: "📚",
      question: "What's included?",
      answer: {
        intro: "Everything you need to revise smart:",
        list: [
          "30 years of PYQs sorted by subject",
          "Spaced repetition for UPSC",
          "Progress tracking for each subject",
          "Active recall practice"
        ],
        conclusion: "Everything you need to revise less and remember more."
      }
    }
  ]

  const toggleFAQ = (faqId) => {
    const newOpenFAQs = new Set(openFAQs)
    if (newOpenFAQs.has(faqId)) {
      newOpenFAQs.delete(faqId)
    } else {
      newOpenFAQs.add(faqId)
    }
    setOpenFAQs(newOpenFAQs)
  }

  return (
    <div className="section-wrapper-white">
      <section className="section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p style={{textAlign: 'center', color: '#6b7280', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 3rem'}}>
          Everything you need to know about getting started with Yaad
        </p>
        
        <div className="faq-grid">
          {faqs.map((faq) => (
            <div key={faq.id} className={`faq-item ${openFAQs.has(faq.id) ? 'active' : ''}`}>
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
                  <p><strong>{faq.answer.intro.split('.')[0]}.</strong> {faq.answer.intro.split('.')[1]}</p>
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
