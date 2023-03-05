import '../styles/global.css';
import ProjectsCSS from '../styles/Projects.module.css';
import Navbar from './Navbar';
import AnimateTransition from './AnimateTransition';
import DropdownMenu from './DropdownMenu';
import Loader from './Loader';
import { projectsArray } from './ProjectData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, EffectCube } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

function Projects() {

    let count = 0;

    return (
        <div className='background'>
            <Loader />
            <Navbar />
            <AnimateTransition>
            <Swiper
                className={ProjectsCSS.swiper}
                effect={"cube"}
                grabCursor={true}
                keyboard= {{ enabled: true }}
                pagination={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.90,
                }}
                modules={[EffectCube, Pagination, Keyboard]}
            >
                {projectsArray.map((project) => {
                    return (
                        <SwiperSlide>
                            <>
                                <a href={project.ref} target="_blank" rel="noreferrer"><img src={project.img} alt='IMG' className={ProjectsCSS.image}/></a>
                                
                                <div className={ProjectsCSS.text}>
                                    <a href={project.ghRef} target="_blank" rel="noreferrer">
                                        <i className={`fa-brands fa-github ${ProjectsCSS.githubIcon}`}/>
                                    </a>
                                    <p className={ProjectsCSS.description}>{project.description}</p>
                                    <h2 className={ProjectsCSS.title}>{project.title}</h2>
                                    <p className={ProjectsCSS.techStack}>
                                        {project.techStack.map((item) => {
                                            count++;
                                            if (count === project.techStack.length) {
                                                count = 0;
                                                return item;
                                            }
                                            return item + ' - ';
                                        })}
                                    </p>
                                </div>
                            </>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            </AnimateTransition> 
            <DropdownMenu />
        </div>
    );
}

export default Projects;
          