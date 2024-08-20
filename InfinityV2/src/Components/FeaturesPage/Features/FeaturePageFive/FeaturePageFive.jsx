import styles from './FeaturePageFive.module.css'
import image from '../../../../assets/Home/HeroSection/image-5.png'
import tick from '../../../../assets/Home/HeroSection/tick.png'

function FeaturePageFive() {
    return(
        <div className={styles.featurePageFive}>
            <div className={styles.image}>
                <img src={image} alt="POS System" />
            </div>
            <div className={styles.details}>
                <div className={styles.title}>
                    <h2>POS Hardware</h2>
                    <p>Choose the right hardware components to suit your business needs.</p>
                </div>
                <div className={styles.detailPoints}>
                    <div className={styles.point}>
                        <img src={tick} alt="POS System" className={styles.tickIcon}/>
                        <p>High-performance touchscreen POS terminals</p>
                    </div>
                    <div className={styles.point}>
                        <img src={tick} alt="POS System" className={styles.tickIcon}/>
                        <p>Durable receipt printers for clear order summaries</p>
                    </div>
                    <div className={styles.point}>
                        <img src={tick} alt="POS System" className={styles.tickIcon}/>
                        <p>Barcode scanners for efficient inventory management</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeaturePageFive;