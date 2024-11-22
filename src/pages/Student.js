import React from 'react';

const Students = () => {
    return (
        <div className="container">
            <h1>Our Students</h1>
            <p>Get to know the inspiring stories of our amazing students:</p>
            <section className="student-profiles">
                <div className="student">
                    <img src="/Images/1.jpeg" alt="Student 1" className="student-image" />
                    <h3>Alex Johnson</h3>
                    <p>"This course changed my life! I learned so much and gained real confidence."</p>
                </div>
                <div className="student">
                    <img src="/Images/2.jpeg" alt="Student 2" className="student-image" />
                    <h3>Sarah Lee</h3>
                    <p>"The community here is incredible. I always feel supported and motivated."</p>
                </div>
                <div className="student">
                    <img src="/Images/3.jpeg" alt="Student 3" className="student-image" />
                    <h3>Michael Chen</h3>
                    <p>"I landed my first tech job thanks to the skills I learned in this program!"</p>
                </div>
            </section>
        </div>
    );
};

export default Students;