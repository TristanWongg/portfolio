import '../App.css';
import Navbar from './Navbar';
import AnimateTransition from './AnimateTransition';
import DropdownMenu from './DropdownMenu';
import Loader from './Loader';

function Projects() {
    return (
        <div className='background'>
            <Loader />
            <Navbar />
            <AnimateTransition>
                <ul className='secondary'>
                    <li>PROJECTS</li>
                    <li>PROJECTS</li>
                    <li>PROJECTS</li>
                    <li>PROJECTS</li>
                    <li>PROJECTS</li>
                    <li>PROJECTS</li>
                    <li>PROJECTS</li>
                    <li>PROJECTS</li>
                    <li>PROJECTS</li>
                    <li>PROJECTS</li>
                    <li>PROJECTS</li>
                    <li>PROJECTS</li>
                </ul>
            </AnimateTransition> 
            <DropdownMenu />
        </div>
    );
}

export default Projects;
          