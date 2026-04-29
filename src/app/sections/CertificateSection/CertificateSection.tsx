// src/app/sections/CertificateSection/CertificateSection.tsx
import Image from 'next/image'
import styles from './CertificateSection.module.css'

type CertificateItem = {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
}

const certificates: CertificateItem[] = [
  {
    id: 'green-label',
    title: 'ฉลากเขียว',
    subtitle: 'Green Label Thailand',
    description:
      'สัญลักษณ์รับรองผลิตภัณฑ์ที่คำนึงถึงผลกระทบต่อสิ่งแวดล้อม ช่วยเพิ่มความมั่นใจในการเลือกใช้สินค้า',
    image: '/images/certificate/certificate-1.jpg',
    imageAlt: 'โลโก้ฉลากเขียว Green Label Thailand',
  },
  {
    id: 'iso-14001',
    title: 'อ้างอิงระบบ ISO',
    subtitle: 'ISO 14001 Certified',
    description:
      'อ้างอิงแนวทางระบบการจัดการสิ่งแวดล้อม เพื่อสนับสนุนมาตรฐานการดำเนินงานและความรับผิดชอบต่อสิ่งแวดล้อม',
    image: '/images/certificate/certificate-2.jpg',
    imageAlt: 'โลโก้ ISO 14001 Certified',
  },
  {
    id: 'green-industry',
    title: 'อุตสาหกรรมสีเขียวระดับที่ 3',
    subtitle: 'Green Industry Level 3',
    description:
      'สะท้อนแนวทางการดำเนินธุรกิจที่ให้ความสำคัญกับสิ่งแวดล้อม กระบวนการทำงาน และความยั่งยืน',
    image: '/images/certificate/certificate-3.png',
    imageAlt: 'โลโก้อุตสาหกรรมสีเขียว กระทรวงอุตสาหกรรม',
  },
  {
    id: 'made-in-thailand',
    title: 'Made in Thailand',
    subtitle: 'สินค้าผลิตในประเทศไทย',
    description:
      'สนับสนุนสินค้าและผู้ผลิตในประเทศไทย พร้อมสร้างความมั่นใจด้านแหล่งที่มาและมาตรฐานการผลิต',
    image: '/images/certificate/certificate-4.png',
    imageAlt: 'โลโก้ Made in Thailand',
  },
]

export default function CertificateSection() {
  return (
    <section id="certificate" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <p className={styles.kicker}>CERTIFICATE</p>

          <h2 className={styles.title}>ใบรับรองและมาตรฐานสินค้า</h2>

          <p className={styles.desc}>
            PHATAREE คัดสรรสินค้าอุปโภคบริโภคสำหรับบ้าน ร้านค้า สำนักงาน โรงงาน
            และองค์กร โดยให้ความสำคัญกับคุณภาพ ความน่าเชื่อถือ
            และมาตรฐานที่ลูกค้าสามารถตรวจสอบได้
          </p>
        </div>

        <div className={styles.grid} aria-label="รายการใบรับรองและมาตรฐาน">
          {certificates.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.imageBox}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={520}
                  height={360}
                  className={styles.image}
                  sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className={styles.cardContent}>
                <span className={styles.subtitle}>{item.subtitle}</span>

                <h3 className={styles.cardTitle}>{item.title}</h3>

                <p className={styles.cardText}>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.noteBox}>
          <span className={styles.noteIcon}>✓</span>

          <p>
            รายการใบรับรองและมาตรฐานอาจแตกต่างกันตามประเภทสินค้า
            ลูกค้าสามารถสอบถามเอกสารประกอบเพิ่มเติมก่อนสั่งซื้อได้
          </p>
        </div>
      </div>
    </section>
  )
}
