import Image from 'next/image'
import Link from 'next/link'
import ContactsBox from '@/components/ContactsBox/ContactsBox'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.main}>
          <Link href="/" className={styles.brand} aria-label="PHATAREE หน้าแรก">
            <Image
              src="/PATAREE_LOGO.svg"
              alt="PHATAREE"
              width={180}
              height={64}
              className={styles.logo}
            />
          </Link>

          <p className={styles.desc}>
            ผู้จัดจำหน่ายสินค้าอุปโภคบริโภคสำหรับบ้าน ร้านค้า สำนักงาน โรงงาน
            และองค์กร
          </p>

          <div className={styles.contactInfo}>
            <a href="tel:0864565165">086-456-5165</a>
            <span aria-hidden="true">/</span>
            <a href="tel:0926394754">092-639-4754</a>
            <span aria-hidden="true">/</span>
            <a href="mailto:phataree.thailand@gmail.com">
              phataree.thailand@gmail.com
            </a>
          </div>

          <ContactsBox
            title="PHATAREE contact"
            lineUrl="https://lin.ee/hgKZAHm"
            facebookUrl="https://www.facebook.com/profile.php?id=61580630981781"
            phone="0864565165"
            className={styles.contactsBox}
          />
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} PHATAREE. All rights reserved.</p>

          <p className={styles.credit}>
            Consumable products for business and organization use.
          </p>
        </div>
      </div>
    </footer>
  )
}
