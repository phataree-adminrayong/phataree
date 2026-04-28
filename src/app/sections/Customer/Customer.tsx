import Image from 'next/image'
import styles from './Customer.module.css'

type CustomerItem = {
  id: string
  image: string
  name: string
}

const customers: CustomerItem[] = Array.from({ length: 14 }, (_, index) => {
  const number = index + 1

  return {
    id: `customer-${number}`,
    image: `/images/customer/customer-${number}.jpg`,
    name: `ลูกค้า PHATAREE ลำดับที่ ${number}`,
  }
})

export default function Customer() {
  return (
    <section id="customer" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <p className={styles.kicker}>OUR CUSTOMERS</p>

          <h2 className={styles.title}>ลูกค้าของเรา</h2>

          <p className={styles.desc}>
            PHATAREE ได้รับความไว้วางใจจากลูกค้าหลากหลายกลุ่ม ทั้งร้านอาหาร โรงแรม
            สำนักงาน โรงงาน และธุรกิจที่ต้องการสินค้าอุปโภคบริโภคสำหรับการใช้งานอย่างต่อเนื่อง
          </p>
        </div>

        <div className={styles.panel}>
          <div className={styles.grid} aria-label="รายชื่อลูกค้าของ PHATAREE">
            {customers.map((customer) => (
              <article key={customer.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={customer.image}
                    alt={customer.name}
                    fill
                    sizes="(max-width: 520px) 50vw, (max-width: 1024px) 25vw, 14vw"
                    className={styles.image}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
