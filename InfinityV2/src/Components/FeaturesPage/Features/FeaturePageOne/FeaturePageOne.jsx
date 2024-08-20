import styles from './FeaturePageOne.module.css'
import image from '../../../../assets/Home/HeroSection/image.png'
import tick from '../../../../assets/Home/HeroSection/tick.png'

function FeaturePageOne() {
    return(
        <div className={styles.featurePageOne}>
            <div className={styles.image}>
                <img src={image} alt="POS System" />
            </div>
            <div className={styles.details}>
                <div className={styles.title}>
                    <h2>Menu Management</h2>
                    <p>Efficiently create, manage, and update your menu items, categories, and pricing.</p>
                </div>
                <div className={styles.detailPoints}>
                    <div className={styles.point}>
                        <img src={tick} alt="POS System" className={styles.tickIcon}/>
                        <p>Easily add, edit, or remove menu items</p>
                    </div>
                    <div className={styles.point}>
                        <img src={tick} alt="POS System" className={styles.tickIcon}/>
                        <p>Categorize items by type, course, or popularity</p>
                    </div>
                    <div className={styles.point}>
                        <img src={tick} alt="POS System" className={styles.tickIcon}/>
                        <p>Manage item variations, modifiers, and pricing</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeaturePageOne;