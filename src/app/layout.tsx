import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.phataree.com'),
  title: {
    default:
      'PHATAREE | ภัทรอารีย์ ร้านขายสินค้าอุปโภคบริโภค และสินค้าใช้ในองค์กร',
    template: '%s | PHATAREE',
  },
  description:
    'PHATAREE เว็บไซต์ร้านขายสินค้าอุปโภคบริโภคสำหรับบ้าน ร้านค้า สำนักงาน โรงงาน และองค์กร รวมสินค้ากระดาษทิชชู ถุงขยะ น้ำยาทำความสะอาด เกลือ และผลิตภัณฑ์เพื่อการใช้งานประจำวัน คุณภาพดี สั่งซื้อสะดวก พร้อมขอใบเสนอราคาได้ง่าย',
  keywords: [
    'PHATAREE',
    'ภัทรอารีย์',
    'สินค้าอุปโภคบริโภค',
    'ร้านขายสินค้าอุปโภคบริโภค',
    'ขายกระดาษทิชชู',
    'กระดาษทิชชูม้วนเล็ก',
    'จัมโบ้โรล',
    'กระดาษเช็ดปาก',
    'กระดาษเช็ดมือ',
    'กระดาษเช็ดหน้า',
    'กระดาษทิชชูเอนกประสงค์',
    'น้ำยาล้างจาน',
    'น้ำยาทำความสะอาด',
    'ถุงขยะ',
    'ผลิตภัณฑ์ 3M',
    'เกลือ',
    'ขอใบเสนอราคา',
    'ร้านขายของใช้สำนักงาน',
    'ร้านขายของใช้โรงงาน',
  ],
  applicationName: 'PHATAREE',
  authors: [{ name: 'PHATAREE' }],
  creator: 'PHATAREE',
  publisher: 'PHATAREE',
  category: 'business',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://www.phataree.com',
    siteName: 'PHATAREE',
    title:
      'PHATAREE | ภัทรอารีย์ ร้านขายสินค้าอุปโภคบริโภค และสินค้าใช้ในองค์กร',
    description:
      'รวมสินค้าอุปโภคบริโภค กระดาษทิชชู ถุงขยะ น้ำยาทำความสะอาด ผลิตภัณฑ์ 3M และสินค้าใช้ประจำวันสำหรับบ้าน ร้านค้า สำนักงาน และองค์กร',
    images: [
      {
        url: '/images/og/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'PHATAREE ร้านขายสินค้าอุปโภคบริโภค',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PHATAREE | ภัทรอารีย์ ร้านขายสินค้าอุปโภคบริโภค',
    description:
      'รวมสินค้าอุปโภคบริโภค กระดาษทิชชู ถุงขยะ น้ำยาทำความสะอาด ผลิตภัณฑ์ 3M และสินค้าใช้ประจำวันสำหรับบ้าน ร้านค้า สำนักงาน และองค์กร',
    images: ['/images/og/og-home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f8fbf5',
  colorScheme: 'light',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PHATAREE',
  url: 'https://www.phataree.com',
  logo: 'https://www.phataree.com/logo.svg',
  sameAs: [],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: ['Thai', 'English'],
    },
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PHATAREE',
  url: 'https://www.phataree.com',
  inLanguage: 'th-TH',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
