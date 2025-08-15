import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './TopperCarousel.css'

const TopperCarousel = () => {
  const slides = [
    {
      name: "Shakti Dubey",
      rank: "AIR 1, CSE 2024",
      quote: "I used active recall to revise Laxmikanth. I wrote my notes as questions instead of copying all the answers. When revising, I tried to answer each question from memory, rather than just reading my notes.",
      image: "/shakti.JPG",
      badge: "AIR 1",
      link: "https://www.youtube.com/shorts/EEhCjHwaYuE",
      linkText: "See Source"
    },
    {
      name: "Dr. Mayur Hazarika",
      rank: "AIR 5, CSE 2022",
      quote: "Spaced repetition is a method of reviewing or revising the material at systematic intervals.",
      image: "/mayur.JPG",
      badge: "AIR 5",
      link: "https://www.youtube.com/watch?v=DABE4Gs0DHo",
      linkText: "See Source"
    },
    {
      name: "Dr. Shivin Chaudhary",
      rank: "AIR 297, CSE 2022",
      quote: "The best way to revise for the UPSC Civil Services Exam is through active recall.",
      image: "/shivin.PNG",
      badge: "AIR 297",
      link: "https://www.youtube.com/watch?v=iGqwcHo_LFA&pp=ygUYc2hpdmluIHNwYWNlIHJwZWV0aXRpb24g0gcJCa0JAYcqIYzv",
      linkText: "See Source"
    },
    {
      name: "Sonnet Jose",
      rank: "AIR 54, CSE 2024",
      quote: "I used the active recall method suggested by Shivin Sir, especially for topics like constitutional bodies.",
      image: "/sonnet.jpeg",
      badge: "AIR 54",
      link: "https://muditjainblog.com/2025/04/30/sonnet-jose-air-54-cse-24-journey-strategy/#:~:text=5.%20I%20sometimes,studied%20them%20again.",
      linkText: "See Source"
    },
    {
      name: "Nikhil Mahajan",
      rank: "AIR 80, CSE 2021",
      quote: "Spaced repetition works with the memory curve. If you revise at the right intervals, it boosts retention. This means you don't have to revise as often to remember things. It optimises your revision process, and efficiency is crucial when there's a lot of syllabus and little time.",
      image: "/nikhil.JPG",
      badge: "AIR 80",
      link: "https://www.youtube.com/watch?v=LCszwuWZEHE&t=1936",
      linkText: "See Source"
    },
    {
      name: "Manuj Jindal",
      rank: "AIR 53, CSE 2016",
      quote: "One of the best ways to remember anything for UPSC in the long term is the recall technique. After you read something, try to recall the important information. Recall, recall, recall.",
      image: "/manuj.JPG",
      badge: "AIR 53",
      link: "https://youtube.com/shorts/v40UQtbtO30?si=vTTy5toPzyRw9e-i",
      linkText: "See Source"
    }
  ]

  return (
    <div className="section-wrapper-dark">
      <section className="section" id="toppers">
        <h2 className="section-title">Study like a topper</h2>
        <p style={{textAlign: 'center', color: '#6b7280', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 3rem'}}>
          <strong>Spaced repetition and active recall.</strong><br/> Toppers recommend these methods; Yaad simply makes them easy to use.
        </p>
        
        <div className="topper-carousel-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            navigation={{
              nextEl: '.carousel-next',
              prevEl: '.carousel-prev',
            }}
            pagination={{
              clickable: true,
              el: '.carousel-pagination',
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="topper-swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="topper-card-horizontal">
                  <div className="topper-left">
                    <div className="topper-image-container">
                      <img src={slide.image} alt={slide.name} className="topper-image" />
                      <div className="rank-badge-new">
                        {slide.badge}
                      </div>
                    </div>
                  </div>
                  
                  <div className="topper-right">
                    <div className="topper-details">
                      <h3 className="topper-name">{slide.name}</h3>
                      <p className="topper-rank">{slide.rank}</p>
                    </div>
                    
                    <div className="topper-quote-section">
                      <p className="quote-text">"{slide.quote}"</p>
                    </div>
                    
                    <div className="topper-link">
                      <a href={slide.link} target="_blank" rel="noopener" className="source-link">
                        {slide.linkText}
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            

          </Swiper>
          
          <div className="carousel-pagination"></div>
        </div>

        <p style={{textAlign: 'center', color: '#9ca3af', fontSize: '0.8rem', marginTop: '2rem'}}>
          <em>References are to their public advice on study methods, not endorsements of Yaad.</em>
        </p>
      </section>
    </div>
  )
}

export default TopperCarousel
