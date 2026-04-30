// src/app/sections/HeroSection/slider.tsx
'use client'

import Image from 'next/image'
import {
  type CSSProperties,
  type PointerEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import styles from './slider.module.css'

type HeroSlide = {
  src: string
  alt: string
}

type SliderProps = {
  images: HeroSlide[]
}

const AUTO_PLAY_MS = 5200
const DRAG_THRESHOLD_RATIO = 0.18
const DRAG_THRESHOLD_MAX = 110
const DRAG_LIMIT_RATIO = 0.9

export default function Slider({ images }: SliderProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null)

  const dragRef = useRef({
    isActive: false,
    startX: 0,
    lastOffset: 0,
    pointerId: -1,
  })

  const safeImages = useMemo(() => {
    return images.filter((image) => image.src.trim().length > 0)
  }, [images])

  const safeImageKey = useMemo(() => {
    return safeImages.map((image) => image.src).join('|')
  }, [safeImages])

  const hasMultipleImages = safeImages.length > 1

  const sliderImages = useMemo(() => {
    if (!hasMultipleImages) return safeImages

    const firstImage = safeImages[0]
    const lastImage = safeImages[safeImages.length - 1]

    return [lastImage, ...safeImages, firstImage]
  }, [hasMultipleImages, safeImages])

  const [activeIndex, setActiveIndex] = useState(0)
  const [trackIndex, setTrackIndex] = useState(hasMultipleImages ? 1 : 0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [transitionEnabled, setTransitionEnabled] = useState(true)

  const visibleIndex =
    safeImages.length > 0 ? Math.min(activeIndex, safeImages.length - 1) : 0

  const maxTrackIndex = Math.max(sliderImages.length - 1, 0)

  const safeTrackIndex = hasMultipleImages
    ? Math.min(Math.max(trackIndex, 0), maxTrackIndex)
    : 0

  useEffect(() => {
    setActiveIndex(0)
    setTrackIndex(hasMultipleImages ? 1 : 0)
    setDragOffset(0)
    setIsDragging(false)
    setIsPaused(false)
    setTransitionEnabled(true)

    dragRef.current = {
      isActive: false,
      startX: 0,
      lastOffset: 0,
      pointerId: -1,
    }
  }, [hasMultipleImages, safeImageKey])

  const goToPrevious = useCallback(() => {
    if (!hasMultipleImages) return

    setTransitionEnabled(true)
    setDragOffset(0)

    setTrackIndex((current) => current - 1)
    setActiveIndex((current) =>
      current === 0 ? safeImages.length - 1 : current - 1,
    )
  }, [hasMultipleImages, safeImages.length])

  const goToNext = useCallback(() => {
    if (!hasMultipleImages) return

    setTransitionEnabled(true)
    setDragOffset(0)

    setTrackIndex((current) => current + 1)
    setActiveIndex((current) => (current + 1) % safeImages.length)
  }, [hasMultipleImages, safeImages.length])

  const goToSlide = (index: number) => {
    if (!hasMultipleImages) return

    setTransitionEnabled(true)
    setDragOffset(0)
    setActiveIndex(index)
    setTrackIndex(index + 1)
  }

  useEffect(() => {
    if (!hasMultipleImages || isPaused || isDragging) return

    const timer = window.setInterval(() => {
      goToNext()
    }, AUTO_PLAY_MS)

    return () => window.clearInterval(timer)
  }, [goToNext, hasMultipleImages, isDragging, isPaused])

  if (safeImages.length === 0) {
    return null
  }

  const resetClonePosition = (nextTrackIndex: number) => {
    setTransitionEnabled(false)
    setTrackIndex(nextTrackIndex)

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setTransitionEnabled(true)
      })
    })
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!hasMultipleImages) return
    if (event.pointerType === 'mouse' && event.button !== 0) return

    dragRef.current = {
      isActive: true,
      startX: event.clientX,
      lastOffset: 0,
      pointerId: event.pointerId,
    }

    setIsDragging(true)
    setIsPaused(true)
    setTransitionEnabled(false)
    setDragOffset(0)

    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.isActive) return
    if (dragRef.current.pointerId !== event.pointerId) return

    const viewportWidth = viewportRef.current?.clientWidth ?? 1
    const rawOffset = event.clientX - dragRef.current.startX
    const maxOffset = viewportWidth * DRAG_LIMIT_RATIO
    const offset = Math.max(-maxOffset, Math.min(rawOffset, maxOffset))

    dragRef.current.lastOffset = offset
    setDragOffset(offset)
  }

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.isActive) return
    if (dragRef.current.pointerId !== event.pointerId) return

    const pointerId = dragRef.current.pointerId
    const offset = dragRef.current.lastOffset
    const viewportWidth = viewportRef.current?.clientWidth ?? 0
    const threshold = Math.min(
      DRAG_THRESHOLD_MAX,
      viewportWidth * DRAG_THRESHOLD_RATIO,
    )

    dragRef.current = {
      isActive: false,
      startX: 0,
      lastOffset: 0,
      pointerId: -1,
    }

    setIsDragging(false)
    setIsPaused(false)

    try {
      event.currentTarget.releasePointerCapture(pointerId)
    } catch {
      // Browser may release pointer capture automatically.
    }

    if (offset <= -threshold) {
      goToNext()
      return
    }

    if (offset >= threshold) {
      goToPrevious()
      return
    }

    setTransitionEnabled(true)
    setDragOffset(0)
  }

  const cancelDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.isActive) return

    const pointerId = dragRef.current.pointerId

    dragRef.current = {
      isActive: false,
      startX: 0,
      lastOffset: 0,
      pointerId: -1,
    }

    setIsDragging(false)
    setIsPaused(false)
    setTransitionEnabled(true)
    setDragOffset(0)

    try {
      event.currentTarget.releasePointerCapture(pointerId)
    } catch {
      // Browser may release pointer capture automatically.
    }
  }

  const handleTransitionEnd = () => {
    if (!hasMultipleImages) return

    if (trackIndex === 0) {
      resetClonePosition(safeImages.length)
      return
    }

    if (trackIndex === safeImages.length + 1) {
      resetClonePosition(1)
    }
  }

  const trackStyle = {
    transform: `translate3d(calc(${-safeTrackIndex * 100}% + ${dragOffset}px), 0, 0)`,
  } as CSSProperties

  return (
    <div
      className={styles.slider}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        if (!isDragging) setIsPaused(false)
      }}
      aria-label="ภาพแนะนำสินค้า"
    >
      <div
        ref={viewportRef}
        className={`${styles.viewport} ${
          isDragging ? styles.viewportDragging : ''
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={cancelDrag}
        onPointerLeave={(event) => {
          if (isDragging && event.pointerType === 'mouse') {
            endDrag(event)
          }
        }}
      >
        <div
          className={`${styles.track} ${
            transitionEnabled && !isDragging ? styles.trackAnimated : ''
          }`}
          style={trackStyle}
          onTransitionEnd={handleTransitionEnd}
        >
          {sliderImages.map((image, index) => {
            const realIndex = !hasMultipleImages
              ? index
              : index === 0
                ? safeImages.length - 1
                : index === sliderImages.length - 1
                  ? 0
                  : index - 1

            return (
              <div
                key={`${image.src}-${index}`}
                className={styles.slide}
                aria-hidden={realIndex !== visibleIndex}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={hasMultipleImages ? index === 1 : index === 0}
                  sizes="100vw"
                  className={styles.image}
                  draggable={false}
                  onDragStart={(event) => event.preventDefault()}
                />
              </div>
            )
          })}
        </div>
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
                key={`${image.src}-dot-${index}`}
                type="button"
                className={`${styles.dot} ${
                  index === visibleIndex ? styles.dotActive : ''
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`ดูภาพที่ ${index + 1}`}
                aria-current={index === visibleIndex}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}
