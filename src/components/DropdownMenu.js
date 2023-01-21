import { useState } from 'react';
import ResumePDF from '../assets/TristanWong_Resume_2022.pdf';
import { motion as m } from 'framer-motion';


function DropdownMenu() {

    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <div className="dropdown-container primary">
            <m.div 
                className={`dropdown-menu-${openDropdown ? 'open' : 'close'}`}
                exit={{ opacity: 0, duration: 1 }}
            >
                    <ul className='dropdown-list'>
                        <li>
                            <i className="fa-regular fa-file menu-icon"/>
                            <a href={ResumePDF} target="_blank" rel="noreferrer" className='primary'>Resume</a>
                        </li>
                        <li>
                            <i className="fa-brands fa-github menu-icon"></i>
                            <a href="https://github.com/TristanWongg" target="_blank" rel="noreferrer" className='primary'>GitHub</a>
                        </li>
                        <li>
                            <i className="fa-brands fa-linkedin menu-icon"></i>
                            <a href={'https://www.linkedin.com/in/tristan-wong-7b59a913a'} target="_blank" rel="noreferrer" className='primary'>Linkedin</a>
                        </li>
                    </ul>
            </m.div>
            <m.button 
                className="dropdown-btn primary" 
                onClick={() => setOpenDropdown(!openDropdown)}
                initial={{ translateX: 100 }}
                animate={{ translateX: 0, transition:{type: 'spring', delay: 3, duration: 1 } }}
                exit={{ opacity: 0 }}
            >
                    <i className={`fa-solid fa-angles-${openDropdown ? 'down' : 'up'}`}/>
                    <br></br>
                    <p className={`dropdown-btn-text-${openDropdown ? 'hide' : 'show'}`}>Links</p>
            </m.button>
        </div>
    );
};

export default DropdownMenu;     