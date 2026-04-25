import ProductsShowcase from './ProductsShowcase'
import styles from './ProductsSection.module.css'

export default function ProductsSection() {
  return (
    <section id="products" className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <p className={styles.kicker}>OUR PRODUCTS</p>

          <h2 className={styles.title}>รายการสินค้า</h2>

          <p className={styles.desc}>
            ครอบคลุมสินค้าสำหรับการใช้งานประจำวัน ทั้งกระดาษทิชชู ถุงขยะ
            น้ำยาทำความสะอาด ผลิตภัณฑ์ดูแลพื้น และสินค้าใช้ประจำสำหรับองค์กร
          </p>
        </div>

        <ProductsShowcase />
      </div>
    </section>
  )
}
