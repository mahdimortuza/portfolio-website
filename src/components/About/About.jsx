import { FaAngular, FaJava, FaJs, FaReact } from 'react-icons/fa';
import './About.css'

const About = () => {
    return (
        <div id='about' className="mt-10 w-11/12">
            <div className='text-white md:flex'>
                <div className=''>

                    {/* item 1  */}
                    <div className="bg-[#373737] p-7 rounded-sm flex">
                        <div>
                            <h6 className="text-[#55d086] react-txt">React Developer</h6>
                            <p className='react-des mt-3'>Expertise in FrontEnd Development.</p>
                        </div>
                        <div className='ml-2'> <FaReact className='text-3xl text-[#55d086]'></FaReact> </div>
                    </div>

                    {/* item 2  */}
                    <div className="bg-[#373737] mt-2 p-7 rounded-sm flex">
                        <div>
                            <h6 className="text-[#55d086] react-txt">JavaScript Developer</h6>
                            <p className='react-des mt-3'>Comfortable in Vanilla JavaScript.</p>
                        </div>
                        <div className='ml-2'> <FaJs className='text-3xl text-[#55d086]'></FaJs> </div>

                    </div>

                    {/* item 3  */}
                    <div className="bg-[#373737] mt-2 p-7 rounded-sm flex">
                        <div>
                            <h6 className="text-[#55d086] react-txt">MERN Stack Developer</h6>
                            <p className='react-des mt-3'>Expertise in Full Stack Development.</p>
                        </div>
                        <div className='ml-2'> <FaAngular className='text-3xl text-[#55d086]'></FaAngular> </div>

                    </div>
                </div>

                {/* about text  */}
                <div className='mx-auto md:w-1/2 md:ml-16 mt-16'>
                    <p className='intro'>Introduce</p>
                    <h2 className='greeting mt-8 text-xl'>Hello! I'm Mahdi <br></br> Mortuza</h2>
                    <h6 className='des mt-3'>Passionate full stack web developer <br></br> skilled in front-end and back-end technologies. <br></br>
                    <br></br>
                    Willing to join a dynamic talented team to learn <br></br>new things and extract my capability. </h6>
                </div>
            </div>
        </div>
    );
};

export default About;