import type { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'PHATAREE | ภัทรอารีย์',
  description:
    'PHATAREE ร้านขายสินค้าอุปโภคบริโภคสำหรับร้านอาหาร ร้านค้า สำนักงาน โรงงาน และองค์กร พร้อมข้อมูลสินค้า ใบรับรอง',
  alternates: {
    canonical: '/',
  },
}

export default function Page() {
  return <PageClient />
}
