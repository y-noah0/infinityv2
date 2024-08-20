import styles from './FeaturePageSix.module.css'
import image from '../../../../assets/Home/HeroSection/image-3.png'
import tick from '../../../../assets/Home/HeroSection/tick.png'

function FeaturePageSix() {
    return(
        <div className={styles.featurePageSix}>
            <div className={styles.details}>
                <div className={styles.title}>
                    <h2>Reporting and Analytics</h2>
                    <p>Gain valuable insights into your business performance.</p>
                </div>
                <div className={styles.detailPoints}>
                    <div className={styles.point}>
                        <img src={tick} alt="POS System" className={styles.tickIcon}/>
                        <p>Generate detailed sales reports by product, category, and time period</p>
                    </div>
                    <div className={styles.point}>
                        <img src={tick} alt="POS System" className={styles.tickIcon}/>
                        <p>Track inventory levels and analyze product popularity</p>
                    </div>
                    <div className={styles.point}>
                        <img src={tick} alt="POS System" className={styles.tickIcon}/>
                        <p>Monitor employee performance and labor costs</p>
                    </div>
                </div>
            </div>
            <div className={styles.image}>
                <img src={image} alt="POS System" />
            </div>
        </div>
    )
}
export default FeaturePageSix;