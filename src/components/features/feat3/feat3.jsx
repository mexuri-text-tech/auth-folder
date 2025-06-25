import Button from "../../button/button";
import featImg from "../../../assets/image/coffee.jpg";
import './feat3.css';

export default function Feat3() {
    return (<>
        <div className="feat3">
            <figure>
                <div className="fig-image">
                    <img src={featImg} alt="" />
                </div>

                <figcaption>
                    <h1>How Mexuri Helps Businesses</h1>
                    <ol>
                        <li>Mexuri provides private and rented digital spaces (Websites) for SMEs</li>
                        <li>We provide shipping partners that would help SMEs ship products to the customers</li>
                        <li>Mexuri provides 24/7 customer care service</li>
                    </ol>

                    <div className="button">
                        <Button className="templateBtn" btnName="Learn More" />
                    </div>
                </figcaption>
            </figure>
        </div>
    </>)
}