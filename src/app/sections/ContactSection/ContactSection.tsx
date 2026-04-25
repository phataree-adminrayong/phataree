import Link from 'next/link'
import styles from './ContactSection.module.css'

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.left}>
            <p className={styles.kicker}>CONTACT</p>
            <h2 className={styles.title}>ติดต่อเรา</h2>
            <p className={styles.desc}>
              หากต้องการสอบถามข้อมูลสินค้า ขอใบเสนอราคา
              หรือสั่งซื้อสำหรับการใช้งานในบ้าน ร้านค้า สำนักงาน หรือองค์กร
              สามารถติดต่อเราได้ผ่านช่องทางด้านล่าง
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <span className={styles.label}>โทรศัพท์</span>
                <strong>08X-XXX-XXXX</strong>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>อีเมล</span>
                <strong>contact@phataree.com</strong>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>LINE</span>
                <strong>@phataree</strong>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>ร่วมงานกับเรา</h3>

              <form className={styles.form}>
                <input type="text" placeholder="ชื่อผู้ติดต่อ" />
                <input type="text" placeholder="เบอร์โทรศัพท์ / อีเมล" />
                <textarea placeholder="รายละเอียดสินค้า หรือข้อมูลสำหรับขอใบเสนอราคา" />
                <button type="submit" className="btn btnPrimary">
                  ส่งข้อความ
                </button>
              </form>

              <div className={styles.quickLinks}>
                <Link href="tel:08XXXXXXXX" className="btn">
                  โทรหาเรา
                </Link>
                <Link href="mailto:contact@phataree.com" className="btn">
                  ส่งอีเมล
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
