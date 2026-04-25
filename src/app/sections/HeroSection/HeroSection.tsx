import Link from 'next/link'
import Slider from './slider'
import styles from './HeroSection.module.css'

const heroImages = [
  {
    src: '/images/hero/hero-1.png',
    alt: 'สินค้าอุปโภคบริโภคสำหรับร้านค้า สำนักงาน โรงแรม และองค์กร',
  },
  {
    src: '/images/hero/hero-2.png',
    alt: 'กระดาษทิชชู ถุงขยะ น้ำยาทำความสะอาด และสินค้าใช้ประจำองค์กร',
  },
]

export default function HeroSection() {
  return (
    <section id="hero" className={styles.section}>
      <Slider images={heroImages} />

      <div className={`container ${styles.content}`}>
        <div className={styles.textBox}>
          <p className={styles.kicker}>PHATAREE THAILAND</p>

          <h1 className={styles.title}>
            สินค้า กลุ่มของใช้สิ้นเปลือง
            <br />
            โรงงาน โรงแรม ร้านอาหาร
          </h1>

          <p className={styles.desc}>
            ภัทรอารีย์จัดจำหน่ายกระดาษทิชชู ถุงขยะ น้ำยาทำความสะอาด เกลือ
            และสินค้าใช้ประจำสำหรับธุรกิจ พร้อมดูแลการสั่งซื้อแบบเป็นระบบ
            เหมาะสำหรับร้านอาหาร โรงแรม โรงงาน ออฟฟิศ และร้านค้า
          </p>

          <div className={styles.actions}>
            <Link href="#products" className="btn btnPrimary">
              ดูรายการสินค้า
            </Link>

            <Link href="#contact" className="btn">
              ขอใบเสนอราคา
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
