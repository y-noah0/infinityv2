import styles from './PricingSection.module.css'
export default function PricingSection(){
    return (
        <div className={styles.pricingContainer}>
          <div className={styles.pricingHeader}>
            <h1>Pricing Plan Categories</h1>
            <p>
              Our POS system software is designed to cater to various industries,<br /> including bars, restaurants, coffee shops, apparel, delicatessens, stores, and more.
            </p>
          </div>
          
          <div className={styles.pricingPlans}>
            <div className={styles.pricingPlan}>
              <h2>Starter Plan</h2>
              <p className={styles.price}>$49.99<span> /month</span></p>
              <button className={styles.choosePlan}>Choose plan</button>
              <h3>Pricing:</h3>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>Annual Subscription: $1,079.89/year (10% discount)</li>
                <li className={styles.featureItem}>Support: Email</li>
                <li className={styles.featureItem}>Up to 3 users</li>
              </ul>
              <h3>Software Package:</h3>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>Basic Features</li>
                <li className={styles.featureItem}>Support: Email</li>
                <li className={styles.featureItem}>Up to 3 users</li>
              </ul>
             
            </div>
    
            <div className={styles.pricingPlan}>
              <h2>Professional Plan</h2>
              <p className={styles.price}>$99.99<span> /month</span></p>
              <button className={styles.choosePlan}>Choose plan</button>
              <h3>Pricing</h3>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>All Starter Features</li>
                <li className={styles.featureItem}>Support: Phone & Email</li>
                <li className={styles.featureItem}>Up to 10 users</li>
                <li className={styles.featureItem}>Advanced Analytics</li>
              </ul>
              <h3>Software Package</h3>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>All Starter Features</li>
                <li className={styles.featureItem}>Support: Phone & Email</li>
                <li className={styles.featureItem}>Up to 10 users</li>
                <li className={styles.featureItem}>Advanced Analytics</li>
              </ul>
            </div>
    
            <div className={styles.pricingPlan}>
              <h2>Business Plan</h2>
              <p className={styles.price}>$199.99<span> /month</span></p>
              <button className={styles.choosePlan}>Choose plan</button>
              <h3>Pricing</h3>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>All Professional Features</li>
                <li className={styles.featureItem}>Priority Support</li>
                <li className={styles.featureItem}>Unlimited users</li>
                <li className={styles.featureItem}>Dedicated Account Manager</li>
              </ul>
              <h3>Software Package</h3>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>All Professional Features</li>
                <li className={styles.featureItem}>Priority Support</li>
                <li className={styles.featureItem}>Unlimited users</li>
                <li className={styles.featureItem}>Dedicated Account Manager</li>
              </ul>
            </div>
    
            <div className={styles.pricingPlan}>
              <h2>Enterprise Plan</h2>
              <p className={styles.price}>$199.99<span> /month</span></p>
              <button className={styles.choosePlan}>Choose plan</button>
              <h3>Pricing</h3>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>All Business Features</li>
                <li className={styles.featureItem}>Custom Solutions</li>
                <li className={styles.featureItem}>24/7 Support</li>
                <li className={styles.featureItem}>Personalized Onboarding</li>
              </ul>
              <h3>Software Package</h3>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>Unlimited POS terminals and printers</li>
                <li className={styles.featureItem}>Custom reporting and analytics</li>
                <li className={styles.featureItem}>Kitchen Display System (KDS)</li>
                <li className={styles.featureItem}>Dedicated account manager</li>
                <li className={styles.featureItem}>24/7 priority support</li>
                <li className={styles.featureItem}>Custom integrations</li>
                <li className={styles.featureItem}>On-site training and setup</li>
                <li className={styles.featureItem}>Work Period Management</li>
                
              </ul>
            </div>
          </div>
        </div>
      );
    };
    

  