import Image from 'next/image'
import styles from './GmailButton.module.css'

type GmailComposeOptions = {
  to: string
  subject?: string
  body?: string
}

type GmailButtonProps = {
  href: string
  ariaLabel: string
  className?: string
  size?: 'default' | 'compact'
}

export function buildGmailComposeHref({
  to,
  subject,
  body,
}: GmailComposeOptions) {
  const params = new URLSearchParams({
    fs: '1',
    to,
    view: 'cm',
  })

  if (subject) params.set('su', subject)
  if (body) params.set('body', body)

  return `https://mail.google.com/mail/?${params.toString()}`
}

export default function GmailButton({
  href,
  ariaLabel,
  className = '',
  size = 'default',
}: GmailButtonProps) {
  const sizeClass = size === 'compact' ? styles.compact : styles.default

  return (
    <a
      href={href}
      className={`${styles.button} ${sizeClass} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      title="Gmail"
    >
      <Image
        src="/icons/Gmail.svg"
        alt=""
        width={134}
        height={42}
        className={styles.icon}
      />
    </a>
  )
}
