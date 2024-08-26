import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col items-center justify-center py-10 mt-20 text-text">
        <div className="mb-4 text-center">
            <p className="text-lg mt-2">&copy; {currentYear} Daniel Stephen Celestial. All Rights Reserved.</p>
        </div>

        <div className="flex space-x-4 mt-2">
            <a
            href="https://github.com/dscelestial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-secondary transition duration-300"
            >
            <FaGithub size={30} />
            </a>
            <a
            href="https://www.linkedin.com/in/dscelestial/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-secondary transition duration-300"
            >
            <FaLinkedin size={30} />
            </a>
            <a
            href="https://www.facebook.com/dsCelestial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-secondary transition duration-300"
            >
            <FaFacebook size={30} />
            </a>
            <a
            href="https://www.instagram.com/dscelestial/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-secondary transition duration-300"
            >
            <FaInstagram size={30} />
            </a>
        </div>
        </footer>
    );
};

export default Footer;
