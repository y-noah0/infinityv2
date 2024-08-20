import styles from './FeaturePageThree.module.css'
import image from '../../../../assets/Home/HeroSection/image-3.png'
import tick from '../../../../assets/Home/HeroSection/tick.png'

function FeaturePageThree() {
    return(
        <div className={styles.featurePageThree}>
            <div className={styles.image}>
                <img src={image} alt="POS System" />
            </div>
            <div className={styles.details}>
                <div className={styles.title}>
                    <h2>Support and Access</h2>
                    <p> Ensure uninterrupted operations with reliable support and access.</p>
                </div>
                <div className={styles.detailPoints}>
                    <div className={styles.point}>
                        <img src={tick} alt="POS System" className={styles.tickIcon}/>
                        <p>Comprehensive training and onboarding for staff</p>
                    </div>
                    <div className={styles.point}>
                        <img src={tick} alt="POS System" className={styles.tickIcon}/>
                        <p>Dedicated customer support via phone, email, or live chat</p>
                    </div>
                    <div className={styles.point}>
                        <img src={tick} alt="POS System" className={styles.tickIcon}/>
                        <p>Remote system access for troubleshooting and updates</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeaturePageThree;