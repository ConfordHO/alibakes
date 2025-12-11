import styles from './Gallery.module.css'

const galleryItems = [
  { icon: '🍞', title: 'Traditional Breads', desc: 'Fresh Zambian bakes' },
  { icon: '🎂', title: 'Custom Cakes', desc: 'For every celebration' },
  { icon: '🍽️', title: 'Catering Spreads', desc: 'Authentic Zambian cuisine' },
  { icon: '🥘', title: 'Traditional Dishes', desc: 'Nshima, relishes & more' },
  { icon: '🧁', title: 'Pastries', desc: 'Sweet treats & snacks' },
  { icon: '💍', title: 'Wedding Cakes', desc: 'Making your day special' },
]

export default function Gallery() {
  return (
    <section id="gallery">
      <h2>Our Creations</h2>
      <div className={styles.gallery}>
        {galleryItems.map((item, index) => (
          <div key={index} className={styles.galleryItem}>
            <div className={styles.galleryPlaceholder}>
              <h3>{item.icon} {item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}