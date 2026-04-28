// src/app/sections/ContactSection/Map.tsx
import Link from 'next/link'
import styles from './Map.module.css'

const mapInfo = {
  name: 'บริษัท ภัทรอารีย์(ไทยแลนด์) จำกัด - PHATAREE',
  address: '12.6825638, 101.2484319',
  note: 'ติดต่อสอบถามพื้นที่จัดส่ง ยอดขั้นต่ำ และเงื่อนไขบริการก่อนสั่งซื้อ',
  mapLabel: 'แผนที่ บริษัท ภัทรอารีย์(ไทยแลนด์) จำกัด - PHATAREE',
  mapSrc:
    'https://www.google.com/maps?q=12.6825638,101.2484319&z=17&output=embed',
  mapLink: 'https://maps.app.goo.gl/FsChG1XwbQFoPeMr6',
}

export default function Map() {
  return (
    <section className={styles.mapSection} aria-labelledby="map-title">
      <div className={styles.content}>
        <div className={styles.mapCard}>
          <iframe
            title={mapInfo.mapLabel}
            src={mapInfo.mapSrc}
            className={styles.iframe}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
