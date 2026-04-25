import Slider from './Slider'
import styles from './AboutSection.module.css'

const aboutImages = [
  {
    src: '/images/hero/hero-1.png',
    alt: 'สินค้าอุปโภคบริโภคของ PHATAREE สำหรับบ้าน ร้านค้า สำนักงาน และองค์กร',
  },
  {
    src: '/images/hero/hero-2.png',
    alt: 'กลุ่มสินค้ากระดาษทิชชู ถุงขยะ น้ำยาทำความสะอาด และสินค้าใช้ประจำ',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.left}>
          <p className={styles.kicker}>ABOUT US</p>
          <h2 className={styles.title}>เกี่ยวกับ PHATAREE</h2>
        </div>

        <div className={styles.right}>
          <p>
            PHATAREE
            มุ่งเน้นการจัดจำหน่ายสินค้าอุปโภคบริโภคที่ตอบโจทย์การใช้งานจริง
            ทั้งในบ้าน ร้านค้า สำนักงาน โรงงาน และองค์กร
            โดยคัดเลือกสินค้าที่มีคุณภาพ ใช้งานสะดวก
            และเหมาะกับการสั่งซื้ออย่างต่อเนื่อง
          </p>

          <p>
            เราให้ความสำคัญกับความน่าเชื่อถือ ความคุ้มค่า
            และการให้ข้อมูลสินค้าที่ชัดเจน เพื่อช่วยให้ลูกค้าตัดสินใจได้ง่ายขึ้น
            พร้อมรองรับการขอใบเสนอราคาและการติดต่อเพื่อสั่งซื้อในรูปแบบที่เหมาะกับแต่ละธุรกิจ
          </p>
        </div>

        <Slider images={aboutImages} />
      </div>
    </section>
  )
}
