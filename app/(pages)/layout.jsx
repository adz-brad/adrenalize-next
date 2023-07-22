import '../styles/globals.css'
import localFont from 'next/font/local'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'

const Contact = dynamic(() => import ('../components/Contact'))
const Footer = dynamic(() => import ('../components/Footer'))

export const metadata = {
  title: 'Adrenalize | Digital Product Solutions',
  description: ''
}

const urbanist = localFont({src: '../fonts/Urbanist.ttf'})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        <main className="overflow-x-hidden">
          {children}
          <Contact />
        </main>
        <Footer />
      </body>
    </html>
  )
}
