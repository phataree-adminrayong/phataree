// src/app/sections/ProductsSection/ProductsShowcase.tsx
'use client'

import { useMemo, useState } from 'react'
import ProductImageSlider from './ProductImageSlider'
import {
  productGroups,
  type ProductItem,
  type ProductItemSpec,
} from './productData'
import styles from './ProductsShowcase.module.css'

type SpecRow = {
  label: string
  value: string
}

function formatNumber(value: number) {
  return new Intl.NumberFormat('th-TH').format(value)
}

function getSpecRows(specs?: ProductItemSpec): SpecRow[] {
  if (!specs) return []

  const rows: SpecRow[] = []

  if (specs.codeGut) rows.push({ label: 'Code GUT', value: specs.codeGut })
  if (specs.brand) rows.push({ label: 'แบรนด์', value: specs.brand })
  if (specs.format) rows.push({ label: 'ประเภท', value: specs.format })
  if (specs.sheetSize) rows.push({ label: 'ขนาดแผ่น', value: specs.sheetSize })
  if (specs.rollSize) rows.push({ label: 'ขนาดม้วน', value: specs.rollSize })
  if (specs.purity) rows.push({ label: 'ความบริสุทธิ์', value: specs.purity })
  if (specs.size) rows.push({ label: 'ขนาด', value: specs.size })

  if (typeof specs.ply === 'number') {
    rows.push({ label: 'จำนวนชั้น', value: `${specs.ply} ชั้น` })
  }

  if (typeof specs.lengthMeter === 'number') {
    rows.push({
      label: 'ความยาว',
      value: `${formatNumber(specs.lengthMeter)} เมตร`,
    })
  }

  if (typeof specs.sheetsPerRoll === 'number') {
    rows.push({
      label: 'จำนวนแผ่น / ม้วน',
      value: `${formatNumber(specs.sheetsPerRoll)} แผ่น`,
    })
  }

  if (typeof specs.sheetsPerPack === 'number') {
    rows.push({
      label: 'จำนวนแผ่น / แพค',
      value: `${formatNumber(specs.sheetsPerPack)} แผ่น`,
    })
  }

  if (typeof specs.rollsPerPack === 'number') {
    rows.push({
      label: 'จำนวนม้วน / แพค',
      value: `${formatNumber(specs.rollsPerPack)} ม้วน`,
    })
  }

  if (typeof specs.packsPerCarton === 'number') {
    rows.push({
      label: 'บรรจุ / ลัง',
      value: `${formatNumber(specs.packsPerCarton)} แพค`,
    })
  }

  if (typeof specs.rollsPerCarton === 'number') {
    rows.push({
      label: 'บรรจุ / ลัง',
      value: `${formatNumber(specs.rollsPerCarton)} ม้วน`,
    })
  }

  return rows
}

function getCardBadges(specs?: ProductItemSpec) {
  if (!specs) return []

  return [
    specs.brand,
    specs.format,
    specs.purity,
    specs.size,
    specs.codeGut ? `Code ${specs.codeGut}` : undefined,
  ].filter(Boolean) as string[]
}

function ProductCard({ item }: { item: ProductItem }) {
  const specRows = getSpecRows(item.specs)
  const badges = getCardBadges(item.specs)
  const certifications = item.specs?.certifications ?? []
  const usage = item.specs?.usage ?? []
  const priceTier = item.specs?.priceTier
  const note = item.specs?.note

  const hasSpecs =
    specRows.length > 0 ||
    certifications.length > 0 ||
    usage.length > 0 ||
    Boolean(priceTier) ||
    Boolean(note)

  return (
    <li className={styles.item}>
      <div className={styles.itemHeader}>
        <div className={styles.itemIcon} aria-hidden="true" />

        <div className={styles.itemText}>
          <strong className={styles.itemTitle}>{item.name}</strong>
          <span className={styles.itemDesc}>{item.shortDescription}</span>
        </div>
      </div>

      {badges.length > 0 ? (
        <div className={styles.badgeRow} aria-label="ข้อมูลสินค้าแบบย่อ">
          {badges.slice(0, 4).map((badge) => (
            <span key={badge} className={styles.badge}>
              {badge}
            </span>
          ))}
        </div>
      ) : null}

      {specRows.length > 0 ? (
        <dl className={styles.specGrid}>
          {specRows.map((row) => (
            <div
              key={`${item.id}-${row.label}-${row.value}`}
              className={styles.specCell}
            >
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      {priceTier ? (
        <div className={styles.priceBox}>
          <p className={styles.boxTitle}>ราคาขายตามเรทน้ำหนัก</p>

          <div className={styles.priceGrid}>
            <div>
              <span>500 กก.</span>
              <strong>{formatNumber(priceTier.rate500Kg)}</strong>
            </div>

            <div>
              <span>250 กก.</span>
              <strong>{formatNumber(priceTier.rate250Kg)}</strong>
            </div>

            <div>
              <span>ต่ำกว่า 250 กก.</span>
              <strong>{formatNumber(priceTier.rateBelow250Kg)}</strong>
            </div>
          </div>
        </div>
      ) : null}

      {usage.length > 0 ? (
        <div className={styles.useBox}>
          <p className={styles.boxTitle}>เหมาะสำหรับ</p>

          <ul className={styles.useList}>
            {usage.map((text) => (
              <li key={`${item.id}-${text}`}>{text}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {certifications.length > 0 ? (
        <div className={styles.certRow} aria-label="เอกสารรับรองสินค้า">
          {certifications.map((cert) => (
            <span key={`${item.id}-${cert}`}>{cert}</span>
          ))}
        </div>
      ) : null}

      {note ? <p className={styles.note}>{note}</p> : null}

      {!hasSpecs ? (
        <p className={styles.note}>
          สอบถามรายละเอียดสินค้าเพิ่มเติมได้ทางฝ่ายขาย
        </p>
      ) : null}
    </li>
  )
}

export default function ProductsShowcase() {
  const [activeGroupId, setActiveGroupId] = useState(productGroups[0]?.id ?? '')

  const activeGroup = useMemo(() => {
    return (
      productGroups.find((group) => group.id === activeGroupId) ??
      productGroups[0]
    )
  }, [activeGroupId])

  if (!activeGroup) {
    return null
  }

  const itemCount = activeGroup.items.length
  const specCount = activeGroup.items.filter((item) => item.specs).length
  const hasSaltPrice = activeGroup.items.some((item) => item.specs?.priceTier)

  return (
    <div className={styles.showcase}>
      <div className={styles.filterWrap} aria-label="เลือกหมวดหมู่สินค้า">
        {productGroups.map((group) => (
          <button
            key={group.id}
            type="button"
            className={`${styles.pill} ${
              group.id === activeGroup.id ? styles.pillActive : ''
            }`}
            onClick={() => setActiveGroupId(group.id)}
            aria-pressed={group.id === activeGroup.id}
          >
            {group.title}
          </button>
        ))}
      </div>

      <div className={styles.panel}>
        <div className={styles.media}>
          <ProductImageSlider
            key={activeGroup.id}
            images={activeGroup.images}
          />
        </div>

        <article className={styles.content}>
          <div className={styles.headingRow}>
            <p className={styles.eyebrow}>{activeGroup.eyebrow}</p>

            <div className={styles.metaRow}>
              <span>{itemCount} รายการสินค้า</span>
              {specCount > 0 ? (
                <span>มีข้อมูลสเปก {specCount} รายการ</span>
              ) : null}
              {hasSaltPrice ? <span>ราคาขายไม่รวม VAT</span> : null}
            </div>
          </div>

          <h3 className={styles.groupTitle}>{activeGroup.title}</h3>

          <p className={styles.groupDesc}>{activeGroup.description}</p>

          <ul className={styles.list}>
            {activeGroup.items.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </ul>
        </article>
      </div>
    </div>
  )
}
