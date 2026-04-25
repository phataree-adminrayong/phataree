'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import styles from './Nav.module.css'

type NavItem = {
  href: string
  label: string
  hash: string
}

const navItems: NavItem[] = [
  { href: '/#products', label: 'สินค้า', hash: '#products' },
  { href: '/#about', label: 'เกี่ยวกับเรา', hash: '#about' },
  { href: '/#certificate', label: 'ใบรับรอง', hash: '#certificate' },
  { href: '/#faq', label: 'คำถามที่พบบ่อย', hash: '#faq' },
  { href: '/#contact', label: 'ติดต่อเรา', hash: '#contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')

  const homeHref = useMemo(() => '/', [])
  const quoteHref = useMemo(() => '/#contact', [])

  const isHomeActive = pathname === '/' && activeHash === ''

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    const syncHash = () => {
      setActiveHash(window.location.hash || '')
    }

    syncHash()
    window.addEventListener('hashchange', syncHash)

    return () => {
      window.removeEventListener('hashchange', syncHash)
    }
  }, [])

  useEffect(() => {
    if (!isDrawerOpen) {
      document.body.classList.remove('menu-open')
      return
    }

    document.body.classList.add('menu-open')

    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [isDrawerOpen])

  useEffect(() => {
    closeDrawer()
  }, [pathname])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDrawer()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link
          href={homeHref}
          className={styles.brand}
          aria-label="PHATAREE หน้าแรก"
          onClick={() => {
            setActiveHash('')
            closeDrawer()
          }}
        >
          <span className={styles.brandMark} aria-hidden="true">
            P
          </span>

          <span className={styles.brandText}>
            <span className={styles.brandName}>PHATAREE</span>
            <span className={styles.brandSub}>Consumable Products</span>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="เมนูหลัก">
          <Link
            href={homeHref}
            className={`${styles.navLink} ${isHomeActive ? styles.navLinkActive : ''}`}
            onClick={() => setActiveHash('')}
          >
            หน้าแรก
          </Link>

          {navItems.map((item) => {
            const isActive = pathname === '/' && activeHash === item.hash

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                onClick={() => setActiveHash(item.hash)}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className={styles.actions}>
          <Link
            href={quoteHref}
            className={styles.quoteButton}
            onClick={() => setActiveHash('#contact')}
          >
            ขอใบเสนอราคา
          </Link>

          <button
            type="button"
            className={styles.menuButton}
            onClick={toggleDrawer}
            aria-label={isDrawerOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
            aria-expanded={isDrawerOpen}
            aria-controls="mobile-drawer"
          >
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </button>
        </div>
      </div>

      <div
        className={`${styles.backdrop} ${isDrawerOpen ? styles.backdropOpen : ''}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      <aside
        id="mobile-drawer"
        className={`${styles.drawer} ${isDrawerOpen ? styles.drawerOpen : ''}`}
        aria-label="เมนูมือถือ"
        aria-hidden={!isDrawerOpen}
      >
        <div className={styles.drawerHeader}>
          <div className={styles.drawerBrand}>
            <span className={styles.brandMark} aria-hidden="true">
              P
            </span>

            <span className={styles.drawerBrandText}>
              <span className={styles.brandName}>PHATAREE</span>
              <span className={styles.brandSub}>Consumable Products</span>
            </span>
          </div>

          <button
            type="button"
            className={styles.closeButton}
            onClick={closeDrawer}
            aria-label="ปิดเมนู"
          >
            <span className={styles.closeIcon} aria-hidden="true">
              ×
            </span>
          </button>
        </div>

        <nav className={styles.drawerNav} aria-label="เมนูหลักบนมือถือ">
          <Link
            href={homeHref}
            className={`${styles.drawerLink} ${isHomeActive ? styles.drawerLinkActive : ''}`}
            onClick={() => {
              setActiveHash('')
              closeDrawer()
            }}
          >
            หน้าแรก
          </Link>

          {navItems.map((item) => {
            const isActive = pathname === '/' && activeHash === item.hash

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ''}`}
                onClick={() => {
                  setActiveHash(item.hash)
                  closeDrawer()
                }}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className={styles.drawerFooter}>
          <Link
            href={quoteHref}
            className={styles.drawerQuoteButton}
            onClick={() => {
              setActiveHash('#contact')
              closeDrawer()
            }}
          >
            ขอใบเสนอราคา
          </Link>
        </div>
      </aside>
    </header>
  )
}
