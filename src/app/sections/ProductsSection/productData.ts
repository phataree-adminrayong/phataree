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
      'กระดาษชำระสำหรับบ้าน ร้านค้า สำนักงาน อาคาร และพื้นที่ใช้งานประจำ',
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
        id: 'cleancare-standard-roll-2ply-24rolls-14m',
        name: 'CLEANCARE กระดาษชำระแพค 24 ม้วน หนา 2 ชั้น',
        shortDescription: 'กระดาษชำระม้วนเล็ก สำหรับบ้าน ร้านค้า และสำนักงาน',
        specs: {
          brand: 'CLEANCARE',
          ply: 2,
          lengthMeter: 14,
        },
      },
      {
        id: 'livi-standard-roll-2ply-24rolls-17m',
        name: 'LIVI กระดาษชำระแพค 24 ม้วน หนา 2 ชั้น',
        shortDescription: 'กระดาษชำระม้วนเล็ก เหมาะกับพื้นที่ใช้งานประจำ',
        specs: {
          brand: 'LIVI',
          ply: 2,
          lengthMeter: 17,
        },
      },
      {
        id: 'livi-hbt-2ply-250sheets',
        name: 'LIVI กระดาษชำระ HBT หนา 2 ชั้น 250 แผ่น',
        shortDescription: 'กระดาษชำระแบบแผ่น เหมาะกับห้องน้ำและพื้นที่บริการ',
        specs: {
          brand: 'LIVI',
          ply: 2,
          sheetsPerPack: 250,
        },
      },
      {
        id: 'livi-jrt-1ply-600m',
        name: 'LIVI กระดาษชำระ JRT ม้วนใหญ่ หนา 1 ชั้น ยาว 600 เมตร',
        shortDescription: 'จัมโบ้โรลความยาวสูง เหมาะกับอาคารและองค์กร',
        specs: {
          brand: 'LIVI',
          ply: 1,
          lengthMeter: 600,
        },
      },
      {
        id: 'livi-jrt-2ply-280m',
        name: 'LIVI กระดาษชำระม้วนใหญ่ หนา 2 ชั้น ยาว 280 เมตร',
        shortDescription: 'กระดาษชำระม้วนใหญ่ เหมาะกับสำนักงานและอาคารบริการ',
        specs: {
          brand: 'LIVI',
          ply: 2,
          lengthMeter: 280,
        },
      },
    ],
  },
  {
    id: 'napkin-tissue',
    title: 'กระดาษทิชชู่ - เช็ดปาก',
    eyebrow: 'Napkin Tissue',
    description:
      'กระดาษเช็ดปากสำหรับร้านอาหาร คาเฟ่ โรงแรม งานจัดเลี้ยง และพื้นที่บริการ',
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
        shortDescription: 'กระดาษเช็ดปากแบบป๊อปอัพ หยิบใช้งานง่าย',
        specs: {
          brand: 'LIVI',
          ply: 1,
          sheetsPerPack: 200,
        },
      },
      {
        id: 'livi-cocktail-napkin-brown-500sheets',
        name: 'LIVI กระดาษเช็ดปาก Cocktail Napkin สีน้ำตาล 500 แผ่น',
        shortDescription: 'กระดาษเช็ดปากโทนธรรมชาติ เหมาะกับร้านอาหารและคาเฟ่',
        specs: {
          brand: 'LIVI',
          ply: 1,
          sheetsPerPack: 500,
        },
      },
      {
        id: 'livi-cocktail-napkin-white-500sheets',
        name: 'LIVI กระดาษเช็ดปาก Cocktail Napkin สีขาว 500 แผ่น',
        shortDescription: 'กระดาษเช็ดปากสีขาว ใช้งานง่ายในพื้นที่บริการ',
        specs: {
          brand: 'LIVI',
          ply: 1,
          sheetsPerPack: 500,
        },
      },
      {
        id: 'livi-napkin-brown-200sheets',
        name: 'LIVI กระดาษเช็ดปาก Napkin สีน้ำตาล 200 แผ่น',
        shortDescription: 'กระดาษแนพกิ้นสีน้ำตาล สำหรับร้านอาหารและงานบริการ',
        specs: {
          brand: 'LIVI',
          ply: 1,
          sheetsPerPack: 200,
        },
      },
      {
        id: 'livi-napkin-white-200sheets',
        name: 'LIVI กระดาษเช็ดปาก Napkin สีขาว 200 แผ่น',
        shortDescription: 'กระดาษแนพกิ้นสีขาว สำหรับร้านอาหารและงานจัดเลี้ยง',
        specs: {
          brand: 'LIVI',
          ply: 1,
          sheetsPerPack: 200,
        },
      },
    ],
  },
  {
    id: 'hand-towel-tissue',
    title: 'กระดาษทิชชู่ - เช็ดมือ',
    eyebrow: 'Hand Towel',
    description:
      'กระดาษเช็ดมือสำหรับห้องน้ำ จุดล้างมือ สำนักงาน โรงงาน และพื้นที่ส่วนกลาง',
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
        shortDescription: 'กระดาษเช็ดมือแบบม้วน เหมาะกับพื้นที่ใช้งานต่อเนื่อง',
        specs: {
          brand: 'LIVI',
          ply: 1,
          lengthMeter: 200,
        },
      },
      {
        id: 'livi-interfold-mfold-1ply-250sheets',
        name: 'LIVI กระดาษเช็ดมือพับต่อเนื่อง M-Fold หนา 1 ชั้น 250 แผ่น',
        shortDescription: 'กระดาษเช็ดมือพับต่อเนื่อง สำหรับจุดล้างมือทั่วไป',
        specs: {
          brand: 'LIVI',
          ply: 1,
          sheetsPerPack: 250,
        },
      },
      {
        id: 'livi-interfold-lfold-2ply-250sheets',
        name: 'LIVI กระดาษเช็ดมือพับต่อเนื่อง L-Fold หนา 2 ชั้น 250 แผ่น',
        shortDescription:
          'กระดาษเช็ดมือพับต่อเนื่อง เนื้อหนาขึ้นสำหรับงานบริการ',
        specs: {
          brand: 'LIVI',
          ply: 2,
          sheetsPerPack: 250,
        },
      },
      {
        id: 'livi-interfold-lfold-1ply-300sheets',
        name: 'LIVI กระดาษเช็ดมือพับต่อเนื่อง L-Fold หนา 1 ชั้น 300 แผ่น',
        shortDescription:
          'กระดาษเช็ดมือพับต่อเนื่อง จำนวนแผ่นมาก ใช้งานคุ้มค่า',
        specs: {
          brand: 'LIVI',
          ply: 1,
          sheetsPerPack: 300,
        },
      },
    ],
  },
  {
    id: 'facial-tissue',
    title: 'กระดาษทิชชู่ - เช็ดหน้า',
    eyebrow: 'Facial Tissue',
    description:
      'กระดาษเช็ดหน้าสำหรับบ้าน สำนักงาน โรงแรม ห้องพัก และพื้นที่รับรองลูกค้า',
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
        shortDescription: 'กระดาษเช็ดหน้าชนิดเติม เหมาะกับบ้านและสำนักงาน',
        specs: {
          brand: 'LIVI',
          ply: 2,
          sheetsPerPack: 200,
        },
      },
      {
        id: 'livi-facial-tissue-box-60sheets',
        name: 'LIVI กระดาษเช็ดหน้า 60 แผ่น หนา 2 ชั้น แบบกล่อง',
        shortDescription: 'กระดาษเช็ดหน้าแบบกล่อง เหมาะกับห้องพักและจุดรับรอง',
        specs: {
          brand: 'LIVI',
          ply: 2,
          sheetsPerPack: 60,
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
      'ถุงขยะหลายขนาด รองรับการใช้งานตั้งแต่บ้าน ร้านค้า ไปจนถึงระดับองค์กร',
    images: [
      {
        src: '/images/product/garbage-bags/garbage-bags-1.png',
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
          'เหมาะกับอุตสาหกรรมสิ่งทอและย้อมผ้า ระบบกรองน้ำ อุตสาหกรรมอาหาร อุตสาหกรรมเคมี และการผสมในอาหารสัตว์',
        specs: {
          purity: '99.90%',
          size: '25 กก.',
        },
      },
      {
        id: 'salt-general-9750-25kg',
        name: 'TRS เกลือบริสุทธิ์ ทั่วไป (สีส้ม)',
        shortDescription:
          'เหมาะกับอุตสาหกรรมน้ำมันปาล์ม ล้างเรซิ่น ล้างตะกรันในระบบบอยเลอร์ อุตสาหกรรมอาหาร การปรุงรส และการถนอมอาหาร',
        specs: {
          purity: '97.50%',
          size: '25 กก. / 50 กก.',
        },
      },
      {
        id: 'salt-pool-chemical-9999-25kg',
        name: 'TRS เกลือบริสุทธิ์ สระว่ายน้ำ (สีน้ำเงิน)',
        shortDescription:
          'เหมาะกับสระว่ายน้ำระบบเกลือ งานย้อมผ้า ฟอกหนัง อุตสาหกรรมเคมี และเครื่องปรุงรส',
        specs: {
          purity: '99.99%',
          size: '25 กก. / 50 กก.',
        },
      },
      {
        id: 'salt-wastewater-food-9750-50kg',
        name: 'TRS เกลือบริสุทธิ์ เสริมไอโอดีน ชื้นกว่า (สีแดง)',
        shortDescription:
          'เหมาะกับอุตสาหกรรมบำบัดน้ำเสีย อุตสาหกรรมอาหาร สระว่ายน้ำระบบเกลือ ระบบกรองน้ำ งานย้อมสิ่งทอ และอาหารสัตว์',
        specs: {
          purity: '97.50%',
          size: '50 กก.',
        },
      },
      {
        id: 'salt-iodized-dry-9999-50kg',
        name: 'TRS เกลือบริสุทธิ์ เสริมไอโอดีน ไม่ชื้น (สีเขียว)',
        shortDescription:
          'เหมาะกับการปรุงอาหาร ร้านอาหาร ภัตตาคาร ครัวเรือน อุตสาหกรรมอาหาร การถนอมอาหาร และสระว่ายน้ำระบบเกลือ',
        specs: {
          purity: '99.99%',
          size: '50 กก.',
        },
      },
    ],
  },
]
