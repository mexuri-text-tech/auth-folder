import './about.css';
import Navbar from '../../components/navbar/navbar';
import team from '../../assets/image/team.jpg';
import about from '../../assets/image/about.jpg';
import logo from '../../assets/SVG/Primary(White).svg';
import Button from '../../components/button/button';
import { Link } from 'react-router-dom';
import marketing from '../../assets/image/marketing.jpg';
import graphics from '../../assets/image/graphics.jpg';
import webdev from '../../assets/image/web dev.jpg';
import Footer from '../../components/footer/footer';

export default function About() {
    const link1 = "/"

    const feats = [
        {
            id: 1,
            image: webdev,
            caption: 'Web development',
            description: "Mexuri provides two website options: rental sites with flexible monthly payments and custom sites with optional management services.",
            btn: 'View Templates'
        },
        {
            id: 2,
            image: graphics,
            caption: 'Brand Identity Development',
            description: "We provide visual branding, logo design, and brand identity development to help you stand out in the market.",
            btn: 'How does it work?'
        },
        {
            id: 3,
            image: marketing,
            caption: 'Marketing',
            description: "Our team of experts will help you create a marketing strategy that drives results and grows your business.",
            btn: 'Get Started'
        }
    ]

    return (
        <>
            <div className="about_container">
                <Navbar lnav1={link1} nav1="Home" nav2="Products" lnav3="/pricing-and-packages" nav3="Pricing" nav4="Contact Us" />
                <div className="about_main">
                    <section className='intro'>
                        <div className="heading">
                            <h1>We are <img src={logo} /></h1>
                        </div>

                        <div className="write-up">
                            <p>
                                We’re a collective of passionate creators building affordable digital tools to help small businesses scale, stand out, and connect with their ideal customers.
                            </p>
                        </div>

                        <div className="team-image">
                            <img src={team} alt="team" />
                        </div>
                    </section>

                    <section className="vision">
                        <div className="heading">
                            <h1>Our Vision</h1>
                        </div>

                        <figure>
                            <div className="img">
                                <img src={about} />
                            </div>

                            <div className='figcaption'>
                                <div className="paragraph">
                                    <p>
                                        Great products deserve great visibility.
                                        Yet most small businesses struggle to get seen online — whether from limited budgets, weak branding, or ineffective marketing.
                                    </p>

                                    <p>
                                        That's where Mexuri comes in. We deliver affordable, professional websites and branding tailored to the SME's current needs.
                                    </p>
                                </div>
                            </div>
                        </figure>
                    </section>

                    <section className="services">
                        <div className="heading">
                            <h1>Our Services</h1><hr />
                        </div>

                        <div className="feats">
                            {feats.map(feat => (
                                <div className="feat-card" key={feat.id}>
                                    <figure>
                                        <div className="featimg"><img src={feat.image} /></div>
                                        <figcaption>
                                            <h2>{feat.caption}</h2>
                                            <p>{feat.description}</p>
                                            <Link to={feat.link}>
                                                <Button className="figBtn" btnName={feat.btn} />
                                            </Link>
                                        </figcaption>
                                    </figure>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="cta">
                        <div className="heading">
                            <h1>What if your business could do more — with less stress?
                                <span>
                                    Mexuri makes it happen.
                                </span>
                            </h1>
                        </div>

                        <div className="cta-btn">
                            <Button className="cta-button" btnName="Get Started" />
                        </div>
                    </section>

                    <Footer />
                </div>
            </div>
        </>
    )
}