import React from "react";

export default function MainContent() {
    return (
        <div>
            <div className="container main-content-container">
                <div className="about-content">
                    <h2 className="main-content-title">About</h2>
                    <p className="main-content-p">I am a frontend developer with a particular interest in making things
                        simple and automating daily tasks. I try to keep up with new technologies, 
                        and am always looking for new things to learn.</p>
                </div>
                <div className="interests-content">
                    <h2 className="main-content-title">Interests</h2>
                    <p className="main-content-p">Fitness. Guitar Player. Reader. Entrepreneurship.
                        Self-improvement. Travel fanatic</p>
                </div>
            </div>
        </div>
    )
}