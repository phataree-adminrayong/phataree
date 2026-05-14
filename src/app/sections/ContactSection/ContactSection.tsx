// src/app/sections/ContactSection/ContactSection.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import GmailButton, {
  buildGmailComposeHref,
} from '@/components/GmailButton/GmailButton'
import Map from './Map'
import WorkWithUs from './WorkWithUs'
import styles from './ContactSection.module.css'

type ContactItem = {
  id: string
  label: string
  value: string
  href?: string
  note?: string
  external?: boolean
  copyValue?: string
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
    note: 'สำหรับสอบถามสินค้า และติดต่อทั่วไป',
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
    value: '@phataree',
    href: 'https://line.me/R/ti/p/@197ckvjq',
    external: true,
    copyValue: '@197ckvjq',
    note: 'ช่องทางติดต่อที่สะดวกและรวดเร็ว',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    value: 'บริษัทภัทรอารีย์ ไทยแลนด์ จำกัด',
    href: 'https://www.facebook.com/share/1EWyyJqqkH/?mibextid=wwXIfr',
    external: true,
    copyValue: 'https://www.facebook.com/share/1EWyyJqqkH/?mibextid=wwXIfr',
    note: 'ติดตามข่าวสาร สินค้า และช่องทางติดต่อเพิ่มเติม',
  },
]

const salesEmail = 'phataree.thailand@gmail.com'

function getSalesMailContent() {
  const subject = 'สอบถามสินค้า / ขอใบเสนอราคา - PHATAREE'
  const body = [
    'เรียน PHATAREE',
    '',
    'สนใจสอบถามสินค้า / ขอใบเสนอราคา',
    '',
    'ชื่อ-นามสกุล:',
    'ชื่อบริษัท / ร้านค้า:',
    'เบอร์โทรศัพท์:',
    'อีเมล:',
    'ประเภทลูกค้า (ร้านอาหาร / โรงแรม / โรงงาน / สำนักงาน / อื่น ๆ):',
    'สินค้าที่สนใจ:',
    'จำนวนที่ต้องการ:',
    'พื้นที่จัดส่ง:',
    'รายละเอียดเพิ่มเติม:',
    '',
    'ขอบคุณค่ะ/ครับ',
  ].join('\n')

  return { body, subject, to: salesEmail }
}

function buildSalesMailHref() {
  const { body, subject } = getSalesMailContent()

  return `mailto:${salesEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    body,
  )}`
}

function buildSalesGmailHref() {
  return buildGmailComposeHref(getSalesMailContent())
}

function getMailRecipient(href?: string) {
  if (!href?.startsWith('mailto:')) return null

  return href.slice('mailto:'.length).split('?')[0]
}

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

  const salesMailHref = buildSalesMailHref()
  const salesGmailHref = buildSalesGmailHref()

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

              <a
                href={salesMailHref}
                className="btn btnPrimary"
              >
                ส่งอีเมล
              </a>

              <GmailButton
                href={salesGmailHref}
                ariaLabel="Open Gmail to email PHATAREE"
                className={styles.gmailAction}
              />
            </div>
          </div>

          <div className={styles.infoGrid} aria-label="ช่องทางติดต่อ">
            {contactItems.map((item) => {
              const mailRecipient = getMailRecipient(item.href)

              return (
              <article key={item.id} className={styles.infoCard}>
                <div className={styles.infoTop}>
                  <span className={styles.label}>{item.label}</span>

                  <button
                    type="button"
                    className={styles.copyButton}
                    onClick={() =>
                      copyText(item.id, item.copyValue ?? item.value)
                    }
                    aria-label={`คัดลอก ${item.value}`}
                  >
                    {copiedId === item.id ? 'Copied' : 'Copy'}
                  </button>
                </div>

                {item.href ? (
                  <div className={styles.valueLine}>
                    <Link
                      href={item.href}
                      className={styles.value}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                      {item.value}
                    </Link>

                    {mailRecipient ? (
                      <GmailButton
                        href={buildGmailComposeHref({ to: mailRecipient })}
                        ariaLabel={`Open Gmail to email ${item.value}`}
                        size="compact"
                        className={styles.gmailCompact}
                      />
                    ) : null}
                  </div>
                ) : (
                  <strong className={styles.value}>{item.value}</strong>
                )}

                {item.note ? <p className={styles.note}>{item.note}</p> : null}
              </article>
              )
            })}
          </div>
        </div>

        <Map />

        <WorkWithUs />
      </div>
    </section>
  )
}
