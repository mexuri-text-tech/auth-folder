import Button from "../../button/button";
import './hero.css';

const HeroPage1 = (props) => {

    return (<>
        <div className="hero-container">
            <div className="hero-main">
                <div className="text">
                    <div className="header">
                        <h1>
                            {props.h1}
                            <span>
                                {props.span}
                            </span>
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

export default HeroPage1;