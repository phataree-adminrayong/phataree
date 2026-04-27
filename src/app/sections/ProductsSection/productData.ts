export type ProductItem = {
  id: string
  name: string
  shortDescription: string
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

const fallbackImages: ProductImage[] = [
  {
    src: '/images/hero/hero-1.png',
    alt: 'สินค้าอุปโภคบริโภค PHATAREE สำหรับบ้าน ร้านค้า สำนักงาน และองค์กร',
  },
  {
    src: '/images/hero/hero-1.png',
    alt: 'สินค้าใช้ประจำสำหรับธุรกิจและองค์กร PHATAREE',
  },
]

export const productGroups: ProductGroup[] = [
  {
    id: 'toilet-tissue',
    title: 'กระดาษทิชชู่ - ชำระ',
    eyebrow: 'Toilet Tissue',
    description:
      'กลุ่มสินค้า - ห้องน้ำ บ้าน ร้านค้า สำนักงาน และพื้นที่ใช้งานประจำ',
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
        id: 'toilet-tissue-roll-14m',
        name: 'กระดาษทิชชู่ม้วนเล็ก ขนาด 14 เมตร',
        shortDescription: 'เหมาะ - การใช้งานทั่วไปในบ้าน ร้านค้า และสำนักงาน',
      },
      {
        id: 'toilet-tissue-roll-17m',
        name: 'กระดาษทิชชู่ม้วนเล็ก ขนาด 17 เมตร',
        shortDescription:
          'ขนาดยาวขึ้น เหมาะ - การใช้งานต่อเนื่องและช่วยเพิ่มความคุ้มค่า',
      },
      {
        id: 'toilet-tissue-jumbo-roll-280m',
        name: 'กระดาษทิชชู่จัมโบ้โรล ขนาด 280 เมตร',
        shortDescription:
          'เหมาะกับอาคาร สำนักงาน หน่วยงาน และพื้นที่ที่มีการใช้งานสูง',
      },
    ],
  },
  {
    id: 'napkin-tissue',
    title: 'กระดาษทิชชู่ - เช็ดปาก',
    eyebrow: 'Napkin Tissue',
    description: 'เหมาะ - ร้านอาหาร คาเฟ่ งานบริการ และการใช้งานบนโต๊ะอาหาร',
    images: [
      {
        src: '/images/product/napkin/napkin-1.jpg',
        alt: 'กระดาษทิชชู่เช็ดปาก',
      },
    ],
    items: [
      {
        id: 'napkin-tissue',
        name: 'กระดาษทิชชู่เช็ดปาก',
        shortDescription: 'เหมาะ - ร้านอาหาร คาเฟ่ และการใช้งานทั่วไป',
      },
    ],
  },
  {
    id: 'hand-towel-tissue',
    title: 'กระดาษทิชชู่ - เช็ดมือ',
    eyebrow: 'Hand Towel',
    description:
      'สินค้า - ห้องน้ำ จุดล้างมือ และพื้นที่ส่วนกลางที่ต้องการความสะอาด',
    images: [
      {
        src: '/images/product/hand-tissue/hand-tissue-1.jpg',
        alt: 'กระดาษทิชชู่เช็ดมือ PHATAREE',
      },
      {
        src: '/images/hero/hero-1.png',
        alt: 'กระดาษทิชชู่เช็ดมือสำหรับองค์กร PHATAREE',
      },
    ],
    items: [
      {
        id: 'hand-towel-tissue',
        name: 'กระดาษทิชชู่เช็ดมือ',
        shortDescription: 'เหมาะ - ห้องน้ำ จุดล้างมือ และพื้นที่ส่วนกลาง',
      },
    ],
  },
  {
    id: 'facial-tissue',
    title: 'กระดาษทิชชู่ - เช็ดหน้า',
    eyebrow: 'Facial Tissue',
    description:
      'กระดาษเนื้อนุ่ม ใช้งานง่าย เหมาะกับบ้าน สำนักงาน และพื้นที่รับรองลูกค้า',
    images: [
      {
        src: '/images/product/facial-tissue/facial-tissue-1.png',
        alt: 'กระดาษทิชชู่เช็ดหน้า',
      },
    ],
    items: [
      {
        id: 'facial-tissue',
        name: 'กระดาษทิชชู่เช็ดหน้า',
        shortDescription: 'เนื้อนุ่ม ใช้งานสะดวก เหมาะกับการใช้งานประจำวัน',
      },
    ],
  },
  {
    id: 'multipurpose-tissue',
    title: 'กระดาษทิชชู่เอนกประสงค์',
    eyebrow: 'Multipurpose',
    description: 'รองรับงานเช็ด ทำความสะอาด และการใช้งานหลากหลายประเภท',
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
        shortDescription: 'รองรับการใช้งานหลากหลายประเภทในชีวิตประจำวัน',
      },
    ],
  },
  {
    id: 'cleaning-liquid',
    title: 'น้ำยาทำความสะอาด',
    eyebrow: 'Cleaning Liquid',
    description:
      'สินค้าในกลุ่มทำความสะอาด - ครัวเรือน ร้านค้า และสถานประกอบการ',
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
          'เหมาะ - งานล้างทำความสะอาดในครัวเรือนและสถานประกอบการ',
      },
    ],
  },
  {
    id: 'garbage-bag',
    title: 'ถุงขยะ',
    eyebrow: 'Garbage Bag',
    description:
      'ถุงขยะหลายขนาด รองรับการใช้งานตั้งแต่บ้าน ร้านค้า ไปจนถึงองค์กร',
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
        shortDescription: 'เหมาะ - บ้าน ร้านค้า และสำนักงาน',
      },
      {
        id: 'garbage-bag-24x28',
        name: 'ถุงขยะ ขนาด 24 × 28',
        shortDescription: 'เหมาะ - การจัดเก็บขยะประจำวัน',
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
        shortDescription: 'เหมาะ - องค์กร โรงงาน และพื้นที่ใช้งานหนัก',
      },
    ],
  },
  {
    id: '3m-floor-care',
    title: 'ผลิตภัณฑ์ 3M ทำความสะอาดและดูแลพื้น',
    eyebrow: '3M Floor Care',
    description: 'กลุ่มผลิตภัณฑ์ - งานทำความสะอาด ดูแลพื้น และดูแลอาคาร',
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
        shortDescription: 'เหมาะ - การใช้งานในบ้าน ร้านค้า และองค์กร',
      },
      {
        id: '3m-dishwashing-liquid',
        name: 'น้ำยาล้างจาน',
        shortDescription: 'ผลิตภัณฑ์ในกลุ่ม 3M  - งานทำความสะอาดทั่วไป',
      },
      {
        id: '3m-bathroom-cleaner',
        name: 'น้ำยาล้างห้องน้ำ',
        shortDescription: 'เหมาะ - การดูแลความสะอาดในห้องน้ำและอาคาร',
      },
      {
        id: '3m-detergent',
        name: 'ผงซักฟอก',
        shortDescription: ' - งานซักและทำความสะอาดทั่วไป',
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
    title: 'เกลือ',
    eyebrow: 'Salt',
    description: 'สินค้าเกลือ - การใช้งานตามความต้องการของลูกค้า',
    images: [
      {
        src: '/images/product/salt/salt-1.png',
        alt: 'เกลือ',
      },
    ],
    items: [
      {
        id: 'salt',
        name: 'เกลือ',
        shortDescription: 'รองรับการใช้งานตามประเภทสินค้าที่ลูกค้าต้องการ',
      },
    ],
  },
]
