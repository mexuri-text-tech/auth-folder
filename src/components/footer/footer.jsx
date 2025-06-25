import logo from '../../assets/SVG/Primary(White).svg';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (<>
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__brand">
                    <img src={logo} alt="" />
                    <p className="footer__tagline">Empowering SMEs with digital solutions</p>
                    <div className="footer__social">
                        <Link to="#" className="social-icon"><i className="fab fa-whatsapp"></i></Link>
                        <Link to="#" className="social-icon"><i className="fab fa-instagram"></i></Link>
                        <Link to="#" className="social-icon"><i className="fab fa-linkedin-in"></i></Link>
                    </div>
                </div>

                <div className="footer__links">
                    <div className="footer__column">
                        <h3 className="footer__heading">Services</h3>
                        <ul>
                            <li><Link to="#">Website Solutions</Link></li>
                            <li><Link to="#">Shipping Partners</Link></li>
                            <li><Link to="#">Mexuri for Companies</Link></li>
                        </ul>
                    </div>

                    <div className="footer__column">
                        <h3 className="footer__heading">Company</h3>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="#">Blog</Link></li>
                            <li><Link to="#">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer__column">
                        <h3 className="footer__heading">Legal</h3>
                        <ul>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Terms of Service</Link></li>
                            <li><Link to="#">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <p className="footer__copyright">© {new Date().getFullYear()} Mexuri. All rights reserved.</p>
            </div>
        </footer>
    </>);
};

export default Footer;