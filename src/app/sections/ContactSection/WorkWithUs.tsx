import Link from 'next/link'
import styles from './WorkWithUs.module.css'

type JobItem = {
  id: string
  title: string
  englishTitle: string
  tag: string
  description: string
  responsibilities: string[]
}

const jobs: JobItem[] = [
  {
    id: 'marketing-staff',
    title: 'พนักงานการตลาด',
    englishTitle: 'Marketing Staff',
    tag: 'Marketing',
    description:
      'เหมาะสำหรับผู้ที่สนใจงานการตลาด การสื่อสารสินค้า และการช่วยวางแผนโปรโมชันให้เข้าถึงกลุ่มลูกค้าองค์กร',
    responsibilities: [
      'วางแผนและประสานงานกิจกรรมส่งเสริมการขาย',
      'ดูแลคอนเทนต์และสื่อประชาสัมพันธ์ทั้ง Online และ Offline',
      'ช่วยพัฒนากลยุทธ์การตลาดสำหรับสินค้าและบริการของบริษัท',
    ],
  },
  {
    id: 'sales-executive-b2b',
    title: 'พนักงานขาย',
    englishTitle: 'Sales Executive (B2B)',
    tag: 'Sales',
    description:
      'เหมาะสำหรับผู้ที่ชอบพบลูกค้า นำเสนอสินค้า และดูแลความสัมพันธ์กับร้านค้า บริษัท โรงงาน และลูกค้าองค์กร',
    responsibilities: [
      'ดูแลและขยายฐานลูกค้าร้านค้า โรงแรม ร้านอาหาร สำนักงาน และช่องทาง B2B อื่น ๆ',
      'นำเสนอสินค้า รายละเอียดการสั่งซื้อ และโปรโมชันให้แก่ลูกค้า',
      'ติดตามยอดขายและสร้างความสัมพันธ์ที่ดีกับลูกค้าอย่างต่อเนื่อง',
    ],
  },
  {
    id: 'delivery-driver',
    title: 'พนักงานขับรถส่งสินค้า',
    englishTitle: 'Delivery Driver',
    tag: 'Delivery',
    description:
      'เหมาะสำหรับผู้ที่มีความรับผิดชอบ ตรงต่อเวลา และสามารถดูแลการส่งสินค้าให้ถึงมือลูกค้าได้อย่างปลอดภัย',
    responsibilities: [
      'ขับรถส่งสินค้าให้ถึงมือลูกค้าอย่างรวดเร็วและปลอดภัย',
      'ตรวจสอบสินค้าและเอกสารก่อนส่งมอบให้ลูกค้า',
      'ดูแลรักษารถขนส่งให้อยู่ในสภาพพร้อมใช้งาน',
    ],
  },
]

const phoneNumber = '0864565165'
const displayPhoneNumber = '086-456-5165'
const email = 'phataree.thailand@gmail.com'

function buildMailHref(jobTitle: string) {
  const subject = `สมัครงานตำแหน่ง ${jobTitle} - PHATAREE`
  const body = [
    `เรียน PHATAREE`,
    '',
    `สนใจสมัครงานตำแหน่ง: ${jobTitle}`,
    '',
    'ชื่อ-นามสกุล:',
    'เบอร์โทรศัพท์:',
    'อีเมล:',
    'ประสบการณ์โดยย่อ:',
    '',
    'ขอบคุณค่ะ/ครับ',
  ].join('\n')

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    body,
  )}`
}

export default function WorkWithUs() {
  return (
    <section className={styles.workWithUs} aria-labelledby="work-with-us-title">
      <div className={styles.hero}>
        <p className={styles.kicker}>WORK WITH US</p>

        <h3 id="work-with-us-title" className={styles.title}>
          ร่วมเป็นส่วนหนึ่งกับ ภัทรอารีย์
        </h3>

        <div className={styles.intro}>
          <p>
            เราเปิดรับสมัครพนักงานหลายตำแหน่ง
            สำหรับผู้ที่อยากเติบโตไปกับธุรกิจสินค้าอุปโภคบริโภค งานขายองค์กร
            งานการตลาด และงานจัดส่งสินค้า
            หากคุณเป็นคนรับผิดชอบ ตรงต่อเวลา
            ทำงานเป็นทีม และพร้อมเรียนรู้งานจริง
            สามารถติดต่อสมัครงานผ่านอีเมล หรือโทรหาเราได้โดยตรง
          </p>

        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.jobs}>
        {jobs.map((job, index) => (
          <article key={job.id} className={styles.jobCard}>
            <div className={styles.jobContent}>
              <span className={styles.tag}>{job.tag}</span>

              <h4 className={styles.jobTitle}>
                {job.title}
                <span>{job.englishTitle}</span>
              </h4>

              <p className={styles.jobDesc}>{job.description}</p>

              <ul className={styles.responsibilities}>
                {job.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className={styles.actions}>
                <Link
                  href={buildMailHref(`${job.title} (${job.englishTitle})`)}
                  className={styles.primaryAction}
                >
                  ส่งอีเมลสมัครงาน
                  <span aria-hidden="true">→</span>
                </Link>

                <Link
                  href={`tel:${phoneNumber}`}
                  className={styles.secondaryAction}
                >
                  โทรหาเรา
                  <span>{displayPhoneNumber}</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.footerNote}>
        <strong>หมายเหตุ</strong>
        <p>
          ผู้สมัครสามารถส่งประวัติส่วนตัว รายละเอียดประสบการณ์
          หรือข้อมูลติดต่อกลับมาทางอีเมล เพื่อให้ทีมงานติดต่อกลับในลำดับถัดไป
        </p>
      </div>
    </section>
  )
}
