import Image from 'next/image'
import styles from './AboutSection.module.css'

const highlights = [
  {
    title: 'กลุ่มสินค้า',
    text: 'กระดาษทิชชู่ ถุงขยะ และผลิตภัณฑ์ทำความสะอาดสำหรับการใช้งานประจำวัน',
  },
  {
    title: 'กลุ่มลูกค้า',
    text: 'โรงแรม ร้านอาหาร บริษัท หน่วยงานราชการ และโรงงานอุตสาหกรรม',
  },
  {
    title: 'การบริการ',
    text: 'จัดส่งรวดเร็ว ตรงเวลา ประสานงานง่าย และดูแลคำสั่งซื้ออย่างเป็นระบบ',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <p className={styles.kicker}>ABOUT PHATAREE</p>

          <h2 className={styles.title}>
            ผู้จัดจำหน่ายสินค้าอุปโภคบริโภคสำหรับลูกค้าธุรกิจ
          </h2>

          <p className={styles.lead}>
            บริษัท ภัทรอารีย์ (ไทยแลนด์) จำกัด จัดจำหน่ายสินค้าอุปโภคบริโภค
            สำหรับองค์กร โดยเน้นสินค้าที่มีคุณภาพ เชื่อถือได้
            และเหมาะกับการใช้งานต่อเนื่องในธุรกิจ
          </p>
        </div>

        <div className={styles.imageCard}>
          <Image
            src="/images/about/about-1.png"
            alt="ภาพรวมสินค้าอุปโภคบริโภคของบริษัท ภัทรอารีย์ (ไทยแลนด์)"
            fill
            sizes="(max-width: 900px) 100vw, 900px"
            className={styles.image}
          />
        </div>

        <div className={styles.contentCard}>
          <div className={styles.statement}>
            <h3>วิสัยทัศน์</h3>
            <p>
              มุ่งเป็นผู้นำด้านการจัดจำหน่ายผลิตภัณฑ์ทำความสะอาด
              สำหรับกลุ่มอุตสาหกรรม โรงแรม และร้านอาหาร
              ในพื้นที่ภาคตะวันออกของประเทศไทย
            </p>
          </div>

          <div className={styles.highlightGrid}>
            {highlights.map((item) => (
              <article className={styles.highlightCard} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
