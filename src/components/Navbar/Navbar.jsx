import logo from '../../assets/logo.png'

import { FaCode, FaCog, FaEnvelope, FaGithub, FaHome, FaLinkedin, FaPhone, FaTwitter, FaUser } from 'react-icons/fa';
import { Link } from 'react-scroll'

import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='flex justify-between pt-12 h-14 align-center text-white'>

            <Link to="/" smooth={true} duration={500}> <img className='w-80' src={logo}></img> </Link>

            {/* menu  */}
            <ul className='hidden md:flex'>

                <li>
                    <Link className='flex align-center' to="hero" smooth={true} duration={500}>
                        <FaHome className='mr-1' /> Home
                    </Link>
                </li>
                <li className='ml-5'>
                    <Link className='flex align-center' to="about" smooth={true} duration={500}>
                        <FaUser className='mr-1' /> About
                    </Link>
                </li>
                <li className='ml-5'>
                    <Link className='flex align-center' to="skills" smooth={true} duration={500}>
                        <FaCog className='mr-1' /> Skills
                    </Link>
                </li>
                <li className='ml-5'>
                    <Link className='flex align-center' to="projects" smooth={true} duration={500}>
                        <FaCode className='mr-1' /> Projects
                    </Link>
                </li>
                <li className='ml-5'>
                    <Link className='flex align-center' to="contact" smooth={true} duration={500}>
                    <FaPhone className='mr-1' /> Contact
                    </Link>
                </li>
            </ul>
            {/* social  */}
            
            <Link to='footer'><button className='btn btn-primary'>Social links</button></Link>
            {/* <ul className='flex text-2xl'>
                <li className='t'>  <FaLinkedin><Link to="https://bd.linkedin.com/in/mahdi-mortuza"></Link></FaLinkedin>  </li>
                <li className='ml-2'> <Link to="https://github.com/mahdimortuza"><FaGithub></FaGithub></Link>  </li>
                <li className='ml-2'> <Link to="https://twitter.com/mahdi_mortuza"><FaTwitter></FaTwitter></Link>  </li>
            </ul> */}


            {/* for mobile  */}
            <div className='z-50 text-3xl fixed bottom-10 left-0 right-0 md:hidden flex justify-center text-black'>
                <ul className='flex bg-[#373737] p-2 rounded'>

                    <li className='flex align-center rounded p-2 text-[#fff] hover:bg-[#55d086]'>
                        <Link className='flex align-center' to="hero" smooth={true} duration={500}>
                            <FaHome />
                        </Link>
                    </li>
                    <li className='ml-5 flex align-center rounded text-[#fff] p-2 hover:bg-[#55d086]'>
                        <Link className='flex align-center' to="about" smooth={true} duration={500}>
                            <FaUser /> 
                        </Link>
                    </li>
                    <li className='ml-5 flex align-center rounded text-[#fff] p-2 hover:bg-[#55d086]'>
                        <Link className='flex align-center' to="skills" smooth={true} duration={500}>
                            <FaCog />
                        </Link>
                    </li>
                    <li className='ml-5 flex align-center rounded text-[#fff] p-2 hover:bg-[#55d086]'>
                        <Link className='flex align-center' to="projects" smooth={true} duration={500}>
                            <FaCode />
                        </Link>
                    </li>
                    <li className='ml-5 flex align-center rounded text-[#fff] p-2 hover:bg-[#55d086]'>
                        <Link className='flex align-center' to="contact" smooth={true} duration={500}>
                            <FaEnvelope />
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;