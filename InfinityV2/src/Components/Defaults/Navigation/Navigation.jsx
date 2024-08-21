import { useState } from 'react';
import style from './Navigation.module.css';
import logo from '../../../assets/Navbar/logo.png';
import { Link } from 'react-router-dom';

function Navigation() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className={style.navbar}>
            <img src={logo} alt="Logo" className={style.logo} />
            <div className={style.hamburger} onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`${style.nav} ${isNavOpen ? style.open : ''}`}>
                <ul className={style.navList}>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/Features'}>Features</Link></li>
                    <li><Link to={'/Pricing'}>Pricing</Link></li>
                    <li><Link>Contact Us</Link></li>
                </ul>
                <button className={style.btn_register}><a href='/Register'>Register</a></button>
            </nav>
        </div>
    );
}

export default Navigation;