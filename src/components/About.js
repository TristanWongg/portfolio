import '../App.css';
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
                <div className='about-container secondary'>
                    <p className='special'>
                    Hi! My name is 
                    </p>
                    <p>Tristan</p>
                    <p>I'm an ambitious junior web developer looking for an opportunities. I'm an adventurous guy who enjoys learning new things and picking up new hobbies.</p>

                    <p>Learning web development has</p>

                    <p>Outside of tech, I am an avid basketball fan, gym bro, and barber. I </p>


                    <p>
                        Most Current Skills:
                        JavaScript, HTML/CSS, React, Node,
                    </p>

                    <p>
                        Previously Used Skills:
                        Java, C++, SQL, Kotlin, Machine Learning
                    </p>

                </div>
            </AnimateTransition>
            <DropdownMenu />
        </div>
    );
}

export default About;
          