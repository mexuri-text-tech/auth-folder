import './signup.css';
import signupPic from "../../assets/image/team.jpg";
import logo from '../../assets/SVG/Primary(White).svg';
import { useState } from "react";
import { fetchAndSaveUser } from "../../app/fetchAndSaveUser";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    console.log("VITE_REACT_APP_API_URL:", import.meta.env.VITE_REACT_APP_API_URL);
    const googleAuth = () => {
        const googleUrl = `${import.meta.env.VITE_REACT_APP_API_URL}/auth/google`;
        window.location.href = googleUrl;
    };

    const [errorMessage, setError] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const clearErrors = () => {
        setError("");
        setErrorPassword("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        clearErrors();

        // Basic validation
        if (!email) {
            setError("Please enter your email address");
            return;
        }
        if (!email.includes('@')) {
            setError("Email address requires '@' symbol");
            return;
        }
        if (!password) {
            setErrorPassword("Please enter your password");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || 'Signup failed');
            } else {
                // Save user data locally
                fetchAndSaveUser();
                // Redirect on successful signup
                window.location.href = '/';
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-page">
            <div className="main">
                <div className="right">
                    <div className="main">
                        <img src={signupPic} alt="signup" />
                    </div>
                </div>
                <div className="left">
                    <div className="logo">
                        <img src={logo} alt="mexuri logo" />
                    </div>

                    <div className="header">
                        <h1>Go ahead and set up your account</h1>
                        <p>Please enter your details to get started</p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="email" id={errorMessage ? 'input-error' : ''}>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                            </div>
                            <div className="email-input">
                                <input
                                    type="email"
                                    name="email"
                                    spellCheck="false"
                                    autoCorrect="off"
                                    id="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <span className="emailSpan">{errorMessage}</span>

                        <div className="submit-button">
                            <button type="submit" className="loginBtn" disabled={loading}>
                                {loading ? 'Creating account...' : 'Create your account'}
                            </button>
                        </div>

                        <div className="or">
                            <hr />or<hr />
                        </div>

                        <div className="alt-auth">
                            <button type="button" onClick={googleAuth}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                <span>Sign up with Google</span>
                            </button>
                        </div>
                        <div className="signup-alt">
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

// Error boundary wrapper
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h2>Something went wrong in Signup component.</h2>;
        }
        return this.props.children;
    }
}

function SignupWrapper() {
    return (
        <ErrorBoundary>
            <Signup />
        </ErrorBoundary>
    );
}

export default SignupWrapper;
