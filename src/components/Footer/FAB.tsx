// src/components/Footer/FAB.tsx
'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import styles from './FAB.module.css'

type FabItem = {
  label: string
  href: string
  icon: string
  external?: boolean
}

const fabItems: FabItem[] = [
  {
    label: 'โทร 086-456-5165',
    href: 'tel:0864565165',
    icon: '/icons/Phone-2.png',
  },
  {
    label: 'โทร 092-639-4754',
    href: 'tel:0926394754',
    icon: '/icons/Phone-2.png',
  },
  {
    label: 'LINE',
    href: 'https://line.me/R/ti/p/@197ckvjq',
    icon: '/icons/LINE.png',
    external: true,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1EWyyJqqkH/?mibextid=wwXIfr',
    icon: '/icons/Facebook.png',
    external: true,
  },
  {
    label: 'แผนที่ / ที่ตั้ง',
    href: 'https://maps.app.goo.gl/FsChG1XwbQFoPeMr6',
    icon: '/icons/Location.png',
    external: true,
  },
]

export default function FAB() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className={styles.fabWrap}>
      <div
        className={`${styles.items} ${isOpen ? styles.itemsOpen : ''}`}
        aria-hidden={!isOpen}
      >
        {fabItems.map((item, index) => (
          <a
            key={`${item.label}-${index}`}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            className={styles.item}
            style={{ '--item-index': index } as CSSProperties}
            aria-label={item.label}
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
          >
            <span className={styles.itemText}>{item.label}</span>

            <span className={styles.itemIcon}>
              <Image
                src={item.icon}
                alt=""
                width={56}
                height={56}
                className={styles.iconImage}
              />
            </span>
          </a>
        ))}
      </div>

      <button
        type="button"
        className={`${styles.mainButton} ${
          isOpen ? styles.mainButtonOpen : ''
        }`}
        aria-label={isOpen ? 'ปิดเมนูติดต่อ' : 'เปิดเมนูติดต่อ'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image
          src={isOpen ? '/icons/Call-end.png' : '/icons/Call-start.png'}
          alt=""
          width={88}
          height={88}
          className={styles.mainIcon}
        />
      </button>
    </div>
  )
}
