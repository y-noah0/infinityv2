import styles from './Testimonials.module.css';
import logo1 from'../../../assets/Testimonials/Logo (1).png'
import logo2 from'../../../assets/Testimonials/Logo (2).png'
import logo3 from'../../../assets/Testimonials/Logo (3).png'
import logo4 from'../../../assets/Testimonials/Logo (4).png'
import logo5 from'../../../assets/Testimonials/Logo (5).png'
import ceo from'../../../assets/Testimonials/picture.png'
import right from'../../../assets/Testimonials/chevron-right.png'


const Testimonials = () => {
  	return (
    		<div className={styles.featureSection}>
      			<b className={styles.trustedByOver}>Trusted by over 120,000 restaurants of all concepts</b>
      			<div className={styles.featureSectionChild} />
      			<div className={styles.frameParent}>
        				<div className={styles.frameWrapper}>
          					<div className={styles.frameGroup}>
            						<div className={styles.restaurantWrapper}>
              							<div className={styles.restaurant}>RESTAURANT</div>
            						</div>
            						<div className={styles.speedOfService}>“Speed of service is better for everyone. Not having to do the administrative work of cashing out that’s better for everyone. ”</div>
          					</div>
        				</div>
        				<div className={styles.jackManziParent}>
          					<b className={styles.jackManzi}>Jack Manzi</b>
          					<div className={styles.ceoParent}>
            						<div className={styles.ceo}>{`CEO `}</div>
            						<div className={styles.frameChild} />
            						<div className={styles.ceo}>SAGA BAY</div>
          					</div>
        				</div>
      			</div>
      			<img className={styles.featureSectionItem} alt="" src={ceo}/>
      			<div className={styles.backParent}>
        				<div className={styles.back}>
          					<img className={styles.chevronRightIcon} alt="" src={right} />
        				</div>
        				<div className={styles.back1}>
          					<img className={styles.chevronRightIcon1} alt="" src={right} />
        				</div>
      			</div>
      			<div className={styles.ellipseParent}>
        				<div className={styles.frameItem} />
        				<div className={styles.frameItem} />
        				<div className={styles.frameItem} />
        				<div className={styles.frameChild1} />
      			</div>
      			<div className={styles.logosWrapper}>
        				<div className={styles.logos}>
          					<img className={styles.logoIcon} alt="" src={logo1} />
          					<img className={styles.logoIcon1} alt="" src={logo2} />
          					<img className={styles.logoIcon2} alt="" src={logo3} />
          					<img className={styles.logoIcon3} alt="" src={logo4} />
          					<img className={styles.logoIcon4} alt="" src={logo5}/>
        				</div>
      			</div>
    		</div>);
};

export default Testimonials;
