import './feat2.css';
import website from '../../../assets/image/site vid.mp4';
import person from '../../../assets/image/image_fx (3).jpg';
import dropshipping from '../../../assets/image/image_fx (2).jpg';
import Button from '../../button/button';

export default function Feature2() {
    return (
        <>
            <div className="value-prop">
                <div className="main">
                    <div className="header">
                        <p className='allP'>At Mexuri, SMEs comes first. We have different features that helps SMEs to to start and scale with ease.</p>
                        <h1>You can be <span>The Next Big Thing</span></h1>
                        <p className='mobileP'>At Mexuri, SMEs comes first. We have different features that helps SMEs to to start and scale with ease.</p>
                    </div>

                    <div className="feats">
                        <div className="web">
                            <figure>
                                <figcaption>
                                    <h1>Sell with Mexuri</h1>
                                    <p>Choose a rental website template that suits your business and start selling your products and services to people</p>

                                    <div className="button">
                                        <Button className="templateBtn" btnName="Browse our template" />
                                    </div>
                                </figcaption>

                                <div className="fig-image">
                                    <video src={website} playsInline autoPlay loop muted></video>
                                </div>
                            </figure>
                        </div>

                        <div className="others">
                            <div className="figure-grid">
                                <figure className="fig1">
                                    <div className="fig-image">
                                        <img src={person} alt="" />
                                    </div>

                                    <figcaption>
                                        <h1>Custom Business solutions</h1>
                                        <p>Looking for a better way to make your brand visible? Explore our other business solutions.</p>
                                    </figcaption>
                                </figure>

                                <figure className="fig2">
                                    <div className="fig-image">
                                        <img src={dropshipping} alt="" />
                                    </div>

                                    <figcaption>
                                        <div className="tag"><p>Coming soon</p></div>
                                        <h1>Mexuri Drop Shipping</h1>
                                        <p>Profit from an online store with minimum capital — without handling inventory, packing orders, or renting warehouse space.</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}