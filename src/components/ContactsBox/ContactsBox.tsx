// src/components/ContactsBox/ContactsBox.tsx
import Image from 'next/image'
import styles from './ContactsBox.module.css'

type ContactsBoxProps = {
  title?: string
  locationUrl?: string
  lineUrl?: string
  facebookUrl?: string
  fastworkUrl?: string
  tiktokUrl?: string
  instagramUrl?: string
  phone?: string
  phone2?: string
  className?: string
}

export default function ContactsBox({
  title = 'Quick contact',
  locationUrl = 'https://maps.app.goo.gl/FsChG1XwbQFoPeMr6',
  lineUrl = 'https://lin.ee/hgKZAHm',
  facebookUrl = 'https://www.facebook.com/profile.php?id=61580630981781',
  tiktokUrl = '',
  instagramUrl = '',
  phone = '0864565165',
  phone2 = '0926394754',
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
        href={locationUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Location"
        title="Location"
      >
        <Image
          src="/icons/Location.png"
          alt="Location"
          width={96}
          height={96}
          style={{
            background: 'white',
            padding: '0.3rem',
          }}
        />
      </a>

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

      <a
        className={styles.contactIcon}
        href={`tel:${phone2}`}
        aria-label="Phone 2"
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
