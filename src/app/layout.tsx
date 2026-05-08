import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import '@/styles/globals.css'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'

const siteUrl = 'https://www.phataree.com'
const siteName = 'PHATAREE'
const brandName = 'ภัทรอารีย์'
const logoPath = '/PATAREE_LOGO.svg'
const ogImage = '/images/hero/hero-1.png'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'PHATAREE | ภัทรอารีย์ จำหน่ายสินค้าอุปโภคบริโภคในจังหวัดระยอง',
    template: `%s | ${siteName}`,
  },

  description:
    'ภัทรอารีย์ จังหวัดระยอง จำหน่ายสินค้าอุปโภคบริโภคสำหรับโรงงาน สำนักงาน ร้านค้า โรงแรม ร้านอาหาร และองค์กร ครบทั้งกระดาษทิชชู่ ถุงขยะ น้ำยาทำความสะอาด เกลือ และผลิตภัณฑ์ 3M พร้อมบริการขอใบเสนอราคา',

  keywords: [
    'PHATAREE',
    'ภัทรอารีย์',
    'ภัทรอารีย์ ระยอง',
    'สินค้าอุปโภคบริโภค ระยอง',
    'ร้านขายสินค้าอุปโภคบริโภค ระยอง',
    'ขายส่งสินค้าอุปโภคบริโภค ระยอง',
    'ของใช้โรงงาน ระยอง',
    'ของใช้สำนักงาน ระยอง',
    'ของใช้ร้านอาหาร ระยอง',
    'ของใช้โรงแรม ระยอง',
    'กระดาษทิชชู่ ระยอง',
    'ขายกระดาษทิชชู่ ระยอง',
    'กระดาษทิชชู่ม้วนเล็ก ระยอง',
    'กระดาษทิชชู่จัมโบ้โรล ระยอง',
    'กระดาษทิชชู่เช็ดปาก ระยอง',
    'กระดาษทิชชู่เช็ดมือ ระยอง',
    'กระดาษทิชชู่เช็ดหน้า ระยอง',
    'กระดาษทิชชู่เอนกประสงค์ ระยอง',
    'ถุงขยะ ระยอง',
    'ขายถุงขยะ ระยอง',
    'น้ำยาทำความสะอาด ระยอง',
    'น้ำยาล้างจาน ระยอง',
    'ผลิตภัณฑ์ 3M ระยอง',
    'เกลือ ระยอง',
    'ขอใบเสนอราคา สินค้าอุปโภคบริโภค',
    'จัดส่งสินค้าอุปโภคบริโภค ระยอง',
  ],

  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: 'business',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: siteUrl,
    siteName,
    title: 'PHATAREE | ภัทรอารีย์ สินค้าอุปโภคบริโภคสำหรับธุรกิจในจังหวัดระยอง',
    description:
      'จำหน่ายสินค้าอุปโภคบริโภคสำหรับโรงงาน สำนักงาน ร้านค้า โรงแรม ร้านอาหาร และองค์กรในจังหวัดระยอง ครบทั้งกระดาษทิชชู่ ถุงขยะ น้ำยาทำความสะอาด เกลือ และผลิตภัณฑ์ 3M',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'PHATAREE ภัทรอารีย์ จำหน่ายสินค้าอุปโภคบริโภคในจังหวัดระยอง',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'PHATAREE | ภัทรอารีย์ สินค้าอุปโภคบริโภค ระยอง',
    description:
      'จำหน่ายกระดาษทิชชู่ ถุงขยะ น้ำยาทำความสะอาด เกลือ และผลิตภัณฑ์ 3M สำหรับโรงงาน สำนักงาน ร้านค้า โรงแรม ร้านอาหาร และองค์กรในจังหวัดระยอง',
    images: [ogImage],
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

  other: {
    'geo.region': 'TH-21',
    'geo.placename': 'Rayong',
    'business:contact_data:locality': 'Rayong',
    'business:contact_data:region': 'Rayong',
    'business:contact_data:country_name': 'Thailand',
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
  name: siteName,
  alternateName: brandName,
  url: siteUrl,
  logo: `${siteUrl}${logoPath}`,
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'จังหวัดระยอง',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      areaServed: 'TH-21',
      availableLanguage: ['Thai'],
    },
  ],
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: `${siteName} ${brandName}`,
  alternateName: brandName,
  url: siteUrl,
  image: `${siteUrl}${ogImage}`,
  logo: `${siteUrl}${logoPath}`,
  description:
    'ภัทรอารีย์ จังหวัดระยอง จำหน่ายสินค้าอุปโภคบริโภคสำหรับโรงงาน สำนักงาน ร้านค้า โรงแรม ร้านอาหาร และองค์กร',
  priceRange: '฿฿',
  areaServed: [
    {
      '@type': 'AdministrativeArea',
      name: 'จังหวัดระยอง',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rayong',
    addressRegion: 'Rayong',
    addressCountry: 'TH',
  },
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'กระดาษทิชชู่',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'ถุงขยะ',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'น้ำยาทำความสะอาด',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'ผลิตภัณฑ์ 3M',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'เกลือ',
      },
    },
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  alternateName: brandName,
  url: siteUrl,
  inLanguage: 'th-TH',
  description:
    'เว็บไซต์ภัทรอารีย์ จำหน่ายสินค้าอุปโภคบริโภคสำหรับธุรกิจและองค์กรในจังหวัดระยอง',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
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
            __html: JSON.stringify(localBusinessJsonLd),
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
