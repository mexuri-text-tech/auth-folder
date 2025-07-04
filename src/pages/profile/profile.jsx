import logo from "../../assets/SVG/Primary(White).svg";
import hero from "../../assets/image/coffee.jpg";
import './profile.css';
import Button from "../../components/button/button";
import cosm1 from "../../assets/templates/cosmetics/cosm1.webp";
import cosm2 from "../../assets/templates/cosmetics/cosm2.webp";
import cosm3 from "../../assets/templates/cosmetics/cosm3.webp";
import cosm4 from "../../assets/templates/cosmetics/cosm4.webp";
import cosm5 from "../../assets/templates/cosmetics/cosm5.webp";
import cosm6 from "../../assets/templates/cosmetics/cosm6.webp";
import cosm7 from "../../assets/templates/cosmetics/cosm7.webp";
import cosm8 from "../../assets/templates/cosmetics/cosm8.webp";
import cosm9 from "../../assets/templates/cosmetics/cosm9.webp";
import cosm10 from "../../assets/templates/cosmetics/cosm10.webp";

export default function ProfilePage() {

    const templates = [
        {
            id: "cosmetics",
            name: "Nature Template",
            alt: "Nature Template",
            img: cosm1
        },
        {
            id: "cosmetics",
            name: "Skinner Template",
            alt: "Skinner Template",
            img: cosm2
        },
        {
            id: "cosmetics",
            name: "Caramel Template",
            alt: "Caramel Template",
            img: cosm3
        },
        {
            id: "cosmetics",
            name: "Lotion template",
            alt: "Lotion Template",
            img: cosm4
        },
        {
            id: "cosmetics",
            name: "Beauty Template",
            alt: "Beauty Template",
            img: cosm5
        },
        {
            id: "cosmetics",
            name: "Facila Template",
            alt: "Facila Template",
            img: cosm6
        },
        {
            id: "cosmetics",
            name: "Carey Template",
            alt: "Carey Template",
            img: cosm7
        },
        {
            id: "cosmetics",
            name: "Barbie Girl Template",
            alt: "Barbie Template",
            img: cosm8
        },
        {
            id: "cosmetics",
            name: "Darlette Template",
            alt: "Darlette Template",
            img: cosm9
        },
        {
            id: "cosmetics",
            name: "Bouge Temmplare",
            alt: "Bouge Template",
            img: cosm10
        }
    ]

    return (<>
        <div className="profile-container">
            <div className="container-main">
                <div className="nav">
                    <div className="nav1">
                        <div className="main">
                            <div className="logo">
                                <img src={logo} alt="mexuri logo" />
                            </div>

                            <div className="search-bar">
                                <input type="search" name="search" id="searchBar" placeholder="Search for templates" />
                            </div>

                            <div className="profile-icon">
                                <img src={hero} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="nav2">
                        <div className="main">
                            <ul>
                                <li>Website</li>
                                <li>Graphics</li>
                                <li>Contact</li>
                                <li>Blogs</li>
                                <li>Custom services</li>
                                <li>My Site</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <section>
                    <div className="template-filter-class">
                        <div className="filterButton">
                            <button>
                                Basic
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                                    <path d="M480-360 280-560h400L480-360Z" /></svg>
                            </button>
                        </div>

                        <div className="filters">
                            <ul>
                                <li id="cosmetics">Cosmetics</li>
                                <li id="home">Home Services</li>
                                <li id="portfolio">Portfolio</li>
                                <li id="fashion">Fashion</li>
                                <li id="ecommerce">E-commerce</li>
                                <li id="portfolio">Food</li>
                                <li id="fashion">Tech Sales</li>
                                <li id="ecommerce">Retail & Wholesale</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="template-class">
                    <div className="main">
                        {templates.map(template => (
                            <figure id={template.id}>
                                <div className="img">
                                    <img src={template.img} alt={template.alt} />
                                </div>

                                <figcaption>
                                    <div className="title">
                                        <h2>{template.name}</h2>
                                    </div>

                                    <div className="button">
                                        <Button className="favouriteBtn" btnName="View Template" />
                                    </div>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>)
}