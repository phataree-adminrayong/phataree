import styles from './CertificateSection.module.css'

const certificates = [
  {
    title: 'คุณภาพสินค้า',
    text: 'แสดงข้อมูลด้านมาตรฐานสินค้า และความเหมาะสมต่อการใช้งานในแต่ละประเภท',
  },
  {
    title: 'ความน่าเชื่อถือของธุรกิจ',
    text: 'ช่วยเสริมความมั่นใจให้ลูกค้าเมื่อต้องการสั่งซื้อในปริมาณมากหรือใช้งานในองค์กร',
  },
  {
    title: 'พร้อมรองรับการแสดงเอกสาร',
    text: 'สามารถเพิ่มรูปใบรับรอง มาตรฐานสินค้า หรือเอกสารสำคัญของบริษัทในภายหลังได้',
  },
]

export default function CertificateSection() {
  return (
    <section id="certificate" className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <p className={styles.kicker}>CERTIFICATE</p>
          <h2 className={styles.title}>ใบรับรองและความน่าเชื่อถือ</h2>
          <p className={styles.desc}>
            ส่วนนี้ออกแบบไว้เพื่อรองรับการแสดงใบรับรอง มาตรฐานสินค้า
            หรือเอกสารสำคัญที่ช่วยเสริมความมั่นใจให้ลูกค้า
          </p>
        </div>

        <div className={styles.grid}>
          {certificates.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.icon}>✓</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
