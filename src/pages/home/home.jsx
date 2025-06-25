import Navbar from "../../components/navbar/navbar";
import './home.css';
import HeroPage1 from "../../components/hero/hero1/hero";
import Feat1 from "../../components/features/feat1/feat1";
import Feature2 from "../../components/features/feat2/feat2";
import Feat3 from "../../components/features/feat3/feat3";
import Footer from "../../components/footer/footer";

function HomePage() {

    //variables
    const about = '/about';
    const pricing = '/pricing-and-packages'

    return (<>
        <Navbar lnav1={about} nav1="About" nav2="Products" lnav3={pricing} nav3="SME Solutions" nav4="Contact Us" />
        <div className="home-container">
            <div className="main">
                <HeroPage1 h1="Ready to take your business to the" span="Next Level?" caption="Join businesses, startups, brands, and solo entreprenuers who are growing their brands with Mexuri" heroBtnText="Get Started" />
                {/*What we do/Value Proposition*/}
                <Feature2 />

                <Feat3 />

                <Feat1 />

                <Footer />
            </div>
        </div>
    </>);
}

export default HomePage;