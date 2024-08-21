import style from './Footer.module.css';
import logo from '../../../assets/Navbar/logo.png';
import email from '../../../assets/Footer/email.png'
import location from '../../../assets/Footer/location.png'
import phone from '../../../assets/Footer/phone.png'
import gplus from '../../../assets/Footer/gplus.png'
import facebook from '../../../assets/Footer/facebook.png'
import linkedin from '../../../assets/Footer/in.png'
import youtube from '../../../assets/Footer/youtube.png'



function Footer() {
   
    return(
        <div className={style.container}>
            <div className={style.links}>
                <div className={style.columns}>
                    <img src={logo} alt="Logo" className={style.logo}/>
                    <div className={style.description_link}>
                        <img src={email} alt="" />
                        <p>sales@infinitytechsolutions.com</p>
                    </div>
                    <div className={style.description_link}>
                        <img src={location} alt="" />
                        <p>89 KG 14 Ave, Kigali</p>
                    </div>
                    <div className={style.description_link}>
                        <img src={phone} alt="" />
                        <p>+250 798 735 385</p>
                    </div>
                    <div className={style.socials}>
                        <img src={facebook} alt="" />
                        <img src={gplus} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={youtube} alt="" />
                    </div>

                </div>
                <div className={style.columns}>
            <h2>Customers</h2>
            <p><a href='/Login' >Sign In</a></p>
            <p><a href='/Features' >Features</a></p>
            <p><a href='/Pricing' >Pricing</a></p>
            <p><a href="">Refer a Restaurant</a></p>
        </div>
                <div className={style.columns}>
                    <h2>Company</h2>
                    <p><a href="">About Us</a></p>
                    <p><a href="">Services</a></p>
                    <p><a href="">News & Blog</a></p>
                </div>
                <div className={style.columns}>
                    <h2>Support</h2>
                    <p><a href="">Help center</a></p>
                    <p><a href="">Privacy Policy</a></p>
                    <p><a href="">Tutorial Video</a></p>
                </div>
            </div>
            <div className={style.footer_bottom}>
                <p>Copyright © All Rights Reserved Infinitytech 2024.</p>
            </div>
        </div>
    )
}
export default Footer;