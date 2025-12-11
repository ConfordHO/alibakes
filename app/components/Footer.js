import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Ali Bakes. Bringing Zambian flavors to your celebrations.</p>
      <p style={{marginTop: '0.5rem'}}>Lusaka, Zambia | Serving all of Zambia</p>
    </footer>
  )
}