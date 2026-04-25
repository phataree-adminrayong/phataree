'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './ProductImageSlider.module.css'

type ProductSlideImage = {
  src: string
  alt: string
}

type ProductImageSliderProps = {
  images: ProductSlideImage[]
}

const AUTO_PLAY_MS = 4800

export default function ProductImageSlider({
  images,
}: ProductImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const safeImages = images.filter((image) => image.src)
  const hasMultipleImages = safeImages.length > 1

  useEffect(() => {
    if (!hasMultipleImages || isPaused) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % safeImages.length)
    }, AUTO_PLAY_MS)

    return () => window.clearInterval(timer)
  }, [hasMultipleImages, isPaused, safeImages.length])

  if (safeImages.length === 0) {
    return null
  }

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? safeImages.length - 1 : current - 1,
    )
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % safeImages.length)
  }

  return (
    <div
      className={styles.slider}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.frame}>
        {safeImages.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={`${styles.slide} ${
              index === activeIndex ? styles.slideActive : ''
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className={styles.image}
            />
          </div>
        ))}

        <div className={styles.badge}>
          <span>PHATAREE</span>
          <strong>สินค้าใช้ประจำสำหรับองค์กร</strong>
        </div>
      </div>

      {hasMultipleImages ? (
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrow}
            onClick={goToPrevious}
            aria-label="ดูภาพสินค้าก่อนหน้า"
          >
            ‹
          </button>

          <div className={styles.dots} aria-label="เลือกภาพสินค้า">
            {safeImages.map((image, index) => (
              <button
                key={`${image.src}-dot-${index}`}
                type="button"
                className={`${styles.dot} ${
                  index === activeIndex ? styles.dotActive : ''
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`ดูภาพสินค้าที่ ${index + 1}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.arrow}
            onClick={goToNext}
            aria-label="ดูภาพสินค้าถัดไป"
          >
            ›
          </button>
        </div>
      ) : null}
    </div>
  )
}
