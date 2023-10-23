import web from "../../assets/Comp 2.json"
import Lottie from "lottie-react"
import './Hero.css'
import resume from "../../assets/Mahdi Mortuza_Resume.pdf"

const Hero = () => {
    return (
        <div name="hero" className="mt-10">
            <div className='text-white md:flex align-center justify-between'>
                <div>
                    <p className='intro bg-[#55d086] w-48 text-center text-black text-4xl px-1 py-0 rounded-sm'>MERN Stack Developer</p>
                    <h1 className='about mt-7 text-3xl'>I bring websites <br></br> from thought to form.</h1>
                    <p className='description-txt mt-10'>Crafting websites is my passion, <br></br>and I pour my creativity into every pixel.</p>
                    <button className="btn btn-outline btn-primary mt-5"><a href={resume} download={resume}> Download Resume</a></button>
                </div>
                <div className="hidden md:block w-2/4">
                    <Lottie animationData={web}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Hero;