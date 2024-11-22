import React from 'react';
import '../Styles/Home.css';

const Home = () => {
    return (
        <div className="container home-page">
            <section className="hero">
                <h1>Hi, I'm Rabi</h1>
                <p>I am a 2nd-year student at Salymbek University in the CS-22 group.</p>
                <a href="/projects" className="hero-button">View My Work</a>
            </section>

            <section className="about" id="about">
                <h2>About Me</h2>
                <p>
                    I am a passionate and goal-oriented person with a creative approach to problem-solving.  
                    Beyond studying, I constantly learn new skills to grow both professionally and personally.
                </p>
            </section>

            <section className="skills" id="skills">
                <h2>My Skills</h2>
                <ul className="skills-list">
                    <li>HTML & CSS</li>
                    <li>JavaScript </li>
                    <li>Puthon </li>
                    <li>React.js</li>
                    <li>Git & GitHub</li>
                </ul>
            </section>


        </div>
    );
};

export default Home;