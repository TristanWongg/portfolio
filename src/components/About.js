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
                <div className={AboutCSS.background}>
                    <div>
                        <h1>Hi, my name is Tristan Wong</h1>
                        <p>I'm a full-stack developer based in Toronto, Canada.</p>
                        <p>A curious person by nature, I love to learn new things and learn best by doing. I am constantly tackling new projects while learning new skills in the process. I pride myself on creating designs that bridge the front-end and back-end seamlessly, while providing an aesthetically pleasing and intuitive user experience.</p>
                        <p>I also enjoy my fair share of challenging and unique problems. Although I may lose sleep at night trying to crack the code, the rewarding feeling of solving something is worthwhile.</p>
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
          