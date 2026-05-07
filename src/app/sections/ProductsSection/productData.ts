export type ProductPriceTier = {
  rate500Kg: number
  rate250Kg: number
  rateBelow250Kg: number
}

export type ProductItemSpec = {
  purity?: string
  size?: string
  priceTier?: ProductPriceTier
  usage?: string[]
  note?: string
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
        shortDescription: 'เหมาะกับการใช้งานทั่วไปในบ้าน ร้านค้า และสำนักงาน',
      },
      {
        id: 'toilet-tissue-roll-17m',
        name: 'กระดาษทิชชู่ม้วนเล็ก ขนาด 17 เมตร',
        shortDescription:
          'ขนาดยาวขึ้น เหมาะกับการใช้งานต่อเนื่องและช่วยเพิ่มความคุ้มค่า',
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
    description: 'เหมาะกับร้านอาหาร คาเฟ่ งานบริการ และการใช้งานบนโต๊ะอาหาร',
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
        id: 'napkin-tissue',
        name: 'กระดาษทิชชู่เช็ดปาก',
        shortDescription: 'เหมาะกับร้านอาหาร คาเฟ่ และการใช้งานทั่วไป',
      },
    ],
  },
  {
    id: 'hand-towel-tissue',
    title: 'กระดาษทิชชู่ - เช็ดมือ',
    eyebrow: 'Hand Towel',
    description:
      'สินค้าสำหรับห้องน้ำ จุดล้างมือ และพื้นที่ส่วนกลางที่ต้องการความสะอาด',
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
        id: 'hand-towel-tissue',
        name: 'กระดาษทิชชู่เช็ดมือ',
        shortDescription: 'เหมาะกับห้องน้ำ จุดล้างมือ และพื้นที่ส่วนกลาง',
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
          'เหมาะกับงานล้างทำความสะอาดในครัวเรือนและสถานประกอบการ',
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
        src: '/images/product/salt/salt-1.jpg',
        alt: 'TRS Refined Salt แบบแห้ง ขนาด 25 กิโลกรัม',
      },
      {
        src: '/images/product/salt/salt-2.png',
        alt: 'TRS Refined Salt แบบชื้น ขนาด 25 กิโลกรัม',
      },
      {
        src: '/images/product/salt/salt-3.jpg',
        alt: 'TRS Refined Salt เสริมไอโอดีน ขนาด 50 กิโลกรัม',
      },
      {
        src: '/images/product/salt/salt-4.jpg',
        alt: 'TRS Pool Salt เกลือสำหรับสระว่ายน้ำ ขนาด 25 กิโลกรัม',
      },
    ],
    items: [
      {
        id: 'salt-factory-9990-25kg',
        name: 'เกลือบริสุทธิ์ / โรงงาน 99.90%',
        shortDescription:
          'ขนาด 25 กก. เหมาะกับอุตสาหกรรมน้ำมันปาล์ม ล้างเรซิน ล้างตะกรันในระบบบอยเลอร์ และอุตสาหกรรมอาหาร',
        specs: {
          purity: '99.90%',
          size: '25 กก.',
          priceTier: {
            rate500Kg: 250,
            rate250Kg: 270,
            rateBelow250Kg: 300,
          },
          usage: [
            'อุตสาหกรรมน้ำมันปาล์ม',
            'ล้างเรซิน',
            'ล้างตะกรันในระบบบอยเลอร์',
            'อุตสาหกรรมอาหาร',
            'ปรุงรสและถนอมอาหาร',
          ],
          note: 'ราคาขายไม่รวม VAT',
        },
      },
      {
        id: 'salt-general-9750-25kg',
        name: 'เกลือบริสุทธิ์ / ทั่วไป 97.50%',
        shortDescription:
          'ขนาด 25 กก. เหมาะกับงานทั่วไป อุตสาหกรรมน้ำมันปาล์ม ล้างเรซิน ระบบบอยเลอร์ และอุตสาหกรรมอาหาร',
        specs: {
          purity: '97.50%',
          size: '25 กก.',
          priceTier: {
            rate500Kg: 170,
            rate250Kg: 200,
            rateBelow250Kg: 220,
          },
          usage: [
            'งานทั่วไป',
            'อุตสาหกรรมน้ำมันปาล์ม',
            'ล้างเรซิน',
            'ล้างตะกรันในระบบบอยเลอร์',
            'อุตสาหกรรมอาหาร',
            'ปรุงรสและถนอมอาหาร',
          ],
          note: 'ราคาขายไม่รวม VAT',
        },
      },
      {
        id: 'salt-textile-water-filter-9750-50kg',
        name: 'เกลือบริสุทธิ์ 97.50%',
        shortDescription:
          'ขนาด 50 กก. เหมาะกับอุตสาหกรรมสิ่งทอ ย้อมผ้า ระบบกรองน้ำ อุตสาหกรรมอาหาร เคมี และอาหารสัตว์',
        specs: {
          purity: '97.50%',
          size: '50 กก.',
          priceTier: {
            rate500Kg: 330,
            rate250Kg: 350,
            rateBelow250Kg: 380,
          },
          usage: [
            'อุตสาหกรรมสิ่งทอและย้อมผ้า',
            'ช่วยให้สีจับเส้นใยผ้าได้ดี',
            'ระบบกรองน้ำ',
            'ล้างกรองเรซิน',
            'อุตสาหกรรมอาหารและเคมี',
            'ผสมในอาหารสัตว์',
          ],
          note: 'ราคาขายไม่รวม VAT',
        },
      },
      {
        id: 'salt-pool-chemical-9999-25kg',
        name: 'เกลือบริสุทธิ์ 99.99%',
        shortDescription:
          'ขนาด 25 กก. เหมาะกับสระว่ายน้ำ ย้อมผ้า ฟอกหนัง อุตสาหกรรมเคมี และเครื่องปรุงรส',
        specs: {
          purity: '99.99%',
          size: '25 กก.',
          priceTier: {
            rate500Kg: 220,
            rate250Kg: 240,
            rateBelow250Kg: 270,
          },
          usage: [
            'สระว่ายน้ำ',
            'ช่วยให้น้ำใส',
            'อ่อนโยนต่อผิวและดวงตา',
            'ย้อมผ้า',
            'ฟอกหนัง',
            'อุตสาหกรรมเคมี',
            'เครื่องปรุงรส',
          ],
          note: 'ราคาขายไม่รวม VAT',
        },
      },
      {
        id: 'salt-pool-system-9999-50kg',
        name: 'เกลือบริสุทธิ์ 99.99%',
        shortDescription:
          'ขนาด 50 กก. เหมาะกับสระว่ายน้ำระบบเกลือ ช่วยให้น้ำใส ไม่ทิ้งคราบตะกอน และใช้ในงานอุตสาหกรรม',
        specs: {
          purity: '99.99%',
          size: '50 กก.',
          priceTier: {
            rate500Kg: 420,
            rate250Kg: 440,
            rateBelow250Kg: 470,
          },
          usage: [
            'สระว่ายน้ำระบบเกลือ',
            'ช่วยให้น้ำใส',
            'อ่อนโยนต่อผิว ดวงตา และเส้นผม',
            'ไม่ทิ้งคราบตะกอน',
            'ย้อมผ้า',
            'ฟอกหนัง',
            'อุตสาหกรรมเคมี',
            'เครื่องปรุงรส',
          ],
          note: 'ราคาขายไม่รวม VAT',
        },
      },
      {
        id: 'salt-wastewater-food-9750-50kg',
        name: 'เกลือบริสุทธิ์ 97.50%',
        shortDescription:
          'ขนาด 50 กก. เหมาะกับงานบำบัดน้ำเสีย อุตสาหกรรมอาหาร สระว่ายน้ำระบบเกลือ ระบบกรองน้ำ สิ่งทอ และอาหารสัตว์',
        specs: {
          purity: '97.50%',
          size: '50 กก.',
          priceTier: {
            rate500Kg: 320,
            rate250Kg: 340,
            rateBelow250Kg: 370,
          },
          usage: [
            'อุตสาหกรรมบำบัดน้ำเสีย',
            'อุตสาหกรรมอาหาร',
            'บริโภคและถนอมอาหาร',
            'สระว่ายน้ำระบบเกลือ',
            'ระบบกรองน้ำ',
            'ย้อมสิ่งทอ',
            'อาหารสัตว์',
          ],
          note: 'ราคาขายไม่รวม VAT',
        },
      },
      {
        id: 'salt-iodized-dry-9999-50kg',
        name: 'เกลือบริสุทธิ์ 99.99% เสริมไอโอดีน / ไม่ชื้น',
        shortDescription:
          'ขนาด 50 กก. เหมาะกับร้านอาหาร ภัตตาคาร ครัวเรือน อุตสาหกรรมอาหาร ถนอมอาหาร และงานระบบสระว่ายน้ำ',
        specs: {
          purity: '99.99%',
          size: '50 กก.',
          priceTier: {
            rate500Kg: 450,
            rate250Kg: 470,
            rateBelow250Kg: 500,
          },
          usage: [
            'ปรุงอาหาร',
            'ร้านอาหาร',
            'ภัตตาคาร',
            'ครัวเรือน',
            'อุตสาหกรรมอาหาร',
            'ถนอมอาหาร',
            'สระว่ายน้ำระบบเกลือ',
            'ล้างสาร',
          ],
          note: 'เสริมไอโอดีน / ไม่ชื้น / ราคาขายไม่รวม VAT',
        },
      },
    ],
  },
]
