// src/app/contact/ContactsBox/ContactsBox.tsx
import Image from 'next/image'
import styles from './ContactsBox.module.css'

type ContactsBoxProps = {
  title?: string
  lineUrl?: string
  facebookUrl?: string
  fastworkUrl?: string
  tiktokUrl?: string
  instagramUrl?: string
  phone?: string
  className?: string
}

export default function ContactsBox({
  title = 'Quick contact',
  lineUrl = 'https://lin.ee/hgKZAHm',
  facebookUrl = 'https://www.facebook.com/profile.php?id=61580630981781',
  tiktokUrl = '',
  instagramUrl = '',
  phone = '0936661370',
  className = '',
}: ContactsBoxProps) {
  return (
    <div
      className={`${styles.contactBar} ${className}`}
      aria-label={title}
      title={title}
    >
      <a
        className={styles.contactIcon}
        href={lineUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="LINE"
        title="LINE"
      >
        <Image src="/icons/LINE.png" alt="LINE" width={96} height={96} />
      </a>

      <a
        className={styles.contactIcon}
        href={facebookUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        title="Facebook"
      >
        <Image
          src="/icons/Facebook.png"
          alt="Facebook"
          width={96}
          height={96}
        />
      </a>

      <a
        className={styles.contactIcon}
        href={instagramUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        title="Instagram"
      >
        <Image src="/icons/IG.svg" alt="Instagram" width={96} height={96} />
      </a>

      <a
        className={styles.contactIcon}
        href={tiktokUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="TikTok"
        title="TikTok"
      >
        <Image src="/icons/TikTok.png" alt="TikTok" width={96} height={96} />
      </a>

      <a
        className={styles.contactIcon}
        href={`tel:${phone}`}
        aria-label="Phone"
        title="Call"
      >
        <Image
          src="/icons/Phone.png"
          alt="Phone"
          width={96}
          height={96}
          className={styles.iconPhone}
        />
      </a>
    </div>
  )
}
