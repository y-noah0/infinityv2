import styles from './signin.module.css';
import backgroundImage from '../../../assets/Authentication/coffeshop.png';
import { Link } from 'react-router-dom';
import Navigation from '../../Defaults/Navigation/Navigation';
import Footer from '../../Defaults/Footer/Footer';

const SignIn = () => {
    return (
        
        <div className={styles.featureSection}>
            <Navigation />
            <img
                className={styles.featureSectionChild}
                alt="Coffee Shop"
                src={backgroundImage}
            />
            <div className={styles.frameParent}>
                <div className={styles.signInToYourAccountParent}>
                    <b className={styles.signInTo}>Sign In to Your Account</b>
                    <div className={styles.welcomeToInfinity}>
                        Welcome to Infinity POS
                    </div>
                </div>
                <form className={styles.textFieldParent}>
                    <input
                        type="email"
                        placeholder="Enter Your email"
                        className={styles.inputField}
                    />
                    <input
                        type="password"
                        placeholder="Enter Your password"
                        className={styles.inputField}
                    />
                    <button type="submit" className={styles.primary}>
                        Sign In
                    </button>
                </form>
               <Link to={'/Register'}> <div className={styles.newToInfinity}>New to Infinity POS?</div></Link>
            </div>
            <Footer />
        </div>
    );
};

export default SignIn;
