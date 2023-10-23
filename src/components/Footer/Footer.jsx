import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div id='footer' className='flex justify-between mt-10 pb-10 text-white'>
            <div className='social text-3xl'>
                <ul className='flex'>
                    <Link to="https://bd.linkedin.com/in/mahdi-mortuza"><li className=''><FaLinkedin></FaLinkedin> </li></Link>
                    <Link to="https://github.com/mahdimortuza"><li className='ml-2'> <FaGithub></FaGithub> </li></Link>
                    <Link to="https://twitter.com/mahdi_mortuza"><li className='ml-2'> <FaTwitter></FaTwitter> </li></Link>
                </ul>
            </div>
            <p>copyright Mahdi Mortuza || All Right Reserved</p>
        </div>
    );
};

export default Footer;