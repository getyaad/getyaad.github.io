import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const TopperCarousel = () => {
  const slides = [
    {
      name: "Shakti Dubey",
      rank: "AIR 1, CSE 2024",
      quote: "Active recall and spaced repetition are game-changers for retention",
      image: "/shakti.png",
      badge: "AIR 1",
      link: "https://www.youtube.com/shorts/EEhCjHwaYuE",
      linkText: "Watch Interview",
      linkIcon: "🎥"
    },
    {
      name: "Dr. Mayur Hazarika",
      rank: "AIR 5, CSE 2022",
      quote: "Systematic revision with spaced intervals made all the difference",
      image: "/mayur.png",
      badge: "AIR 5",
      link: "https://www.youtube.com/watch?v=DABE4Gs0DHo",
      linkText: "Watch Interview",
      linkIcon: "🎥"
    },
    {
      name: "Dr. Shivin Chaudhary",
      rank: "AIR 297, CSE 2022",
      quote: "Testing yourself beats passive reading every single time",
      image: "/shivin.png",
      badge: "AIR 297",
      link: "https://www.youtube.com/watch?v=iGqwcHo_LFA&pp=ygUYc2hpdmluIHNwYWNlIHJwZWV0aXRpb24g0gcJCa0JAYcqIYzv",
      linkText: "Watch Interview",
      linkIcon: "🎥"
    },
    {
      name: "Sonnet Jose",
      rank: "AIR 54, CSE 2024",
      quote: "I sometimes studied topics again using spaced repetition for better recall",
      image: "/sonnet.png",
      badge: "AIR 54",
      link: "https://muditjainblog.com/2025/04/30/sonnet-jose-air-54-cse-24-journey-strategy/#:~:text=5.%20I%20sometimes,studied%20them%20again.",
      linkText: "Read Strategy",
      linkIcon: "📝"
    },
    {
      name: "Nikhil Mahajan",
      rank: "AIR 80, CSE 2021",
      quote: "Regular revision at intervals is crucial for long-term retention",
      image: "/nikhil.png",
      badge: "AIR 80",
      link: "https://www.youtube.com/watch?v=LCszwuWZEHE&t=1936",
      linkText: "Watch Interview (32:16)",
      linkIcon: "🎥"
    },
    {
      name: "Manuj Jindal",
      rank: "AIR 53, CSE 2016",
      quote: "Active learning through testing was key to my preparation strategy",
      image: "/manuj.png",
      badge: "AIR 53",
      link: "https://www.youtube.com/watch?v=dUO-NZwyIWk",
      linkText: "Watch Interview",
      linkIcon: "🎥"
    }
  ]

  return (
    <div className="section-wrapper-dark">
      <section className="section" id="toppers">
        <h2 className="section-title">Learn from the Best</h2>
        <p style={{textAlign: 'center', color: '#6b7280', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 3rem'}}>
          Top rankers use <strong>spaced repetition and active recall</strong>. Yaad makes these methods effortless.
        </p>
        
        <div className="topper-carousel-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="topper-swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="topper-card-enhanced">
                  <div className="card-background"></div>
                  <div className="topper-photo">
                    <img src={slide.image} alt={slide.name} />
                    <div className={`rank-badge ${slide.badge.includes('AIR 1') ? 'air1' : 
                      slide.badge.includes('AIR 5') ? 'air5' : 
                      slide.badge.includes('AIR 54') ? 'air54' : 
                      slide.badge.includes('AIR 53') ? 'air53' : 
                      slide.badge.includes('AIR 80') ? 'air80' : 'top300'}`}>
                      {slide.badge}
                    </div>
                  </div>
                  <div className="topper-content">
                    <h3>{slide.name}</h3>
                    <p className="topper-rank-year">{slide.rank}</p>
                    <div className="topper-quote">
                      <span className="quote-icon">"</span>
                      <p>{slide.quote}</p>
                    </div>
                    <a href={slide.link} target="_blank" rel="noopener" className="source-link">
                      <span className="link-icon">{slide.linkIcon}</span>
                      {slide.linkText}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-pagination"></div>
        </div>

        <p style={{textAlign: 'center', color: '#9ca3af', fontSize: '0.8rem', marginTop: '2rem'}}>
          <em>Quotes reference their public advice on study methods, not endorsements of Yaad.</em>
        </p>
      </section>
    </div>
  )
}

export default TopperCarousel
