import '../styles/global.css';
import AboutCSS from '../styles/About.module.css';
import Navbar from './Navbar';
import AnimateTransition from './AnimateTransition';
import DropdownMenu from './DropdownMenu';
import Loader from './Loader';

function About() {
    return (
        <div className='background'>
            <Loader />
            <Navbar />
            <AnimateTransition>
                <div className={AboutCSS.aboutContainer}>
                    <div>
                        <h1>Hi, my name is Tristan Wong</h1>
                        <p>I'm a web developer based in Toronto, Canada.</p>
                        <p>As a curious person by nature, I am an avid learner and enjoy picking up new skills and technologies. I have developed various applications that include a full-stack E-commerce booking platform, a simple arcade game, and other front-end projects.</p>
                        <p>I'm passionate about creating functional applications with an aesthetically pleasing and intuitive interface that provide users with an exceptional experience.</p>
                    </div>
                    <div className={AboutCSS.footer}>
                        <p>
                            A few technologies that I've been working with recently:
                        </p>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>HTML/CSS</li>
                            <li>MongoDB</li>
                            <li>Express</li>
                            <li>NodeJS</li>
                            <li>Railway</li>
                            <li>Render</li>
                        </ul>
                    </div>
                </div>
            </AnimateTransition>
            <DropdownMenu />
        </div>
    );
}

export default About;
          