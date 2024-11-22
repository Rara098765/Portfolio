import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p>&copy; {new Date().getFullYear()} Rabiga Misir;)</p>
                <div className="footer__links">
                    <a href="https://www.instagram.com/_toblik_/?next=%2F" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                    <a href="https://github.com/Rara098765" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://web.telegram.org/k/" target="_blank" rel="noopener noreferrer">
                        Telegram
                    </a>
                </div>
                <div className="footer__contact">
                    <p><strong>Phone:</strong> <a href="tel:+996 505 22 81 22">+996 505 22 81 22</a></p>
                    <p><strong>Email:</strong> <a href="email:mirovarabiga@gmail.com">mirovarabiga@gmail.com</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;