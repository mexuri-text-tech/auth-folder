import './pricing.css'
import Button from '../../components/button/button';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar'

const PricingPage = () => {


    const pricing = [
        {
            id: 1,
            title: "Basic",
            price: "₦30,000",
            duration: '/month',
            recommedation: "Ideal for personal brands and early-stage SMEs with small customer base",
            feat1: "Maximum of 2 web pages",
            feat2: "No payment gateway — customers order by sending a direct message.",
            feat3: "One logo per brand",
            feat4: "Simple site layout",
            btn: "Get Started with Basic",
            link: 'https://wa.link/hkj381'
        },
        {
            id: 2,
            title: "Standard",
            price: "₦65,000",
            duration: '/month',
            recommedation: "Suitable for experienced brands with a small to medium-sized customer base.",
            feat1: "Maximum of 5 pages",
            feat2: "Supports online payments via integrated gateway.",
            feat3: "Full shopping cart and checkout system included.",
            feat4: "Free logo creation by Mexuri",
            btn: "Subcribe for Standard",
            link: "https://wa.link/aqaj6y"
        },
        {
            id: 3,
            title: "Custom",
            price: "Custom Price",
            duration: "",
            recommedation: "Perfect for established businesses seeking a premium, fully tailored website solution.",
            feat1: "Unlimited Pages",
            feat2: "Free Branding by Mexuri",
            feat3: "Full E-commerce functionality with integrated payment gateway",
            feat4: "Custom Domain name + one time payment",
            btn: "Request for custom quote"
        }
    ]



    return (<>
        <div className="price-container">
            <Navbar lnav1="/" nav1="Home" lnav2="/about" nav2="About" nav3="Blogs" nav4="Contact Us" nav5="Partnership" nav6="Shipping Partners" />
            <div className="main">
                <div className="heading">
                    <h1>Our Packages</h1>
                    <p>Mexuri offers affordable packages tailored to the needs of both brands and businesses</p>
                </div>
            </div>

            <div className="pricing-grid">
                {pricing.map(pricing => (
                    <div className="pricing-card" key={pricing.id}>
                        <div className="price-head">
                            <div className="title">
                                <h2>{pricing.title}</h2>
                            </div>

                            <div className="price">
                                <h1>{pricing.price}<span>{pricing.duration}</span></h1>
                                <p>{pricing.recommedation}</p>
                            </div>
                        </div>

                        <div className="features">
                            <ul>
                                <li>{pricing.feat1}</li>
                                <li>{pricing.feat2}</li>
                                <li>{pricing.feat3}</li>
                                <li>{pricing.feat4}</li>
                            </ul>
                        </div>

                        <div className="button">
                            <Link to={pricing.link}>
                                <Button className="packageBtn" btnName="Learn more" />
                            </Link>
                            <Button className="priceBtn" btnName={pricing.btn} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>);
}

export default PricingPage; <>
</>