'use client'
import { useState } from 'react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Mwamba Phiri',
    event: 'Wedding Reception',
    rating: 5,
    text: 'Ali Bakes made our wedding day absolutely perfect! The traditional Zambian cuisine was authentic and delicious. Our guests are still talking about the amazing nshima and relish. The wedding cake was stunning and tasted even better than it looked!',
    date: 'October 2024'
  },
  {
    name: 'Chanda Mwale',
    event: 'Corporate Event',
    rating: 5,
    text: 'We hired Ali Bakes for our company\'s annual conference in Lusaka. The professionalism and quality of food exceeded our expectations. Everything was delivered on time and the presentation was impeccable. Highly recommended for corporate events!',
    date: 'September 2024'
  },
  {
    name: 'Thandiwe Banda',
    event: 'Birthday Party',
    rating: 5,
    text: 'My daughter\'s 5th birthday party was a huge success thanks to Ali Bakes! The custom cake with her favorite cartoon character was adorable, and the kids loved all the treats. Great service from Chilenje to our location in Garden compound!',
    date: 'August 2024'
  },
  {
    name: 'Joseph Sakala',
    event: 'Traditional Ceremony',
    rating: 5,
    text: 'For our traditional kitchen party, Ali Bakes provided authentic Zambian dishes that reminded us of home cooking. The vetkoek, samosas, and grilled chicken were prepared to perfection. Everyone loved the food and asked for the contact!',
    date: 'July 2024'
  },
  {
    name: 'Grace Musonda',
    event: 'Anniversary Celebration',
    rating: 5,
    text: 'Celebrated our 10th anniversary with a beautiful cake from Ali Bakes. Not only was it visually stunning, but the flavor was incredible. Alice was so accommodating with our special requests. Will definitely order again!',
    date: 'November 2024'
  },
  {
    name: 'Patrick Lungu',
    event: 'Graduation Party',
    rating: 5,
    text: 'Ali Bakes catered my son\'s graduation party and the feedback was overwhelming! The mix of traditional and modern dishes pleased all our guests. Delivery to Woodlands was prompt and the setup was professional. Thank you!',
    date: 'June 2024'
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2>What Our Clients Say</h2>
      
      <div className={styles.testimonialCarousel}>
        <button onClick={prevTestimonial} className={styles.navButton}>‹</button>
        
        <div className={styles.testimonialCard}>
          <div className={styles.rating}>
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
          <p className={styles.testimonialText}>"{currentTestimonial.text}"</p>
          <div className={styles.testimonialAuthor}>
            <strong>{currentTestimonial.name}</strong>
            <span>{currentTestimonial.event}</span>
            <span className={styles.date}>{currentTestimonial.date}</span>
          </div>
        </div>
        
        <button onClick={nextTestimonial} className={styles.navButton}>›</button>
      </div>

      <div className={styles.dots}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <div className={styles.allTestimonials}>
        <h3>More Reviews</h3>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.smallTestimonialCard}>
              <div className={styles.smallRating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className={styles.smallText}>"{testimonial.text}"</p>
              <div className={styles.smallAuthor}>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.event}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}