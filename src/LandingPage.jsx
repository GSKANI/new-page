
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page-root">
            {/* Half Circle Top Right */}
            <div className="half-circle-top-right"></div>

            {/* Premium Circles Decorations */}
            <div className="premium-circles circles-top-left">
                <div className="circle circle-solid"></div>
                <div className="circle circle-striped"></div>
                <div className="circle circle-outline"></div>
            </div>

            <div className="premium-circles circles-bottom-right">
                <div className="circle circle-solid"></div>
                <div className="circle circle-striped"></div>
                <div className="circle circle-outline"></div>
            </div>

            {/* Main container */}
            <div className="container">
                {/* Logo */}
                <div className="logo">
                    <div className="logo-icon">
                        <div className="logo-circle">
                            <span className="logo-letter">C</span>
                        </div>
                    </div>
                    <div className="logo-text">COREBERLY</div>
                </div>

                {/* Main content */}
                <div className="main-content">
                    <h1 className="launching-text">LAUNCHING <span>SOON</span></h1>
                    <div className="divider"></div>
                    <p className="subtitle">Connect with us</p>

                    {/* Social links */}
                    <div className="social-links">
                        <a href="https://coreberly.in" className="social-link" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                </svg>
                            </div>
                            <span className="social-text">Website</span>
                        </a>

                        <a href="https://www.instagram.com/coreberly/?utm_source=ig_web_button_share_sheet" className="social-link" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.2 2C5.6 4 4 5.6 4 7.6v8.8C4 18.4 5.6 20 7.6 20h8.8c2 0 3.6-1.6 3.6-3.6V7.6C20 5.6 18.4 4 16.4 4H7.6m9.65 1.5c.54 0 .98.44.98.98s-.44.98-.98.98-.98-.44-.98-.98.44-.98.98-.98M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-1.34-3-3-3z" />
                                </svg>
                            </div>
                            <span className="social-text">Instagram</span>
                        </a>

                        <a href="https://www.linkedin.com/in/coreberly-a820713a9" className="social-link" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                </svg>
                            </div>
                            <span className="social-text">LinkedIn</span>
                        </a>

                        <a href="https://www.facebook.com/share/1Gw3V4ashV/" className="social-link" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </div>
                            <span className="social-text">Facebook</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
