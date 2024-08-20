import React from 'react';
import styles from './Register.module.css';
import logo from '../../../assets/Authentication/logo.png'; 
import backgroundImage from '../../../assets/Authentication/coffeshop.png'; 

const Register = () => {
    return (
        <div className={styles.signupPage}>
            <div className={styles.leftSection}>
                <img src={logo} alt="Logo" className={styles.logo} />
                <img src={backgroundImage} alt="Background" className={styles.backgroundImage} />
                <div className={styles.footer}>
                    Welcome to Restaurant Management portal. Login into your account or contact administrator for support & assistance.
                    © 2024 Restaurant Portal, Inc. All rights reserved.
                </div>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.formContainer}>
                    <h2 className={styles.createYourAccount}>Create Your Account</h2>
                    <p className={styles.welcomeToInfinity}>Welcome to Infinity POS</p>
                    <input type="text" placeholder="Enter Your fullname" className={styles.textField} />
                    <input type="email" placeholder="Enter Your email" className={styles.textField} />
                    <input type="text" placeholder="Enter Your location" className={styles.textField} />
                    <select className={styles.textField}>
                        <option value="" disabled selected>Select Business Category</option>
                        <option value="">coffeshop</option>
                        <option value="">Bar</option>
                        <option value="">Reasturant</option>
                    </select>
                    <textarea placeholder="Description" className={styles.textArea}></textarea>
                    <button className={styles.signupButton}>Sign Up</button>
                    <p className={styles.signinPrompt}>Already have an account? <a href="/login">Sign in</a></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
