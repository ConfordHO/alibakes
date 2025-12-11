import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Let's Talk About Your Event</h2>
      <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>Ready to order? We're here to make your event special!</p>
      
      <a 
        href="https://wa.me/260978876201" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.ctaButton}
      >
        💬 Talk to Us on WhatsApp
      </a>

      <div className={styles.contactMethods}>
        <div className={styles.contactItem}>
          <h3>📱 WhatsApp</h3>
          <a href="https://wa.me/260978876201" target="_blank" rel="noopener noreferrer">
            +260 978 876 201
          </a>
        </div>
        <div className={styles.contactItem}>
          <h3>📧 Email</h3>
          <a href="mailto:alicechitumba259@gmail.com">alicechitumba259@gmail.com</a>
        </div>
        <div className={styles.contactItem}>
          <h3>📍 Location</h3>
          <p>Chilenje, Lusaka<br />Serving all of Zambia</p>
        </div>
      </div>
    </section>
  )
}