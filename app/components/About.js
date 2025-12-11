import styles from './About.module.css'

export default function About() {
  return (
    <section id="about">
      <h2>About Ali Bakes</h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p>Welcome to Ali Bakes, your premier destination for authentic Zambian baking and catering services. We specialize in bringing the rich, vibrant flavors of Zambian cuisine to your celebrations, whether it's a children's birthday party, a corporate event, or your dream wedding.</p>
          <p style={{marginTop: '1rem'}}>With passion and dedication, we craft every dish with traditional recipes and the finest ingredients, ensuring your guests experience the true taste of Zambia. From traditional baked goods to full catering services, we make your events unforgettable.</p>
          <div className={styles.locationBadge}>
            <strong>📍 Based in Chilenje, Lusaka</strong><br />
            Serving all of Zambia for your catering and baking needs
          </div>
        </div>
        <div className={styles.aboutImage}>
          <div className={styles.imagePlaceholder}>
            <div style={{fontSize: '5rem', marginBottom: '1rem'}}>🎂</div>
            <p style={{fontSize: '1.2rem', fontStyle: 'italic'}}>Crafting memories,<br />one dish at a time</p>
          </div>
        </div>
      </div>
    </section>
  )
}