import styles from './FeatureThree.module.css';
import card1 from '../../../../assets/FeatureThree/pngwing.com 656 1.png'
import card2 from '../../../../assets/FeatureThree/waiter 1.png'
import card3 from '../../../../assets/FeatureThree/image 3.png'
import card4 from '../../../../assets/FeatureThree/loyverse-pos 2.png'
import card5 from '../../../../assets/FeatureThree/image 3 (1).png'
import card6 from '../../../../assets/FeatureThree/image 3 (2).png'
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
						<Link to='/features'>learn more</Link>
					</div>
					<div className={styles.card}>
						<img src={card2} alt="pos" />
						<h2>payment processing</h2>
						<p>Accept various payment methods including cash, credit cards, mobile payments, and digital wallets</p>
						<Link to='/features'>learn more</Link>
					</div>
					<div className={styles.card}>
						<img src={card3} alt="pos" />
						<h2>payment processing</h2>
						<p>Accept various payment methods including cash, credit cards, mobile payments, and digital wallets</p>
						<Link to='/features'>learn more</Link>
					</div>
				</div>
				<div className={styles.cards_up}>
					<div className={styles.card}>
							<img src={card4} alt="pos" />
							<h2>payment processing</h2>
							<p>Accept various payment methods including cash, credit cards, mobile payments, and digital wallets</p>
							<Link to='/features'>learn more</Link>
						</div>
						<div className={styles.card}>
							<img src={card5} alt="pos" />
							<h2>payment processing</h2>
							<p>Accept various payment methods including cash, credit cards, mobile payments, and digital wallets</p>
							<Link to='/features'>learn more</Link>
						</div>
						<div className={styles.card}>
							<img src={card6} alt="pos" />
							<h2>payment processing</h2>
							<p>Accept various payment methods including cash, credit cards, mobile payments, and digital wallets</p>
							<Link to='/features'>learn more</Link>
						</div>
				</div>
			</div>
		</div>
	)
}
export default FeatureThree;