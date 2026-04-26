'use client'

import Link from 'next/link'
import { useState } from 'react'
import WorkWithUs from './WorkWithUs'
import styles from './ContactSection.module.css'

type ContactItem = {
  id: string
  label: string
  value: string
  href?: string
  note?: string
}

const contactItems: ContactItem[] = [
  {
    id: 'phone-main',
    label: 'โทรศัพท์',
    value: '086-456-5165',
    href: 'tel:0864565165',
    note: 'สอบถามสินค้า และขอใบเสนอราคา',
  },
  {
    id: 'phone-second',
    label: 'โทรศัพท์',
    value: '092-639-4754',
    href: 'tel:0926394754',
    note: 'สอบถามสินค้า และขอใบเสนอราคา',
  },
  {
    id: 'email-main',
    label: 'อีเมล',
    value: 'phataree.thailand@gmail.com',
    href: 'mailto:phataree.thailand@gmail.com',
    note: 'สำหรับงานเอกสาร และบัญชี',
  },
  {
    id: 'email-account',
    label: 'อีเมล',
    value: 'phataree.acc@gmail.com',
    href: 'mailto:phataree.acc@gmail.com',
    note: 'สำหรับงานเอกสาร และบัญชี',
  },
  {
    id: 'line',
    label: 'LINE OA',
    value: '@197ckvjq',
    note: 'ช่องทางติดต่อที่สะดวกและรวดเร็ว',
  },
]

export default function ContactSection() {
  const [copiedId, setCopiedId] = useState<string>('')

  const copyText = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedId(id)

      window.setTimeout(() => {
        setCopiedId((current) => (current === id ? '' : current))
      }, 1600)
    } catch {
      setCopiedId('')
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <p className={styles.kicker}>CONTACT</p>

          <h2 className={styles.title}>ติดต่อเรา</h2>

          <p className={styles.desc}>
            หากต้องการสอบถามข้อมูลสินค้า ขอใบเสนอราคา หรือสั่งซื้อสำหรับบ้าน
            ร้านค้า สำนักงาน โรงงาน และองค์กร สามารถติดต่อ PHATAREE
            ได้ผ่านช่องทางด้านล่าง
          </p>
        </div>

        <div className={styles.contactPanel}>
          <div className={styles.mainCard}>
            <div className={styles.mainCardContent}>
              <span className={styles.badge}>PHATAREE THAILAND</span>

              <h3>พร้อมให้ข้อมูลสินค้าและใบเสนอราคา</h3>

              <p>
                ติดต่อเราเพื่อสอบถามรายการสินค้า ยอดขั้นต่ำในการจัดส่ง
                เงื่อนไขพื้นที่บริการ และข้อมูลสำหรับการสั่งซื้อแบบองค์กร
              </p>
            </div>

            <div className={styles.quickActions}>
              <Link href="tel:0864565165" className="btn btnPrimary">
                โทรหาเรา
              </Link>

              <Link href="mailto:phataree.thailand@gmail.com" className="btn">
                ส่งอีเมล
              </Link>
            </div>
          </div>

          <div className={styles.infoGrid} aria-label="ช่องทางติดต่อ">
            {contactItems.map((item) => (
              <article key={item.id} className={styles.infoCard}>
                <div className={styles.infoTop}>
                  <span className={styles.label}>{item.label}</span>

                  <button
                    type="button"
                    className={styles.copyButton}
                    onClick={() => copyText(item.id, item.value)}
                    aria-label={`คัดลอก ${item.value}`}
                  >
                    {copiedId === item.id ? 'Copied' : 'Copy'}
                  </button>
                </div>

                {item.href ? (
                  <Link href={item.href} className={styles.value}>
                    {item.value}
                  </Link>
                ) : (
                  <strong className={styles.value}>{item.value}</strong>
                )}

                {item.note ? <p className={styles.note}>{item.note}</p> : null}
              </article>
            ))}
          </div>
        </div>

        <WorkWithUs />
      </div>
    </section>
  )
}
