import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Raouane Allawi — Full Stack Developer',
  description: 'Portfolio of Raouane Allawi, Full Stack Developer specializing in Java, React, Spring Boot and modern web applications.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
