'use client'

import type { AnchorHTMLAttributes, MouseEvent } from 'react'

type CleanHashLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
> & {
  href: string
}

function getRootHash(href: string) {
  if (href.startsWith('#')) return href

  try {
    const url = new URL(href, window.location.origin)

    if (url.origin !== window.location.origin || url.pathname !== '/') {
      return null
    }

    return url.hash || null
  } catch {
    return null
  }
}

function getTargetId(hash: string) {
  const id = hash.slice(1)

  try {
    return decodeURIComponent(id)
  } catch {
    return id
  }
}

export default function CleanHashLink({
  href,
  onClick,
  ...props
}: CleanHashLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }

    if (window.location.pathname !== '/') return

    const hash = getRootHash(href)
    if (!hash) return

    const targetSection = document.getElementById(getTargetId(hash))
    if (!targetSection) return

    event.preventDefault()

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    targetSection.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })

    window.history.replaceState(null, '', '/')
  }

  return <a href={href} onClick={handleClick} {...props} />
}
