import '../styles/global.css';
import ContactCSS from '../styles/Contact.module.css';
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
                <div className={ContactCSS.contactContainer}>
                    <div className={ContactCSS.emailContainer}>
                        <h4 className={ContactCSS.h4}>Contact me via your device's E-mail Client</h4>
                        <a className={ContactCSS.emailLink} href="mailto:tristan.wf.wong@gmail.com" target='_blank' rel="noreferrer">tristan.wf.wong@gmail.com</a>
                        <h4 className={ContactCSS.h4}>Or via the Contact Form below!</h4>
                    </div>

                    <hr/>
                    
                    <form ref={form} onSubmit={sendEmail} className={ContactCSS.contactForm}>
                        <input type="text" name='name' placeholder='Name' className={ContactCSS.formName} required />
                    
                        <input type="text" name='email' placeholder='Email' className={ContactCSS.formEmail} required />
                
                        <input type="text" name='subject' placeholder='Subject' className={ContactCSS.formSubject} required/>
                    
                        <textarea type="text" name='message' placeholder='Message' className={ContactCSS.formMessage} required />
                        
                        <input type="submit" className={ContactCSS.sendBtn} value='Send' />
                    </form>
                </div>
            </AnimateTransition>
            <DropdownMenu />
        </div>
    );
}

export default Contact;
          