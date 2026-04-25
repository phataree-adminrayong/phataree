'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import styles from './Slider.module.css'

type AboutSlideImage = {
  src: string
  alt: string
}

type SliderProps = {
  images: AboutSlideImage[]
}

const AUTO_PLAY_MS = 5000

export default function Slider({ images }: SliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const safeImages = useMemo(() => {
    return images.filter((image) => image.src.trim().length > 0)
  }, [images])

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
      aria-label="ภาพประกอบเกี่ยวกับ PHATAREE"
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
              sizes="(max-width: 768px) 100vw, 1100px"
              className={styles.image}
            />
          </div>
        ))}

      </div>

      {hasMultipleImages ? (
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrow}
            onClick={goToPrevious}
            aria-label="ดูภาพก่อนหน้า"
          >
            ‹
          </button>

          <div className={styles.dots} aria-label="เลือกภาพ">
            {safeImages.map((image, index) => (
              <button
                key={`${image.src}-dot-${index}`}
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

          <button
            type="button"
            className={styles.arrow}
            onClick={goToNext}
            aria-label="ดูภาพถัดไป"
          >
            ›
          </button>
        </div>
      ) : null}
    </div>
  )
}
