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

const DRAG_THRESHOLD_RATIO = 0.18
const DRAG_THRESHOLD_MAX = 110
const DRAG_LIMIT_RATIO = 0.9
const AUTOPLAY_INTERVAL_MS = 3000
const SLIDE_TRANSITION_MS = 620
const LOOP_RESET_BUFFER_MS = 80

export default function Slider({ images }: SliderProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const loopResetTimeoutRef = useRef<number | null>(null)

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
  const loopCloneIndex = safeImages.length

  const sliderImages = useMemo(() => {
    if (!hasMultipleImages) return safeImages

    const firstImage = safeImages[0]
    return firstImage ? [...safeImages, firstImage] : safeImages
  }, [hasMultipleImages, safeImages])

  const [activeIndex, setActiveIndex] = useState(0)
  const [trackIndex, setTrackIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [transitionEnabled, setTransitionEnabled] = useState(true)

  const visibleIndex =
    safeImages.length > 0 ? Math.min(activeIndex, safeImages.length - 1) : 0

  const maxTrackIndex = Math.max(sliderImages.length - 1, 0)

  const safeTrackIndex = Math.min(Math.max(trackIndex, 0), maxTrackIndex)
  const isLoopResetting = hasMultipleImages && trackIndex === loopCloneIndex

  const clearLoopResetTimeout = useCallback(() => {
    if (loopResetTimeoutRef.current === null) return

    window.clearTimeout(loopResetTimeoutRef.current)
    loopResetTimeoutRef.current = null
  }, [])

  const restoreTransitionAfterJump = useCallback(() => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setTransitionEnabled(true)
      })
    })
  }, [])

  const resetToRealFirstSlide = useCallback(() => {
    clearLoopResetTimeout()
    setTransitionEnabled(false)
    setTrackIndex(0)
    restoreTransitionAfterJump()
  }, [clearLoopResetTimeout, restoreTransitionAfterJump])

  useEffect(() => {
    clearLoopResetTimeout()
    setActiveIndex(0)
    setTrackIndex(0)
    setDragOffset(0)
    setIsDragging(false)
    setTransitionEnabled(true)

    dragRef.current = {
      isActive: false,
      startX: 0,
      lastOffset: 0,
      pointerId: -1,
    }

    return clearLoopResetTimeout
  }, [clearLoopResetTimeout, hasMultipleImages, safeImageKey])

  const goToPrevious = useCallback(() => {
    if (!hasMultipleImages || isLoopResetting) return
    clearLoopResetTimeout()

    const nextIndex =
      activeIndex === 0 ? safeImages.length - 1 : activeIndex - 1
    const isLoopJump = activeIndex === 0

    setTransitionEnabled(!isLoopJump)
    setDragOffset(0)
    setActiveIndex(nextIndex)
    setTrackIndex(nextIndex)

    if (isLoopJump) {
      restoreTransitionAfterJump()
    }
  }, [
    activeIndex,
    clearLoopResetTimeout,
    hasMultipleImages,
    isLoopResetting,
    restoreTransitionAfterJump,
    safeImages.length,
  ])

  const goToNext = useCallback(() => {
    if (!hasMultipleImages || isLoopResetting) return
    clearLoopResetTimeout()

    const isForwardLoop = activeIndex === safeImages.length - 1
    const nextIndex = isForwardLoop ? 0 : activeIndex + 1

    setTransitionEnabled(true)
    setDragOffset(0)
    setActiveIndex(nextIndex)
    setTrackIndex(isForwardLoop ? loopCloneIndex : nextIndex)

    if (isForwardLoop) {
      loopResetTimeoutRef.current = window.setTimeout(
        resetToRealFirstSlide,
        SLIDE_TRANSITION_MS + LOOP_RESET_BUFFER_MS,
      )
    }
  }, [
    activeIndex,
    clearLoopResetTimeout,
    hasMultipleImages,
    isLoopResetting,
    loopCloneIndex,
    resetToRealFirstSlide,
    safeImages.length,
  ])

  useEffect(() => {
    if (!hasMultipleImages || isDragging) return

    const timer = window.setInterval(() => {
      goToNext()
    }, AUTOPLAY_INTERVAL_MS)

    return () => {
      window.clearInterval(timer)
    }
  }, [goToNext, hasMultipleImages, isDragging])

  const goToSlide = (index: number) => {
    if (!hasMultipleImages || isLoopResetting) return
    clearLoopResetTimeout()

    setTransitionEnabled(true)
    setDragOffset(0)
    setActiveIndex(index)
    setTrackIndex(index)
  }

  if (safeImages.length === 0) {
    return null
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!hasMultipleImages || isLoopResetting) return
    if (event.pointerType === 'mouse' && event.button !== 0) return
    clearLoopResetTimeout()

    dragRef.current = {
      isActive: true,
      startX: event.clientX,
      lastOffset: 0,
      pointerId: event.pointerId,
    }

    setIsDragging(true)
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
    setTransitionEnabled(true)
    setDragOffset(0)

    try {
      event.currentTarget.releasePointerCapture(pointerId)
    } catch {
      // Browser may release pointer capture automatically.
    }
  }

  const handleTransitionEnd = () => {
    if (!hasMultipleImages || trackIndex !== loopCloneIndex) return

    resetToRealFirstSlide()
  }

  const trackStyle = {
    transform: `translate3d(calc(${-safeTrackIndex * 100}% + ${dragOffset}px), 0, 0)`,
  } as CSSProperties

  return (
    <div className={styles.slider} aria-label="ภาพแนะนำสินค้า">
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
            const isLcpImage = index === 0

            return (
              <div
                key={`${image.src}-${index}`}
                className={styles.slide}
                aria-hidden={index !== safeTrackIndex}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={isLcpImage}
                  loading="eager"
                  fetchPriority={isLcpImage ? 'high' : 'auto'}
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
            disabled={isLoopResetting}
            aria-label="ดูภาพก่อนหน้า"
          >
            <span aria-hidden="true">‹</span>
          </button>

          <button
            type="button"
            className={`${styles.arrow} ${styles.next}`}
            onClick={goToNext}
            disabled={isLoopResetting}
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
                disabled={isLoopResetting}
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
