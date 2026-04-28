import styles from './FaqSection.module.css'

const faqs = [
  {
    question: 'มียอดสั่งซื้อขั้นต่ำหรือไม่',
    answer: 'มียอดสั่งซื้อขั้นต่ำ 5,000 บาทขึ้นไปค่ะ',
  },
  {
    question: 'มีบริการส่งฟรีหรือไม่',
    answer:
      'มีบริการส่งฟรีในพื้นที่ตัวเมืองระยองค่ะ หากอยู่นอกพื้นที่ตัวเมืองระยอง จะมีกำหนดยอดขั้นต่ำในการจัดส่งต่อรอบตามระยะทางค่ะ',
  },
  {
    question: 'ระยะเวลาในการจัดส่งสินค้านานกี่วัน',
    answer:
      'โดยปกติใช้ระยะเวลา 1–5 วันทำการ ทั้งนี้ขึ้นอยู่กับจำนวนสินค้า และสินค้าที่สั่งพิเศษค่ะ',
  },
  {
    question: 'มีสินค้าอื่น ๆ อีกไหม',
    answer:
      'มีสินค้าเพิ่มเติมนอกเหนือจากรายการบนเว็บไซต์ สามารถติดต่อสอบถามทาง LINE OA หรือโทร 086-456-5165, 092-639-4754 ได้ค่ะ',
  },
  {
    question: 'ค่าบริการจัดส่ง ขอรายละเอียดค่าจัดส่ง',
    answer:
      'ค่าขนส่งขึ้นอยู่กับระยะทาง และยอดการสั่งซื้อ',
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <p className={styles.kicker}>FAQ</p>
          <h2 className={styles.title}>คำถามที่พบบ่อย</h2>
          <p className={styles.desc}>
            ข้อมูลเบื้องต้นเกี่ยวกับการสั่งซื้อ การจัดส่ง
            และการสอบถามสินค้าเพิ่มเติม
          </p>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className={styles.item}
              open={index === 0}
            >
              <summary className={styles.question}>
                <span>{faq.question}</span>
                <span className={styles.icon} aria-hidden="true">
                  +
                </span>
              </summary>

              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
