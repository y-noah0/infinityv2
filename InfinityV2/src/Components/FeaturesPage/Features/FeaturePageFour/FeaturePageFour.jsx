import styles from './FeaturePageFour.module.css'
import image from '../../../../assets/Home/HeroSection/image-4.png';
import tick from '../../../../assets/Home/HeroSection/tick.png';

function FeaturePageFour() {
    return(
        <div className={styles.featurePageFour}>
            <div className={styles.details}>
                <div className={styles.title}>
                    <h2>Payment Processing</h2>
                    <p>Accept various payment methods including cash, credit cards, mobile payments, and digital wallets</p>
                </div>
                <div className={styles.detailPoints}>
                    <div className={styles.point}>
                        <img src={tick} alt="POS System" className={styles.tickIcon} />
                        <p>Integrate with popular payment gateways</p>
                    </div>
                    <div className={styles.point}>
                        <img src={tick} alt="POS System" className={styles.tickIcon} />
                        <p>Handle refunds and returns efficiently</p>
                    </div>
                    <div className={styles.point}>
                        <img src={tick} alt="POS System" className={styles.tickIcon} />
                        <p>Manage tips and gratuity options</p>
                    </div>
                </div>
            </div>
            <div className={styles.image}>
                <img src={image} alt="POS System" />
            </div>
        </div>
    )
}
export default FeaturePageFour;