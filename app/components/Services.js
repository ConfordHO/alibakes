import styles from './Services.module.css'

const services = [
  { icon: '🎂', title: 'Custom Baking', desc: 'Birthday cakes, wedding cakes, and special occasion bakes tailored to your preferences' },
  { icon: '🍽️', title: 'Full Catering', desc: 'Complete catering services for events of all sizes across Zambia' },
  { icon: '🎉', title: 'Kids Events', desc: 'Fun and delicious treats for children\'s parties and celebrations' },
  { icon: '💼', title: 'Corporate Events', desc: 'Professional catering for business meetings, conferences, and company events' },
  { icon: '💒', title: 'Weddings', desc: 'Make your special day unforgettable with our wedding catering and cakes' },
  { icon: '🥘', title: 'Traditional Cuisine', desc: 'Authentic Zambian dishes prepared with love and traditional methods' },
]

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}