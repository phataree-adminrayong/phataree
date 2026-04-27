'use client'

import { useMemo, useState } from 'react'
import ProductImageSlider from './ProductImageSlider'
import { productGroups } from './productData'
import styles from './ProductsShowcase.module.css'

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
          <ProductImageSlider images={activeGroup.images} />
        </div>

        <article className={styles.content}>
          <p className={styles.eyebrow}>{activeGroup.eyebrow}</p>

          <h3 className={styles.groupTitle}>{activeGroup.title}</h3>

          <p className={styles.groupDesc}>{activeGroup.description}</p>

          <div className={styles.metaRow}>
            <span>{activeGroup.items.length} รายการสินค้า</span>
            <span>เหมาะสำหรับ B2B / องค์กร</span>
          </div>

          <ul className={styles.list}>
            {activeGroup.items.map((item) => (
              <li key={item.id} className={styles.item}>
                <div className={styles.itemIcon} aria-hidden="true" />

                <div>
                  <strong>{item.name}</strong>
                  <span>{item.shortDescription}</span>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  )
}
