import './profileSetup.css';
import { Link } from 'react-router-dom';

export default function ProfileSetupForm() {
    return (<>
        <div className="form-class">
            <form action="#">
                <div className="head-class">
                    <div className="header">
                        <h1>Profile Setup</h1>
                    </div>

                    <div className="para">
                        <p>Fill the form to setup your profile</p>
                    </div>
                </div>

                <div className="input-class">
                    <div className="name">
                        <input type="text" placeholder="Business/Brand Name" />
                    </div>

                    <div className="business-sector">
                        <select id="busines" required>
                            <option value="" disabled selected hidden>What do you do?</option>
                            <option value="cosmetics" id="cosmetics">Cosmetics and Hygiene Produsts</option>
                            <option value="fashion" id="fashion">Fashion</option>
                            <option value="tech Sales" id="tech-sales">Tech Sales</option>
                            <option value="e-commerce" id="ecommerce">Retail/Wholesale/Preorder</option>
                            <option value="food" id="food">Food/Catering Services</option>
                            <option value="Home Services" id="home">Home Services</option>
                            <option value="Real Estate" id="Estate">Real Estate</option>
                            <option value="others" id="others">Others</option>
                        </select>
                    </div>

                    <div className="business-type">
                        <select id="busines" required>
                            <option disabled selected hidden>What is your labour force like?</option>
                            <option value="Personal brand" id="brand">I work alone</option>
                            <option value="Small Scale Business" id='small'> I have a team of 2 - 8 people</option>
                            <option value="Medium Scale Business" id='medium'>I have a team of 10 - 25 people</option>
                            <option value="Large Scale Business" id='large'>I have a team of more than 30 people</option>
                        </select>
                    </div>
                </div>

                <div className="checkbox">
                    <input type="checkbox" id="privacy" name="privacy" />
                    <label htmlFor="privacy">By clicking this, you agree to our <Link>Privacy Policy</Link></label>

                </div>

                <div className="submitBtn">
                    <button type="submit" id="submit">Next</button>
                </div>
            </form>
        </div>
    </>)
}