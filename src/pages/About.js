import React from 'react';
import '../Styles/About.css';

const About = () => {
    return (
        <div className="about-container">
            <img src="/images/my_photo.jpg" alt="My Photo" className="about-image" />
            <h1 className="about-title">My name is Rabiga</h1>
            <p className="about-text">
                Hello everyone! 
                <br />
                I am a passionate and purposeful person with a creative approach and the ability to solve problems.
                <br />
                I am a second-year student at Salymbek University, where I continue to develop my knowledge and skills. I bring a combination of technical expertise and creative vision to every project I work on, always striving for high-quality results that exceed expectations.
                <br />
                Besides studying, I am constantly learning something new in order to grow professionally and personally.
                <br />
                I believe in the power of collaboration, innovation, and perseverance. Let's create something amazing together!
            </p>
        </div>
    );
};

export default About;
