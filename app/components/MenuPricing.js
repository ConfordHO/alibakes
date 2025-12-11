  import styles from './MenuPricing.module.css'

const menuCategories = [
  {
    category: 'Custom Cakes',
    icon: '🎂',
    items: [
      { name: 'Small Cake (Serves 10-15)', price: 'K300 - K500' },
      { name: 'Medium Cake (Serves 20-30)', price: 'K600 - K900' },
      { name: 'Large Cake (Serves 40-50)', price: 'K1,000 - K1,500' },
      { name: 'Wedding Cake (3-Tier)', price: 'K2,000 - K4,000+' },
    ]
  },
  {
    category: 'Traditional Baking',
    icon: '🍞',
    items: [
      { name: 'Scones (per dozen)', price: 'K80 - K120' },
      { name: 'Meat Pies (per dozen)', price: 'K150 - K200' },
      { name: 'Samosas (per dozen)', price: 'K100 - K150' },
      { name: 'Vetkoek (per dozen)', price: 'K80 - K120' },
    ]
  },
  {
    category: 'Catering Packages',
    icon: '🍽️',
    items: [
      { name: 'Kids Party (per child)', price: 'K50 - K80' },
      { name: 'Corporate Lunch (per person)', price: 'K100 - K150' },
      { name: 'Wedding Catering (per person)', price: 'K150 - K300' },
      { name: 'Full Buffet (per person)', price: 'K200 - K350' },
    ]
  },
  {
    category: 'Traditional Dishes',
    icon: '🥘',
    items: [
      { name: 'Nshima with Relish (serves 10)', price: 'K300 - K500' },
      { name: 'Grilled Chicken (whole)', price: 'K150 - K200' },
      { name: 'Traditional Salads (large bowl)', price: 'K100 - K150' },
      { name: 'Custom Menu (per person)', price: 'Contact for quote' },
    ]
  },
]

export default function MenuPricing() {
  return (
    <section id="menu" className={styles.menuSection}>
      <h2>Menu & Pricing</h2>
      <p className={styles.subtitle}>All prices are in Zambian Kwacha (ZMW). Final pricing depends on customization and portion sizes.</p>
      
      <div className={styles.menuGrid}>
        {menuCategories.map((category, index) => (
          <div key={index} className={styles.menuCard}>
            <div className={styles.categoryHeader}>
              <span className={styles.categoryIcon}>{category.icon}</span>
              <h3>{category.category}</h3>
            </div>
            <div className={styles.menuItems}>
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className={styles.menuItem}>
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.itemPrice}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.priceNote}>
        <p>💡 <strong>Note:</strong> Prices may vary based on ingredients, design complexity, and delivery location. Contact us for a personalized quote!</p>
        <a href="#contact" className={styles.quoteButton}>Get a Custom Quote</a>
      </div>
    </section>
  )
}