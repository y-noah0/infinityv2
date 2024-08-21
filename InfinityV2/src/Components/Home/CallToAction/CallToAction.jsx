import styles from './CallToAction.module.css';
import pc from '../../../assets/CallToAction/pc 1.png'


const CallToAction = () => {
  	return (
    		<div className={styles.rectangleDiv}>
                <img className={styles.pc1Icon} alt="" src={pc} />
            <div className={styles.upgradeYourBusinessWithOurParent}>
<b className={styles.upgradeYourBusinessContainer}>
<span>{`Upgrade Your Business with Our Cutting - Edge `}</span>
<span className={styles.posSolution}>POS Solution</span>
</b>
<div className={styles.ourPosSystem}>Our POS system software is designed to cater to various industries, including bars, restaurants, coffee shops, pizzerias, alimentation, salons, and more.</div>
<div className={styles.primaryParent}>
<div className={styles.primary}>
<div className={styles.button}>
<div className={styles.labelName}>
    <button>
      <a href="/Register">Get Started</a> 
       </button>
    </div>
</div>
</div>
<div className={styles.primary1}>
<div className={styles.button1}>
<div className={styles.labelName}>
    <button>
      <a href="/Pricing">Purchase Now</a> 
    </button>
    </div>
</div>
</div>
</div>
</div>
            </div>);
};

export default CallToAction;
