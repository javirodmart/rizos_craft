import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();
    const [sent, setSent] = useState("sent-hidden")
    const [message, setMessage] = useState("")



    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gqmd6of', 'template_pdy2rz4', form.current, 'FhyZwIw0s-cdG3y_o')
            .then((result) => {
                setSent("sent")
                setMessage("Sent Successfully. Can't Wait To Connect!")
            }, (error) => {
                console.log(error.text)
                setSent("not-sent")
                setMessage("Sorry! Something Went Wrong, Try Again")
            });
            e.target.reset()
    };

    return (
        <>
            <div className='contact'>
                <h1>Have Any Questions Or Concerns </h1>
                <form className='login' ref={form} onSubmit={sendEmail}>
                    <h1>Contact Us</h1>
                    <input type="text" placeholder='Name' name="name" />
                    <br></br>
                    <br></br>
                    <input type="email" placeholder='Email' name="email" />
                    <br></br>
                    <br></br>
                    <textarea name="message" placeholder='Message' />
                    <br></br>
                    <br></br>
                    <input type="submit" value="Send" />
                </form>
                <h1 className={sent}>{message}</h1>

            </div>

        </>
    );
};