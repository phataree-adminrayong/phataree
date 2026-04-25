'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import styles from './slider.module.css'

type HeroSlide = {
  src: string
  alt: string
}

type SliderProps = {
  images: HeroSlide[]
}

const AUTO_PLAY_MS = 5200

export default function Slider({ images }: SliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const hasMultipleImages = images.length > 1

  const safeImages = useMemo(() => {
    return images.filter((image) => image.src)
  }, [images])

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
      aria-label="ภาพแนะนำสินค้า"
    >
      <div className={styles.viewport}>
        {safeImages.map((image, index) => (
          <div
            key={image.src}
            className={`${styles.slide} ${
              index === activeIndex ? styles.active : ''
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={styles.image}
            />
          </div>
        ))}

        <div className={styles.overlay} />
      </div>

      {hasMultipleImages ? (
        <>
          <button
            type="button"
            className={`${styles.arrow} ${styles.prev}`}
            onClick={goToPrevious}
            aria-label="ดูภาพก่อนหน้า"
          >
            <span aria-hidden="true">‹</span>
          </button>

          <button
            type="button"
            className={`${styles.arrow} ${styles.next}`}
            onClick={goToNext}
            aria-label="ดูภาพถัดไป"
          >
            <span aria-hidden="true">›</span>
          </button>

          <div className={styles.dots} aria-label="เลือกภาพสไลด์">
            {safeImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={`${styles.dot} ${
                  index === activeIndex ? styles.dotActive : ''
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`ดูภาพที่ ${index + 1}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}
