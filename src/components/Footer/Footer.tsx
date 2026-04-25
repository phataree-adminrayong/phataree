import Link from 'next/link'
import styles from './Footer.module.css'

const quickLinks = [
  { href: '/#products', label: 'สินค้า' },
  { href: '/#about', label: 'เกี่ยวกับเรา' },
  { href: '/#certificate', label: 'ใบรับรอง' },
  { href: '/#faq', label: 'คำถามที่พบบ่อย' },
  { href: '/#contact', label: 'ติดต่อเรา' },
]

const productLinks = [
  { href: '/#products', label: 'กระดาษทิชชู' },
  { href: '/#products', label: 'ถุงขยะ' },
  { href: '/#products', label: 'น้ำยาทำความสะอาด' },
  { href: '/#products', label: 'ผลิตภัณฑ์ 3M' },
  { href: '/#products', label: 'เกลือ' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Link
              href="/"
              className={styles.brand}
              aria-label="PHATAREE หน้าแรก"
            >
              <span className={styles.brandMark} aria-hidden="true">
                P
              </span>

              <span className={styles.brandText}>
                <span className={styles.brandName}>PHATAREE</span>
                <span className={styles.brandSub}>Consumable Products</span>
              </span>
            </Link>

            <p className={styles.desc}>
              ร้านขายสินค้าอุปโภคบริโภคสำหรับบ้าน ร้านค้า สำนักงาน โรงงาน
              และองค์กร รวมสินค้ากระดาษทิชชู ถุงขยะ น้ำยาทำความสะอาด ผลิตภัณฑ์
              3M และสินค้าใช้งานประจำวัน
            </p>

            <div className={styles.contactList}>
              <p>
                <span>โทร:</span> 08X-XXX-XXXX
              </p>
              <p>
                <span>อีเมล:</span> contact@phataree.com
              </p>
              <p>
                <span>LINE:</span> @phataree
              </p>
            </div>
          </div>

          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>เมนูเว็บไซต์</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>หมวดสินค้า</h3>
            <ul className={styles.linkList}>
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.ctaCol}>
            <h3 className={styles.colTitle}>สอบถามและขอใบเสนอราคา</h3>
            <p className={styles.ctaText}>
              ติดต่อเราเพื่อสอบถามข้อมูลสินค้า ราคา และรายละเอียดการสั่งซื้อ
              สำหรับลูกค้าทั่วไปและลูกค้าองค์กร
            </p>

            <div className={styles.actions}>
              <Link href="/#contact" className={styles.primaryBtn}>
                ขอใบเสนอราคา
              </Link>
              <Link
                href="mailto:contact@phataree.com"
                className={styles.secondaryBtn}
              >
                ส่งอีเมล
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} PHATAREE. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.bottomLink}>
              นโยบายความเป็นส่วนตัว
            </Link>
            <Link href="/terms" className={styles.bottomLink}>
              เงื่อนไขการใช้งาน
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
