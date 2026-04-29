// src/components/Footer/Footer.tsx
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
            ผู้จัดจำหน่ายสินค้าอุปโภคบริโภคสำหรับร้านอาหาร ร้านค้า สำนักงาน
            โรงงาน และองค์กร
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

          <a
            href="https://line.me/R/ti/p/@197ckvjq"
            target="_blank"
            rel="noreferrer"
            className={styles.qrCard}
            aria-label="เพิ่มเพื่อน PHATAREE ผ่าน LINE"
          >
            <div className={styles.qrImageBox}>
              <Image
                src="/images/QR/QR-Line.png"
                alt="QR Code LINE PHATAREE"
                width={360}
                height={360}
                className={styles.qrImage}
              />
            </div>

            <div className={styles.qrText}>
              <span>LINE OA</span>
              <strong>@phataree</strong>
              <small>สแกนเพื่อสอบถามสินค้าและขอใบเสนอราคา</small>
            </div>
          </a>

          <ContactsBox
            title="PHATAREE contact"
            lineUrl="https://line.me/R/ti/p/@197ckvjq"
            facebookUrl=""
            phone="0864565165"
            phone2="0926394754"
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
