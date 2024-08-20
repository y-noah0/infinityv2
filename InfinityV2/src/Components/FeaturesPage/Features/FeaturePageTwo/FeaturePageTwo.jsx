import styles from './FeaturePageTwo.module.css';
import image from '../../../../assets/Home/HeroSection/image-2.png';
import tick from '../../../../assets/Home/HeroSection/tick.png';

function FeaturePageTwo() {
    return (
        <div className={styles.featurePageTwo}>
            <div className={styles.details}>
                <div className={styles.title}>
                    <h2>Order Management</h2>
                    <p>Streamline order-taking, processing, and fulfillment.</p>
                </div>
                <div className={styles.detailPoints}>
                    <div className={styles.point}>
                        <img src={tick} alt="POS System" className={styles.tickIcon} />
                        <p>Integrate with kitchen display systems (KDS) for real-time order updates</p>
                    </div>
                    <div className={styles.point}>
                        <img src={tick} alt="POS System" className={styles.tickIcon} />
                        <p>Categorize items by type, course, or popularity</p>
                    </div>
                    <div className={styles.point}>
                        <img src={tick} alt="POS System" className={styles.tickIcon} />
                        <p>Manage item variations, modifiers, and pricing</p>
                    </div>
                </div>
            </div>
            <div className={styles.image}>
                <img src={image} alt="POS System" />
            </div>
        </div>
    );
}

export default FeaturePageTwo;
