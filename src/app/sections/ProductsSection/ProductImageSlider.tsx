// src/app/sections/ProductsSection/ProductImageSlider.tsx
'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties, PointerEvent } from 'react'
import styles from './ProductImageSlider.module.css'

type ProductSlideImage = {
  src: string
  alt: string
}

type ProductImageSliderProps = {
  images: ProductSlideImage[]
}

const DRAG_THRESHOLD_RATIO = 0.16
const DRAG_THRESHOLD_MIN = 48

export default function ProductImageSlider({
  images,
}: ProductImageSliderProps) {
  const frameRef = useRef<HTMLDivElement | null>(null)
  const startXRef = useRef(0)
  const pointerIdRef = useRef<number | null>(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const safeImages = useMemo(() => {
    return images.filter((image) => image.src.trim().length > 0)
  }, [images])

  const hasMultipleImages = safeImages.length > 1
  const visibleIndex =
    safeImages.length > 0 ? Math.min(activeIndex, safeImages.length - 1) : 0

  useEffect(() => {
    setActiveIndex(0)
    setDragOffset(0)
    setIsDragging(false)
    pointerIdRef.current = null
  }, [safeImages])

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

  const endDrag = () => {
    if (!isDragging) return

    const frameWidth = frameRef.current?.clientWidth ?? 0
    const threshold = Math.max(
      frameWidth * DRAG_THRESHOLD_RATIO,
      DRAG_THRESHOLD_MIN,
    )

    if (dragOffset <= -threshold) {
      goToNext()
    }

    if (dragOffset >= threshold) {
      goToPrevious()
    }

    setIsDragging(false)
    setDragOffset(0)
    pointerIdRef.current = null
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!hasMultipleImages) return

    if (event.pointerType === 'mouse' && event.button !== 0) return

    pointerIdRef.current = event.pointerId
    startXRef.current = event.clientX
    setIsDragging(true)
    setDragOffset(0)

    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || pointerIdRef.current !== event.pointerId) return

    const frameWidth = frameRef.current?.clientWidth ?? 1
    const rawOffset = event.clientX - startXRef.current
    const maxOffset = frameWidth * 0.9
    const nextOffset = Math.max(-maxOffset, Math.min(rawOffset, maxOffset))

    setDragOffset(nextOffset)
  }

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current !== event.pointerId) return
    endDrag()
  }

  const handlePointerCancel = () => {
    setIsDragging(false)
    setDragOffset(0)
    pointerIdRef.current = null
  }

  const trackStyle = {
    transform: `translate3d(calc(${-visibleIndex * 100}% + ${dragOffset}px), 0, 0)`,
    transition: isDragging ? 'none' : undefined,
  } as CSSProperties

  return (
    <div className={styles.slider}>
      <div
        ref={frameRef}
        className={`${styles.frame} ${isDragging ? styles.frameDragging : ''}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        <div className={styles.track} style={trackStyle}>
          {safeImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className={styles.slide}
              aria-hidden={index !== visibleIndex}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className={styles.image}
                draggable={false}
              />
            </div>
          ))}
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
                  index === visibleIndex ? styles.dotActive : ''
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`ดูภาพสินค้าที่ ${index + 1}`}
                aria-current={index === visibleIndex}
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
