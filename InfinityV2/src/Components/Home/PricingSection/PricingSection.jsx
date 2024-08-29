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
                <li className={styles.featureItem}>Annual Subscription: $539.89/year (10% discount)</li>
                <li className={styles.featureItem}>Hardware Bundle: $349.99 (one-time cost)</li>
                <li className={styles.featureItem}>One-Time Purchase: $1450</li>
              </ul>
              <h3>Software Package:</h3>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>1 POS terminal</li>
                <li className={styles.featureItem}>1 receipt printer</li>
                <li className={styles.featureItem}>Basic reporting (daily sales, inventory)</li>
                <li className={styles.featureItem}>User-Friendly POS Interface</li>
                <li className={styles.featureItem}>Waiter Report Generation</li>
                <li className={styles.featureItem}>Work Period Management</li>
              </ul>
             
            </div>
    
            <div className={styles.pricingPlan}>
                <p className={styles.popular}>MOST POPULAR</p>
                <div className={styles.content}>
                    <h2>Professional Plan</h2>
                    <p className={styles.price}>$99.99<span> /month</span></p>
                    <button className={styles.choosePlan}>Choose plan</button>
                    <h3>Pricing</h3>
                    <ul className={styles.featuresList}>
                        <li className={styles.featureItem}>Annual Subscription: $1,079.89/year (10% discount)</li>
                        <li className={styles.featureItem}>Hardware Bundle: $699.99 (one-time cost)</li>
                        <li className={styles.featureItem}>One-Time Purchase: $2200</li>
                    </ul>
                    <h3>Software Package</h3>
                    <ul className={styles.featuresList}>
                        <li className={styles.featureItem}>2 POS terminals</li>
                        <li className={styles.featureItem}>2 receipt printers</li>
                        <li className={styles.featureItem}>Advanced reporting (sales by employee, peak hours analysis)</li>
                        <li className={styles.featureItem}>Priority email support</li>
                        <li className={styles.featureItem}>User-Friendly POS Interface</li>
                        <li className={styles.featureItem}>Waiter Report Generation</li>
                        <li className={styles.featureItem}>Work Period Management</li>
                    </ul>
                    </div>
            </div>
    
            <div className={styles.pricingPlan}>
              <h2>Business Plan</h2>
              <p className={styles.price}>$199.99<span> /month</span></p>
              <button className={styles.choosePlan}>Choose plan</button>
              <h3>Pricing</h3>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>Annual Subscription: $2,159.89/year (10% discount)</li>
                <li className={styles.featureItem}>Hardware Bundle: Custom quote based on requirements</li>
              </ul>
              <h3>Software Package</h3>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>Up to 5 POS terminals</li>
                <li className={styles.featureItem}>Up to 5 receipt printers</li>
                <li className={styles.featureItem}>Comprehensive reporting suite</li>
                <li className={styles.featureItem}>Inventory forecasting</li>
                <li className={styles.featureItem}>24/7 phone and email support</li>
                <li className={styles.featureItem}>User-Friendly POS Interface</li>
                <li className={styles.featureItem}>Waiter Report Generation</li>
                <li className={styles.featureItem}>Work Period Management</li>
              </ul>
            </div>
    
            <div className={styles.pricingPlan}>
              <h2>Enterprise Plan</h2>
              <p className={styles.price}>$199.99<span> /month</span></p>
              <button className={styles.choosePlan}>Choose plan</button>
              <h3>Pricing</h3>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>Custom pricing based on specific requirements</li>
                <li className={styles.featureItem}>Contact our sales team for a personalized quote</li>
                <li className={styles.featureItem}>Estimate: One-Time Purchase: $8000</li>
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
    

  