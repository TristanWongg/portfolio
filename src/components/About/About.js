import '../../App.css';
import AboutCSS from './About.module.css';
import Navbar from '../Navbar/Navbar';
import AnimateTransition from '../AnimateTransition';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import Loader from '../Loader/Loader';

function About() {
    return (
        <div className='background'>
            <Loader />
            <Navbar />
            <AnimateTransition>
                <div className={AboutCSS.aboutContainer}>
                    <h2>Hi, I'm Tristan</h2>
                    <p>Web Developer</p>
                    <br />
                    <p>I'm an ambitious junior web developer looking for an opportunities. I'm an adventurous guy who enjoys learning new things and picking up new hobbies.</p>

                    <p>Learning web development has</p>

                    <p>Outside of tech, I am an avid basketball fan, gym bro, and barber. I </p>


                    <p>
                        Skills:
                        JavaScript, HTML/CSS, React, Node,
                    </p>

                </div>
            </AnimateTransition>
            <DropdownMenu />
        </div>
    );
}

export default About;
          