import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from "lottie-react"
import contact from "../../assets/contact.json"
import './Contact.css'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2x0wgid',
            'template_v21i85g',
            form.current,
            'w9DVjhcXXrRnM3DpU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' className='mt-36 min-h-screen'>
            
            <p className="contact-txt">Reach Me Out</p>
            <div className="">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-3/4 md:w-2/4">
                        <Lottie animationData={contact}></Lottie>

                    </div>
                    {/* form goes here  */}
                    <form ref={form} onSubmit={sendEmail}>
                        <label className='text-md'>Name:</label> <br></br>
                        <input type="text" className='mt-1 rounded p-3 text-md w-64 mb-5' placeholder='Name' name="user_name" /><br></br>
                        <label>Email</label><br></br>
                        <input type="email" className='mt-1 rounded p-3 text-md w-64 mb-5' placeholder='Email' name="user_email" /><br></br>
                        <label>Message</label><br></br>
                        <textarea placeholder='Message' className='mt-1 rounded w-64 p-3 text-md mb-5' name="message" /><br></br>
                        <input className='btn btn-primary' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;