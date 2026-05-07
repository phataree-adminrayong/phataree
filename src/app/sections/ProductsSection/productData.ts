export type ProductPriceTier = {
  rate500Kg: number
  rate250Kg: number
  rateBelow250Kg: number
}

export type ProductItemSpec = {
  codeGut?: string
  brand?: string
  format?: string
  sheetSize?: string
  rollSize?: string
  ply?: number
  sheetsPerRoll?: number
  sheetsPerPack?: number
  lengthMeter?: number
  rollsPerPack?: number
  packsPerCarton?: number
  rollsPerCarton?: number
  certifications?: string[]

  // Salt only
  purity?: string
  size?: string
  priceTier?: ProductPriceTier
}

export type ProductItem = {
  id: string
  name: string
  shortDescription: string
  specs?: ProductItemSpec
}

export type ProductImage = {
  src: string
  alt: string
}

export type ProductGroup = {
  id: string
  title: string
  eyebrow: string
  description: string
  images: ProductImage[]
  items: ProductItem[]
}

export const productGroups: ProductGroup[] = [
  {
    id: 'toilet-tissue',
    title: 'กระดาษทิชชู่ - ชำระ',
    eyebrow: 'Toilet Tissue',
    description:
      'กระดาษชำระม้วนเล็ก กระดาษชำระแบบแผ่น และกระดาษชำระม้วนใหญ่ สำหรับบ้าน ร้านค้า สำนักงาน อาคาร และองค์กร',
    images: [
      {
        src: '/images/product/toilet-tissue/toilet-tissue-1.jpg',
        alt: 'กระดาษทิชชู่ม้วนเล็ก PHATAREE',
      },
      {
        src: '/images/product/toilet-tissue/toilet-tissue-2.jpg',
        alt: 'กระดาษทิชชู่สำหรับชำระ PHATAREE',
      },
      {
        src: '/images/product/toilet-tissue/toilet-tissue-3.jpg',
        alt: 'กระดาษทิชชู่จัมโบ้โรล PHATAREE',
      },
    ],
    items: [
      {
        id: 'livi-standard-roll-3ply-6rolls-17-7m',
        name: 'LIVI กระดาษชำระแพค 6 ม้วน หนา 3 ชั้น',
        shortDescription:
          'ขนาดแผ่น 10 × 13.5 ซม. จำนวน 132 แผ่น ยาว 17.7 เมตร บรรจุ 6 ม้วนต่อแพค และ 8 แพคต่อลัง',
        specs: {
          codeGut: '69700388',
          brand: 'LIVI',
          format: 'Standard Roll Tissue',
          sheetSize: '10 × 13.5 ซม.',
          ply: 3,
          sheetsPerRoll: 132,
          lengthMeter: 17.7,
          rollsPerPack: 6,
          packsPerCarton: 8,
        },
      },
      {
        id: 'cleancare-standard-roll-2ply-24rolls-14m',
        name: 'CLEANCARE กระดาษชำระแพค 24 ม้วน หนา 2 ชั้น',
        shortDescription:
          'ขนาดแผ่น 9.0 × 10.7 ซม. จำนวน 138 แผ่น ยาว 14 เมตร บรรจุ 24 ม้วนต่อแพค และ 6 แพคต่อลัง',
        specs: {
          codeGut: '69700071',
          brand: 'CLEANCARE',
          format: 'Standard Roll Tissue',
          sheetSize: '9.0 × 10.7 ซม.',
          ply: 2,
          sheetsPerRoll: 138,
          lengthMeter: 14,
          rollsPerPack: 24,
          packsPerCarton: 6,
          certifications: ['Made in Thailand', 'ฉลากเขียว TGL-8/2-19'],
        },
      },
      {
        id: 'livi-standard-roll-2ply-24rolls-17m',
        name: 'LIVI กระดาษชำระแพค 24 ม้วน หนา 2 ชั้น',
        shortDescription:
          'ขนาดแผ่น 10.0 × 10.8 ซม. จำนวน 139 แผ่น ยาว 17 เมตร บรรจุ 24 ม้วนต่อแพค และ 6 แพคต่อลัง',
        specs: {
          codeGut: '69700063',
          brand: 'LIVI',
          format: 'Standard Roll Tissue',
          sheetSize: '10.0 × 10.8 ซม.',
          ply: 2,
          sheetsPerRoll: 139,
          lengthMeter: 17,
          rollsPerPack: 24,
          packsPerCarton: 6,
          certifications: ['Made in Thailand', 'ฉลากเขียว TGL-8/2-19'],
        },
      },
      {
        id: 'livi-hbt-2ply-250sheets',
        name: 'LIVI กระดาษชำระ HBT หนา 2 ชั้น 250 แผ่น',
        shortDescription:
          'กระดาษชำระแบบแผ่น ขนาด 10.0 × 21.0 ซม. ฉีกลาย จำนวน 250 แผ่น บรรจุ 60 แพคต่อลัง',
        specs: {
          codeGut: '69920451',
          brand: 'LIVI',
          format: 'Hygienic Bathroom Tissue',
          sheetSize: '10.0 × 21.0 ซม. ฉีกลาย',
          ply: 2,
          sheetsPerPack: 250,
          packsPerCarton: 60,
        },
      },
      {
        id: 'livi-jrt-2ply-300m-85',
        name: 'LIVI กระดาษชำระ JRT ม้วนใหญ่ หนา 2 ชั้น ยาว 300 เมตร',
        shortDescription:
          'จัมโบ้โรลหน้ากว้าง 8.5 ซม. ยาว 300 เมตร บรรจุ 12 ม้วนต่อลัง เหมาะกับพื้นที่ใช้งานสูง',
        specs: {
          codeGut: '69700129',
          brand: 'LIVI',
          format: 'Jumbo Roll Toilet Tissue',
          rollSize: '8.5 × 300 ม.',
          ply: 2,
          lengthMeter: 300,
          rollsPerCarton: 12,
          certifications: ['Made in Thailand', 'ฉลากเขียว TGL-8/2-19'],
        },
      },
      {
        id: 'livi-jrt-1ply-600m',
        name: 'LIVI กระดาษชำระ JRT ม้วนใหญ่ หนา 1 ชั้น ยาว 600 เมตร',
        shortDescription:
          'จัมโบ้โรลหน้ากว้าง 8.5 ซม. ยาว 600 เมตร บรรจุ 12 ม้วนต่อลัง สำหรับการใช้งานต่อเนื่อง',
        specs: {
          codeGut: '69700128',
          brand: 'LIVI',
          format: 'Jumbo Roll Toilet Tissue',
          rollSize: '8.5 × 600 ม.',
          ply: 1,
          lengthMeter: 600,
          rollsPerCarton: 12,
          certifications: ['Made in Thailand', 'ฉลากเขียว TGL-8/2-19'],
        },
      },
      {
        id: 'livi-jrt-2ply-300m-80',
        name: 'LIVI กระดาษชำระ JRT ม้วนใหญ่ หนา 2 ชั้น ยาว 300 เมตร',
        shortDescription:
          'จัมโบ้โรลหน้ากว้าง 8.0 ซม. ยาว 300 เมตร บรรจุ 12 ม้วนต่อลัง',
        specs: {
          codeGut: '69700301',
          brand: 'LIVI',
          format: 'Jumbo Roll Toilet Tissue',
          rollSize: '8.0 × 300 ม.',
          ply: 2,
          lengthMeter: 300,
          rollsPerCarton: 12,
          certifications: ['Made in Thailand', 'ฉลากเขียว TGL-8/2-19'],
        },
      },
      {
        id: 'livi-jrt-2ply-280m',
        name: 'LIVI กระดาษชำระม้วนใหญ่ หนา 2 ชั้น ยาว 280 เมตร',
        shortDescription:
          'จัมโบ้โรลหน้ากว้าง 8.0 ซม. ยาว 280 เมตร บรรจุ 4 แพคต่อลัง',
        specs: {
          codeGut: '69700372',
          brand: 'LIVI',
          format: 'Jumbo Roll Toilet Tissue',
          rollSize: '8.0 × 280 ม.',
          ply: 2,
          lengthMeter: 280,
          packsPerCarton: 4,
        },
      },
    ],
  },
  {
    id: 'napkin-tissue',
    title: 'กระดาษทิชชู่ - เช็ดปาก',
    eyebrow: 'Napkin Tissue',
    description:
      'กระดาษเช็ดปากแบบป๊อปอัพ ค็อกเทลแนพกิ้น และแนพกิ้น สำหรับร้านอาหาร คาเฟ่ โรงแรม งานจัดเลี้ยง และพื้นที่บริการ',
    images: [
      {
        src: '/images/product/napkin/napkin-1.jpg',
        alt: 'กระดาษทิชชู่เช็ดปาก',
      },
      {
        src: '/images/product/napkin/napkin-2.jpg',
        alt: 'กระดาษทิชชู่เช็ดปาก',
      },
      {
        src: '/images/product/napkin/napkin-3.jpg',
        alt: 'กระดาษทิชชู่เช็ดปาก',
      },
    ],
    items: [
      {
        id: 'livi-pop-up-tissue-1ply-200sheets',
        name: 'LIVI กระดาษเช็ดปาก Pop Up หนา 1 ชั้น 200 แผ่น',
        shortDescription:
          'ขนาด 10.0 × 20.0 ซม. แบบป๊อปอัพ บรรจุ 60 แพคต่อลัง เหมาะสำหรับร้านอาหารและพื้นที่บริการ',
        specs: {
          codeGut: '69700140',
          brand: 'LIVI',
          format: 'Pop Up Tissue',
          sheetSize: '10.0 × 20.0 ซม. ป๊อปอัพ',
          ply: 1,
          sheetsPerPack: 200,
          packsPerCarton: 60,
          certifications: ['Made in Thailand', 'ฉลากเขียว TGL-8/2-19'],
        },
      },
      {
        id: 'livi-cocktail-napkin-brown-500sheets',
        name: 'LIVI กระดาษเช็ดปาก Cocktail Napkin สีน้ำตาล 500 แผ่น',
        shortDescription:
          'ขนาด 30 × 32.5 ซม. หนา 1 ชั้น จำนวน 500 แผ่น บรรจุ 12 แพคต่อลัง',
        specs: {
          codeGut: '69920066',
          brand: 'LIVI',
          format: 'Cocktail Napkin',
          sheetSize: '30 × 32.5 ซม.',
          ply: 1,
          sheetsPerPack: 500,
          packsPerCarton: 12,
        },
      },
      {
        id: 'livi-cocktail-napkin-white-500sheets',
        name: 'LIVI กระดาษเช็ดปาก Cocktail Napkin สีขาว 500 แผ่น',
        shortDescription:
          'ขนาด 30 × 32.5 ซม. หนา 1 ชั้น จำนวน 500 แผ่น บรรจุ 12 แพคต่อลัง',
        specs: {
          codeGut: '69920132',
          brand: 'LIVI',
          format: 'Cocktail Napkin',
          sheetSize: '30 × 32.5 ซม.',
          ply: 1,
          sheetsPerPack: 500,
          packsPerCarton: 12,
        },
      },
      {
        id: 'livi-napkin-brown-200sheets',
        name: 'LIVI กระดาษเช็ดปาก Napkin สีน้ำตาล 200 แผ่น',
        shortDescription:
          'ขนาด 33 × 33 ซม. หนา 1 ชั้น จำนวน 200 แผ่น บรรจุ 20 แพคต่อลัง',
        specs: {
          codeGut: '69700330',
          brand: 'LIVI',
          format: 'Napkin Tissue',
          sheetSize: '33 × 33 ซม.',
          ply: 1,
          sheetsPerPack: 200,
          packsPerCarton: 20,
        },
      },
      {
        id: 'livi-napkin-white-200sheets',
        name: 'LIVI กระดาษเช็ดปาก Napkin สีขาว 200 แผ่น',
        shortDescription:
          'ขนาด 33 × 33 ซม. หนา 1 ชั้น จำนวน 200 แผ่น บรรจุ 20 แพคต่อลัง',
        specs: {
          codeGut: '69700340',
          brand: 'LIVI',
          format: 'Napkin Tissue',
          sheetSize: '33 × 33 ซม.',
          ply: 1,
          sheetsPerPack: 200,
          packsPerCarton: 20,
        },
      },
    ],
  },
  {
    id: 'hand-towel-tissue',
    title: 'กระดาษทิชชู่ - เช็ดมือ',
    eyebrow: 'Hand Towel',
    description:
      'กระดาษเช็ดมือแบบม้วนและแบบแผ่นต่อเนื่อง สำหรับห้องน้ำ จุดล้างมือ สำนักงาน โรงงาน และพื้นที่ส่วนกลาง',
    images: [
      {
        src: '/images/product/hand-tissue/hand-tissue-1.jpg',
        alt: 'กระดาษทิชชู่เช็ดมือ PHATAREE',
      },
      {
        src: '/images/product/hand-tissue/hand-tissue-2.jpg',
        alt: 'กระดาษทิชชู่เช็ดมือ PHATAREE',
      },
      {
        src: '/images/product/hand-tissue/hand-tissue-3.jpg',
        alt: 'กระดาษทิชชู่เช็ดมือ PHATAREE',
      },
    ],
    items: [
      {
        id: 'livi-hand-roll-towel-1ply-200m',
        name: 'LIVI กระดาษเช็ดมือแบบม้วน หนา 1 ชั้น ยาว 200 เมตร',
        shortDescription:
          'กระดาษเช็ดมือแบบม้วน ยาว 200 เมตร บรรจุ 6 ม้วนต่อลัง เหมาะสำหรับจุดล้างมือและพื้นที่ใช้งานต่อเนื่อง',
        specs: {
          codeGut: '69700105',
          brand: 'LIVI',
          format: 'Hand Roll Towel Tissue',
          ply: 1,
          lengthMeter: 200,
          rollsPerCarton: 6,
          certifications: ['Made in Thailand'],
        },
      },
      {
        id: 'livi-interfold-mfold-1ply-250sheets',
        name: 'LIVI กระดาษเช็ดมือพับต่อเนื่อง M-Fold หนา 1 ชั้น 250 แผ่น',
        shortDescription:
          'ขนาด 23.0 × 24.0 ซม. จำนวน 250 แผ่น บรรจุ 16 แพคต่อลัง',
        specs: {
          codeGut: '69910496',
          brand: 'LIVI',
          format: 'Interfold Hand Towel Tissue M-Fold',
          sheetSize: '23.0 × 24.0 ซม.',
          ply: 1,
          sheetsPerPack: 250,
          packsPerCarton: 16,
        },
      },
      {
        id: 'livi-interfold-lfold-2ply-250sheets',
        name: 'LIVI กระดาษเช็ดมือพับต่อเนื่อง L-Fold หนา 2 ชั้น 250 แผ่น',
        shortDescription:
          'ขนาด 24.0 × 21.0 ซม. จำนวน 250 แผ่น บรรจุ 24 แพคต่อลัง',
        specs: {
          codeGut: '69700117',
          brand: 'LIVI',
          format: 'Interfold Hand Towel Tissue L-Fold',
          sheetSize: '24.0 × 21.0 ซม.',
          ply: 2,
          sheetsPerPack: 250,
          packsPerCarton: 24,
          certifications: ['Made in Thailand', 'ฉลากเขียว TGL-8/2-19'],
        },
      },
      {
        id: 'livi-interfold-lfold-1ply-300sheets',
        name: 'LIVI กระดาษเช็ดมือพับต่อเนื่อง L-Fold หนา 1 ชั้น 300 แผ่น',
        shortDescription:
          'ขนาด 22.0 × 21.0 ซม. จำนวน 300 แผ่น บรรจุ 24 แพคต่อลัง',
        specs: {
          codeGut: '69700116',
          brand: 'LIVI',
          format: 'Interfold Hand Towel Tissue L-Fold',
          sheetSize: '22.0 × 21.0 ซม.',
          ply: 1,
          sheetsPerPack: 300,
          packsPerCarton: 24,
          certifications: ['Made in Thailand', 'ฉลากเขียว TGL-8/2-19'],
        },
      },
    ],
  },
  {
    id: 'facial-tissue',
    title: 'กระดาษทิชชู่ - เช็ดหน้า',
    eyebrow: 'Facial Tissue',
    description:
      'กระดาษเช็ดหน้าชนิดเติม สำหรับบ้าน สำนักงาน โรงแรม ห้องพัก และพื้นที่รับรองลูกค้า',
    images: [
      {
        src: '/images/product/facial-tissue/facial-tissue-1.png',
        alt: 'กระดาษทิชชู่เช็ดหน้า',
      },
    ],
    items: [
      {
        id: 'livi-facial-tissue-refill-200sheets',
        name: 'LIVI กระดาษเช็ดหน้า 200 แผ่น หนา 2 ชั้น ชนิดเติม',
        shortDescription:
          'ขนาด 20.0 × 20.75 ซม. จำนวน 200 แผ่น บรรจุ 50 แพคต่อลัง',
        specs: {
          codeGut: '69920441',
          brand: 'LIVI',
          format: 'Facial Tissue Refill',
          sheetSize: '20.0 × 20.75 ซม.',
          ply: 2,
          sheetsPerPack: 200,
          packsPerCarton: 50,
        },
      },
      {
        id: 'livi-facial-tissue-box-60sheets',
        name: 'LIVI กระดาษเช็ดหน้า 60 แผ่น หนา 2 ชั้น แบบกล่อง',
        shortDescription:
          'ขนาด 19.75 × 21 ซม. จำนวน 60 แผ่น บรรจุ 48 กล่องต่อลัง',
        specs: {
          codeGut: '69920452',
          brand: 'LIVI',
          format: 'Facial Tissue Box',
          sheetSize: '19.75 × 21 ซม.',
          ply: 2,
          sheetsPerPack: 60,
          packsPerCarton: 48,
        },
      },
    ],
  },
  {
    id: 'multipurpose-tissue',
    title: 'กระดาษทิชชู่เอนกประสงค์',
    eyebrow: 'Multipurpose',
    description:
      'กลุ่มกระดาษสำหรับงานเช็ด ทำความสะอาด และการใช้งานหลากหลายประเภท',
    images: [
      {
        src: '/images/product/multipurpose-tissue/multipurpose-tissue-1.jpg',
        alt: 'กระดาษทิชชู่เอนกประสงค์ PHATAREE',
      },
      {
        src: '/images/hero/hero-1.png',
        alt: 'กระดาษทิชชู่เอนกประสงค์สำหรับบ้าน ร้านค้า และองค์กร',
      },
    ],
    items: [
      {
        id: 'multipurpose-tissue',
        name: 'กระดาษทิชชู่เอนกประสงค์',
        shortDescription:
          'รองรับงานเช็ด ทำความสะอาด และการใช้งานทั่วไปในบ้าน ร้านค้า และองค์กร',
      },
    ],
  },
  {
    id: 'cleaning-liquid',
    title: 'น้ำยาทำความสะอาด',
    eyebrow: 'Cleaning Liquid',
    description:
      'สินค้าในกลุ่มทำความสะอาดสำหรับครัวเรือน ร้านค้า และสถานประกอบการ',
    images: [
      {
        src: '/images/product/cleaning-solution/cleaning-solution-1.png',
        alt: 'น้ำยาทำความสะอาด',
      },
    ],
    items: [
      {
        id: 'dishwashing-liquid',
        name: 'น้ำยาล้างจาน',
        shortDescription:
          'เหมาะกับงานล้างทำความสะอาดในครัวเรือน ร้านค้า และสถานประกอบการ',
      },
    ],
  },
  {
    id: 'garbage-bag',
    title: 'ถุงขยะ',
    eyebrow: 'Garbage Bag',
    description:
      'ถุงขยะรักษ์โลก ผลิตจากพลาสติกรีไซเคิล 100% เนื้อถุงแน่นหนา เหนียว คุ้มราคา มีหลายขนาด รองรับการใช้งานตั้งแต่บ้าน ร้านค้า ไปจนถึงระดับองค์กร',
    images: [
      {
        src: '/images/product/garbage-bags/garbage-bags-1.png',
        alt: 'ถุงขยะ',
      },
      {
        src: '/images/product/garbage-bags/garbage-bags-2.png',
        alt: 'ถุงขยะ',
      },
    ],
    items: [
      {
        id: 'garbage-bag-18x20',
        name: 'ถุงขยะ ขนาด 18 × 20',
        shortDescription: 'ขนาดกะทัดรัด เหมาะกับการใช้งานทั่วไป',
      },
      {
        id: 'garbage-bag-22x30',
        name: 'ถุงขยะ ขนาด 22 × 30',
        shortDescription: 'เหมาะกับบ้าน ร้านค้า และสำนักงาน',
      },
      {
        id: 'garbage-bag-24x28',
        name: 'ถุงขยะ ขนาด 24 × 28',
        shortDescription: 'เหมาะกับการจัดเก็บขยะประจำวัน',
      },
      {
        id: 'garbage-bag-28x36',
        name: 'ถุงขยะ ขนาด 28 × 36',
        shortDescription: 'ขนาดกลาง รองรับการใช้งานได้หลากหลาย',
      },
      {
        id: 'garbage-bag-30x40',
        name: 'ถุงขยะ ขนาด 30 × 40',
        shortDescription: 'ขนาดใหญ่ เหมาะกับพื้นที่ใช้งานมากขึ้น',
      },
      {
        id: 'garbage-bag-36x45',
        name: 'ถุงขยะ ขนาด 36 × 45',
        shortDescription: 'เหมาะกับองค์กร โรงงาน และพื้นที่ใช้งานหนัก',
      },
    ],
  },
  {
    id: '3m-floor-care',
    title: 'ผลิตภัณฑ์ 3M ทำความสะอาดและดูแลพื้น',
    eyebrow: '3M Floor Care',
    description: 'กลุ่มผลิตภัณฑ์สำหรับงานทำความสะอาด ดูแลพื้น และดูแลอาคาร',
    images: [
      {
        src: '/images/product/3M-products/3M-products-1.png',
        alt: 'ผลิตภัณฑ์ 3M ทำความสะอาดและดูแลพื้น',
      },
    ],
    items: [
      {
        id: '3m-liquid-hand-soap',
        name: 'สบู่เหลวล้างมือ',
        shortDescription: 'เหมาะกับการใช้งานในบ้าน ร้านค้า และองค์กร',
      },
      {
        id: '3m-dishwashing-liquid',
        name: 'น้ำยาล้างจาน',
        shortDescription: 'ผลิตภัณฑ์ในกลุ่ม 3M สำหรับงานทำความสะอาดทั่วไป',
      },
      {
        id: '3m-bathroom-cleaner',
        name: 'น้ำยาล้างห้องน้ำ',
        shortDescription: 'เหมาะกับการดูแลความสะอาดในห้องน้ำและอาคาร',
      },
      {
        id: '3m-detergent',
        name: 'ผงซักฟอก',
        shortDescription: 'เหมาะกับงานซักและทำความสะอาดทั่วไป',
      },
      {
        id: '3m-green-label-products',
        name: 'ผลิตภัณฑ์ 3M ฉลากเขียว',
        shortDescription: 'รองรับงานทำความสะอาดและดูแลพื้นที่ในองค์กร',
      },
    ],
  },
  {
    id: 'salt',
    title: 'เกลือบริสุทธิ์ TRS',
    eyebrow: 'TRS Refined Salt',
    description:
      'เกลือบริสุทธิ์ TRS สำหรับโรงงาน อุตสาหกรรมอาหาร ระบบกรองน้ำ สระว่ายน้ำ งานบำบัดน้ำเสีย และการใช้งานทั่วไป',
    images: [
      {
        src: '/images/product/salt/salt-1.png',
        alt: 'TRS เกลือบริสุทธิ์ โรงงาน',
      },
      {
        src: '/images/product/salt/salt-2.png',
        alt: 'TRS เกลือบริสุทธิ์ ทั่วไป',
      },
      {
        src: '/images/product/salt/salt-3.png',
        alt: 'TRS เกลือบริสุทธิ์ สระว่ายน้ำ',
      },
      {
        src: '/images/product/salt/salt-4.png',
        alt: 'TRS เกลือบริสุทธิ์ เสริมไอโอดีน ชื้นกว่า',
      },
      {
        src: '/images/product/salt/salt-5.png',
        alt: 'TRS เกลือบริสุทธิ์ เสริมไอโอดีน ไม่ชื้น',
      },
    ],
    items: [
      {
        id: 'salt-factory-9990-25kg',
        name: 'TRS เกลือบริสุทธิ์ โรงงาน (สีม่วง)',
        shortDescription:
          'เหมาะกับอุตสาหกรรมสิ่งทอ/ย้อมผ้า สีจับเส้นใยผ้าได้ดี ,ระบบกรองน้ำ ช่วยล้างกรองเรซิ่น ,อุตสาหกรรมอาหารและเคมี ,ผสมในอาหารสัตว์',
        specs: {
          purity: '99.90%',
          size: '25 กก.',
          priceTier: {
            rate500Kg: 250,
            rate250Kg: 270,
            rateBelow250Kg: 300,
          },
        },
      },
      {
        id: 'salt-general-9750-25kg',
        name: 'TRS เกลือบริสุทธิ์ ทั่วไป (สีส้ม)',
        shortDescription:
          'เหมาะกับอุตสาหกรรมน้ำมันปาล์ม ล้างเรซิ่น ล้างตะกรันในระบบบอยเลอร์ และ อุตสาหกรรม อาหาร ใช้ปรุงรส ถนอมอาหาร',
        specs: {
          purity: '97.50%',
          size: '25 กก.',
          priceTier: {
            rate500Kg: 170,
            rate250Kg: 200,
            rateBelow250Kg: 220,
          },
        },
      },
      {
        id: 'salt-textile-water-filter-9750-50kg',
        name: 'TRS เกลือบริสุทธิ์ ทั่วไป (สีส้ม)',
        shortDescription:
          'เหมาะกับอุตสาหกรรมน้ำมันปาล์ม ล้างเรซิ่น ล้างตะกรันในระบบบอยเลอร์ และ อุตสาหกรรม อาหาร ใช้ปรุงรส ถนอมอาหาร',
        specs: {
          purity: '97.50%',
          size: '50 กก.',
          priceTier: {
            rate500Kg: 165,
            rate250Kg: 175,
            rateBelow250Kg: 190,
          },
        },
      },
      {
        id: 'salt-pool-chemical-9999-25kg',
        name: 'TRS เกลือบริสุทธิ์ สระว่ายน้ำ (สีน้ำเงิน)',
        shortDescription:
          'เหมาะกับสระว่ายน้ำระบบเกลือ ทําให้น้ำใส อ่อนโยนต่อผิวและดวงตา ผม ไม่ทิ้งคราบตะกอน ,ย้อมผ้า ฟอกหนัง ,อุตสาหกรรมเคมี ,เครื่องปรุงรส',
        specs: {
          purity: '99.99%',
          size: '25 กก.',
          priceTier: {
            rate500Kg: 220,
            rate250Kg: 240,
            rateBelow250Kg: 270,
          },
        },
      },
      {
        id: 'salt-pool-system-9999-50kg',
        name: 'TRS เกลือบริสุทธิ์ สระว่ายน้ำ (สีน้ำเงิน)',
        shortDescription:
          'เหมาะกับสระว่ายน้ำระบบเกลือ ทําให้น้ำใส อ่อนโยนต่อผิวและดวงตา ผม ไม่ทิ้งคราบตะกอน ,ย้อมผ้า ฟอกหนัง ,อุตสาหกรรมเคมี ,เครื่องปรุงรส',
        specs: {
          purity: '99.99%',
          size: '50 กก.',
          priceTier: {
            rate500Kg: 210,
            rate250Kg: 220,
            rateBelow250Kg: 235,
          },
        },
      },
      {
        id: 'salt-wastewater-food-9750-50kg',
        name: 'TRS เกลือบริสุทธิ์ เสริมไอโอดีน ชื้นกว่า (สีแดง)',
        shortDescription:
          'เหมาะกับอุตสาหกรรมบําบัดน้ำเสีย ,อุตสาหกรรม อาหารบริโภค ถนอมอาหาร ,สระว่ายน้ำระบบเกลือ ระบบกรองน้ำ ,ทั่วไปย้อมสิ่งทอ ,อาหารสัตว์',
        specs: {
          purity: '97.50%',
          size: '50 กก.',
          priceTier: {
            rate500Kg: 320,
            rate250Kg: 340,
            rateBelow250Kg: 370,
          },
        },
      },
      {
        id: 'salt-iodized-dry-9999-50kg',
        name: 'TRS เกลือบริสุทธิ์ เสริมไอโอดีน ไม่ชื้น (สีเขียว)',
        shortDescription:
          'เหมาะกับการปรุงอาหารร้านอาหาร ภัตตาคาร และ ครัวเรือน เสริมไอโอดีน ,อุตสาหกรรมอาหาร ถนนอมอาหาร ,สระว่ายน้ำระบบเกลือ หรือล้างสาร',
        specs: {
          purity: '99.99%',
          size: '50 กก.',
          priceTier: {
            rate500Kg: 450,
            rate250Kg: 470,
            rateBelow250Kg: 500,
          },
        },
      },
    ],
  },
]
