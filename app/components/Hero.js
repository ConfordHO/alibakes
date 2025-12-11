import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Authentic Zambian Baking & Catering</h1>
        <p>Bringing the flavors of Zambia to your special moments</p>
        <a href="#contact" className={styles.ctaButton}>Talk to Us</a>
      </div>
    </section>
  )
}