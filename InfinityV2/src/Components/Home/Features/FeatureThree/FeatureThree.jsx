	import styles from './FeatureThree.module.css';
	import card1 from '../../../../assets/FeatureThree/pos.png';
	import card2 from '../../../../assets/FeatureThree/waiter.png';
	import card3 from '../../../../assets/FeatureThree/image3.png';
	import card4 from '../../../../assets/FeatureThree/image.png';
	import card5 from '../../../../assets/FeatureThree/image3.png';
	import card6 from '../../../../assets/FeatureThree/image3.png';
	import { Link } from 'react-router-dom';



	function FeatureThree(){
		return(
			<div className={styles.FeatureThree}>
				<div className={styles.text_container}>
					<h1>Find the right restaurant POS software for your business</h1>
					<p>Everything that you need to run your restaurant easily --all in one place</p>
				</div>
				<div className={styles.card_container}>
					<div className={styles.cards_up}>
						<div className={styles.card}>
							<img src={card1} alt="pos" />
							<h2>payment processing</h2>
							<p>Accept various payment methods including cash, credit cards, mobile payments, and digital wallets</p>
							<Link to='/features' className={styles.links}>learn more</Link>
						</div>
						<div className={styles.card}>
							<img src={card2} alt="pos" />
							<h2>Order Management</h2>
							<p>Efficiently create, modify, and cancel orders for dine-in, takeout, and delivery.</p>
							<Link to='/features' className={styles.links}>learn more</Link>
						</div>
						<div className={styles.card}>
							<img src={card3} alt="pos" />
							<h2>Menu Management</h2>
							<p>Efficiently create, manage, and update your menu items, categories, and pricing.</p>
							<Link to='/features' className={styles.links}>learn more</Link>
						</div>
					</div>
					<div className={styles.cards_up}>
						<div className={styles.card}>
								<img src={card4} alt="pos" />
								<h2>POS Hardware</h2>
								<p>A touchscreen device for order entry, payment processing, and customer interaction.</p>
								<Link to='/features' className={styles.links}>learn more</Link>
							</div>
							<div className={styles.card}>
								<img src={card5} alt="pos" />
								<h2>Reporting and Analytics</h2>
								<p>Gain valuable insights into your business performance</p>
								<Link to='/features' className={styles.links}>learn more</Link>
							</div>
							<div className={styles.card}>
								<img src={card6} alt="pos" />
								<h2>Customer Support</h2>
								<p>Provide comprehensive support channels (phone, email, live chat) for troubleshooting and assistance.</p>
								<Link to='/features' className={styles.links}>learn more</Link>
							</div>
					</div>
				</div>
			</div>
		)
	}
	export default FeatureThree;