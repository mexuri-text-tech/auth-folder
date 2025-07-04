import Button from "../../button/button";
import './hero-2.css';

const HeroPage2 = (props) => {

    return (<>
        <div className="hero-2-container">
            <div className="hero-main">
                <div className="text">
                    <div className="header">
                        <h1>
                            {props.h1}
                        </h1>
                    </div>

                    <div className="caption">
                        <p>
                            {props.caption}
                        </p>
                    </div>

                    <div className="buttons">
                        <Button className="cta-button" btnName={props.heroBtnText} />
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default HeroPage2;