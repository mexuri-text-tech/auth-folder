import { Link } from "react-router-dom";
import logo from "../../assets/SVG/Primary(White).svg"
import "./navbar.css";
import Button from "../button/button";
import { useState, useEffect } from "react";

export default function Navbar(props) {
    const menuSVG = (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f2f3f4ff">
            <path d="M120-680v-80h720v80H120Zm0 480v-80h720v80H120Zm0-240v-80h720v80H120Z" />
        </svg>
    );

    const closeSVG = (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f2f3f4ff">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
    );

    const [menu, setMenu] = useState(menuSVG);

    useEffect(() => {
        const menuBtn = document.querySelector('.closeBtn');
        const menuLink = document.querySelector('.mobile-navlink')

        let menuOpen = true;

        menuBtn.addEventListener('click', () => {
            if (menuOpen) {
                setMenu(closeSVG);
                menuLink.style.transform = 'translateX(0%)';
            } else {
                setMenu(menuSVG);
                menuLink.style.transform = 'translateX(-100%)';
            }

            menuOpen = !menuOpen;
        });

    }, [])


    return (<>
        <div className="navbar-container">
            <div className="nav-main">
                <div className="logo">
                    <img src={logo} alt="mexuri logo" />
                </div>

                <div className="nav-links">
                    <ul>
                        <li><Link to={props.lnav1}>{props.nav1}</Link></li>
                        <li><Link to={props.lnav2}>{props.nav2}</Link></li>
                        <li><Link to={props.lnav3}>{props.nav3}</Link></li>
                        <li><Link to={props.lnav4}>{props.nav4}</Link></li>
                    </ul>
                </div>

                <div className="nav-auth">
                    <Link to="/login">
                        <Button className="login-btn" btnName="Login" />
                    </Link>

                    <Link to="/sign-up">
                        <Button className="SignUp-btn" btnName="Sign up" />
                    </Link>
                </div>
            </div>
        </div>

        <div className="navbar-container-mobile">
            <div className="nav-main">
                <div className="logo-closeBtn">
                    <div className="img">
                        <img src={logo} alt="mexuri logo" />
                    </div>


                    <div className="left-nav">
                        <Link to="/login">
                            <Button className="login-btn" btnName="Login" />
                        </Link>

                        <div className="closeBtn">
                            {menu}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="mobile-navlink">
            <div className="nav-links">
                <ul>
                    <li><Link to={props.lnav1}>{props.nav1}</Link></li>
                    <li><Link to={props.lnav2}>{props.nav2}</Link></li>
                    <li><Link to={props.lnav3}>{props.nav3}</Link></li>
                    <li><Link to={props.lnav4}>{props.nav4}</Link></li>
                </ul>
            </div>

            <div className="nav-auth">
                <Link to="/sign-up">
                    <Button className="SignUp-btn" btnName="Sign up" />
                </Link>
            </div>
        </div>
    </>)
}
