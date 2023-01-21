import '../App.css';
import Navbar from './Navbar';
import AnimateTransition from './AnimateTransition';
import DropdownMenu from './DropdownMenu';
import Loader from './Loader';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_1v3154q', 
            'template_8mnah6b', 
            form.current, 
            '6b_9B6WMGpRPZqftG'
        )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    return (
        <div className='background'>
            <Loader />
            <Navbar />
            <AnimateTransition>
                <div className='contact-form secondary'>
                    {/* <form ref={form} onSubmit={sendEmail}>
                        <ul className='contact-form-ul'>
                            <li>
                                <input type="text" name='name' placeholder='Name' required />
                            </li>
                            <li>
                                <input type="text" name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input type="text" name='subject' placeholder='Subject' required/>
                            </li>
                            <li>
                                <textarea type="text" name='message' placeholder='Message' required />
                            </li>
                            <li>
                                <input type="submit" className='send-btn' value='Send' />
                            </li>
                        </ul>
                    </form> */}
                    <a href="mailto:tristan.wf.wong@gmail.com" target='_blank' rel="noreferrer">MAIL</a>

                </div>
            </AnimateTransition>
            <DropdownMenu />
        </div>
    );
}

export default Contact;
          