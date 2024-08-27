import styles from './CallToAction.module.css';
import posImage from '../../../assets/CallToAction/pc 1.png'
import { Link } from 'react-router-dom';


const CallToAction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img src={posImage} alt="posImage" />
      </div>
      <div className={styles.text_container}>
        <div className={styles.description}>
          <h1>Upgrade Your Business with Our Cutting - Edge <span>POS Solution</span></h1>
          <p>Our POS system software is designed to cater to various industries, including bars, restaurants, coffee shops, pizzerias, alimentation, salons, and more.</p>
          <div className={styles.buttons}>
            <Link to ='register'>
              <button>Get Started</button>
            </Link>
            <Link to ='pricing'>
              <button>Purchase Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;