import '../../App.css';
import ProjectsCSS from './Projects.module.css';
import Navbar from '../Navbar/Navbar';
import AnimateTransition from '../AnimateTransition';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import Loader from '../Loader/Loader';

function Projects() {
    return (
        <div className='background'>
            <Loader />
            <Navbar />
            <AnimateTransition>
                <ul>
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
          