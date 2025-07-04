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
            description: "Subscribe to the plan that suits your business the most and start your dream business with an online presence.",
        },
        {
            id: 2,
            image: scale,
            name: "Scale with Ease",
            description: "Seamlessly upgrade your plan as your business evolves—without large upfront costs, just flexible, scalable progress.",
        },
        {
            id: 3,
            image: sales,
            name: "Make more sales",
            description: "Build strategic partnerships with larger brands to expand your reach, strengthen your reputation, and take your business to the next stage of success.",
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