import './feat1.css';
import brandVisibility from '../../../assets/image/small business.jpeg';
import sales from '../../../assets/image/sales.jpeg'
import scale from '../../../assets/image/scale.jpeg'

const Feat1 = () => {
    const features = [
        {
            id: 1,
            image: brandVisibility,
            name: "Get Started",
            description: "Olgita was eager to go into business, but had limited capital to start, with Mexuri Dropshipping, she was able to start her business and connect with vendors with the minimal capital.",
        },
        {
            id: 2,
            image: scale,
            name: "Scale with Ease",
            description: "Omoh Clothing started as a small home tailoring shop. Fueled by passion, it grew into a thriving boutique where every piece reflects its heartfelt journey.",
        },
        {
            id: 3,
            image: sales,
            name: "Make more sales",
            description: "Daisy's Touch sales have improved remarkably since the got their beautiful website from Mexuri. The websited has helped them reach a wider audience.",
        }
    ];

    return (<>
        <div className="features">
            <div className="main">
                <div className="header">
                    <h1>Let us be a part of your <span>Growth</span></h1>
                    <p>
                        Empowering businesses of every size—from growing startups to established enterprises—with affordable,
                        high-quality solutions. At Mexuri, we believe your ambition deserves the right support.
                        Turning your vision into reality has never been more achievable.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map(feature => (
                        <div className="features-card" key={feature.id}>
                            <div className="feature-image"><img src={feature.image} /></div>
                            <div className="feature-name"><h1>{feature.name}</h1></div>
                            <div className="feature-description"><p>{feature.description}</p></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>);
}

export default Feat1;