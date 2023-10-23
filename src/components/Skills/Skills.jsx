import { FaArrowAltCircleDown, FaBootstrap, FaCss3, FaFire, FaHtml5, FaJsSquare, FaMdb, FaNode, FaReact } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Skills.css'

const Skills = () => {
    return (
        <div id='skills' className='mt-16 text-white'>
            <p className='skills'>Skills I have</p>

            <div className='grid grid-cols-2 md:grid-cols-4 text-xl mt-5'>

                <div className="flex align-center m-2">
                    <FaHtml5></FaHtml5>
                    <p className='ml-1'>HTML</p>
                </div>
                <div className="ml-2 flex align-center m-2">
                    <FaCss3></FaCss3>
                    <p className='ml-1'>CSS</p>
                </div>
                <div className="ml-2 flex align-center m-2">
                    <FaJsSquare></FaJsSquare>
                    <p className='ml-1'>JavaScript</p>
                </div>
                <div className="ml-2 flex align-center m-2">
                    <FaBootstrap></FaBootstrap>
                    <p className='ml-1'>Bootstrap</p>
                </div>
                <div className="ml-2 flex align-center m-2">
                    <FaArrowAltCircleDown></FaArrowAltCircleDown>
                    <p className='ml-1'>Tailwind</p>
                </div>
                <div className="ml-2 flex align-center m-2">
                    <FaReact></FaReact>
                    <p className='ml-1'>React</p>
                </div>
                <div className="ml-2 flex align-center m-2">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p className='ml-1'>Express</p>
                </div>
                <div className="ml-2 flex align-center m-2">
                    <FaNode></FaNode>
                    <p className='ml-1'>NodeJS</p>
                </div>
                <div className="ml-2 flex align-center m-2">
                    <FaMdb></FaMdb>
                    <p className='ml-1'>MongoDb</p>
                </div>
                <div className="ml-2 flex align-center m-2">
                    <FaFire></FaFire>
                    <p className='ml-1'>Firebase</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;