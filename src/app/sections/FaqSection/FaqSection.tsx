'use client'

import { useState } from 'react'
import styles from './FaqSection.module.css'

const faqItems = [
  {
    question: 'มีสินค้าประเภทใดบ้าง?',
    answer:
      'ปัจจุบันมีสินค้ากลุ่มกระดาษทิชชู ถุงขยะ น้ำยาทำความสะอาด ผลิตภัณฑ์ 3M และเกลือ โดยในอนาคตสามารถเพิ่มสินค้าใหม่ได้อีก',
  },
  {
    question: 'สามารถขอใบเสนอราคาได้หรือไม่?',
    answer:
      'ได้ ลูกค้าสามารถติดต่อผ่านส่วนติดต่อเราเพื่อแจ้งรายการสินค้า จำนวน และข้อมูลสำหรับออกใบเสนอราคา',
  },
  {
    question: 'เหมาะกับลูกค้าประเภทใด?',
    answer:
      'เหมาะทั้งลูกค้าทั่วไป ร้านค้า สำนักงาน โรงงาน หน่วยงาน และองค์กรที่ต้องการสินค้าสำหรับใช้งานประจำวัน',
  },
  {
    question: 'ในอนาคตเพิ่มหน้ารายละเอียดสินค้าได้ไหม?',
    answer:
      'ได้ โครงสร้างเว็บไซต์นี้รองรับการขยายเป็นหน้ารายละเอียดสินค้าแยกแต่ละรายการในภายหลัง',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <p className={styles.kicker}>FAQ</p>
          <h2 className={styles.title}>คำถามที่พบบ่อย</h2>
        </div>

        <div className={styles.list}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <article key={item.question} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className={styles.symbol}>{isOpen ? '−' : '+'}</span>
                </button>

                {isOpen && <div className={styles.answer}>{item.answer}</div>}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
