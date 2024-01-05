import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

function Contact() {

    const formRef = useRef()
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l0k1vpe', 'template_mu4lueg', formRef.current, 'oxFD-aW8bFvU-ecH4')
            .then((result) => {
                formRef.current.reset()
                setSuccess(true)
            }, (error) => {
                setError(true)
            });
    };

    return (
        <div className='contact' id='contact' onSubmit={sendEmail}>

            <div className="contact-container">

                <div className="screen-header">
                    <div className="screen-header-left">
                        <div className="screen-header-button close"></div>
                        <div className="screen-header-button maximize"></div>
                        <div className="screen-header-button minimize"></div>
                    </div>
                    <div className="screen-header-right">
                        <div className="screen-header-ellipsis"></div>
                        <div className="screen-header-ellipsis"></div>
                        <div className="screen-header-ellipsis"></div>
                    </div>
                </div>

                <div className="form-container">

                    <h1>Contact Me</h1>

                    <form action="" className='contact_form' ref={formRef}>


                        <input type="text" id='name' name='name' required className='form-control' placeholder='NAME' />



                        <input type="text" id='email' name='email' required className='form-control' placeholder='EMAIL' />



                        <textarea name="message" id="message" cols="30" rows="10" placeholder='MESSAGE' className='form-control' />

                        <button className='contact_submit_btn'>Submit</button>
                        <p>{error && "Error"}</p>
                        <p>{success && "Success"}</p>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact