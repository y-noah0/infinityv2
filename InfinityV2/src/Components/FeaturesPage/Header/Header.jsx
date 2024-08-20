import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.hero}>
            <div className={styles.text}>
                <h1>Power Your Business with Our Comprehensive POS System</h1>
                <p>Discover the features that drive efficiency, sales, and customer satisfaction</p>
            </div>
            <button>Explore Our Features</button>
        </div>
    );
}

export default Header;
