import styles from './PricingSection.module.css'
import {Link} from 'react-router-dom'
export default function PricingSection(){
	return(
		<div className={styles.container}>
			<div className={styles.text_container}>
				<h1>Pricing Plan Categories</h1>
				<p>Our POS system software is designed to cater to various industries, including bars, restaurants, coffee shops, pizzerias, alimentation, salons, and more.</p>
			</div>
			<div className={styles.pricing_plans}>
				<div className={styles.plan}>
                    <h2>Starter Plan</h2>
                    <div className={styles.price}>$49.99 <span className={styles.duration}>/month</span></div>
					<Link>Choose plan</Link>
                    <ul>
                        <li>1000 products</li>
                        <li>100 employees</li>
                        <li>Unlimited support</li>
                    </ul>
                    <button>Buy Now</button>
                </div>
                <div className={styles.plan}>
                    <h2>Professional Plan</h2>
                    <div className={styles.price}>$99.99</div>
                    <div className={styles.duration}>per month</div>
                    <ul>
                        <li>1500 products</li>
                        <li>200 employees</li>
					</ul>	
				</div>
			</div>
		</div>
	)
}	