'use client'

import styles from './page.module.css'
import HeroSection from './sections/HeroSection/HeroSection'
import ProductsSection from './sections/ProductsSection/ProductsSection'
import AboutSection from './sections/AboutSection/AboutSection'
import CertificateSection from './sections/CertificateSection/CertificateSection'
import FaqSection from './sections/FaqSection/FaqSection'
import ContactSection from './sections/ContactSection/ContactSection'
import Customer from './sections/Customer/Customer'

export default function PageClient() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <Customer />
      <CertificateSection />
      <FaqSection />
      <ContactSection />
    </main>
  )
}
