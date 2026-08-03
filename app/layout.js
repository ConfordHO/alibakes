import './globals.css'

export const metadata = {
  title: 'Ali Bakes - Zambian Catering & Bakery Services',
  description: 'Authentic Zambian baking and catering services. Serving all of Zambia for weddings, events, and celebrations.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
