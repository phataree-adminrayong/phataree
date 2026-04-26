import type { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'ภัทรอารีย์',
  description:
    'PHATAREE ร้านขายสินค้าอุปโภคบริโภคสำหรับบ้าน ร้านค้า สำนักงาน โรงงาน และองค์กร พร้อมข้อมูลสินค้า จุดเด่นของบริษัท ใบรับรอง คำถามที่พบบ่อย และช่องทางติดต่อ',
  alternates: {
    canonical: '/',
  },
}

export default function Page() {
  return <PageClient />
}
