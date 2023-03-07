import '../styles/global.css';
import DropdownCSS from '../styles/DropdownMenu.module.css';
import { useState } from 'react';
import ResumePDF from '../assets/TristanWong-Resume-2023.pdf';
import { motion as m } from 'framer-motion';

function DropdownMenu() {

    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <div className={DropdownCSS.background}>
            <m.div 
                className={`${DropdownCSS.dropdownMenu} ${openDropdown ? DropdownCSS.open : DropdownCSS.close}`}
                exit={{ opacity: 0, duration: 1 }}
            >
                    <ul className={DropdownCSS.dropdownList}>
                        <li>
                            <i className={`fa-regular fa-file ${DropdownCSS.resumeIcon}`}/>
                            <a href={ResumePDF} target="_blank" rel="noreferrer" className= {DropdownCSS.menuText}>Resume</a>
                        </li>
                        <li>
                            <i className={`fa-brands fa-github ${DropdownCSS.githubIcon}`}/>
                            <a href="https://github.com/TristanWongg" target="_blank" rel="noreferrer" className={DropdownCSS.menuText}>GitHub</a>
                        </li>
                        <li>
                            <i className={`fa-brands fa-linkedin ${DropdownCSS.linkedinIcon}`}/>
                            <a href={'https://www.linkedin.com/in/tristan-wong-7b59a913a'} target="_blank" rel="noreferrer" className={DropdownCSS.menuText}>Linkedin</a>
                        </li>
                    </ul>
            </m.div>
            <m.button 
                className={DropdownCSS.dropdownBtn}
                onClick={() => setOpenDropdown(!openDropdown)}
                initial={{ translateX: 100 }}
                animate={{ translateX: 0, transition:{type: 'spring', delay: 3, duration: 1 } }}
                exit={{ opacity: 0 }}
            >
                    {/* <i className={`fa-solid fa-angles-${openDropdown ? 'down' : 'up'}`}/> */}

                    <i className={`fa-solid ${openDropdown ? `fa-angles-down ${DropdownCSS.faAnglesDown}` : `fa-angles-up ${DropdownCSS.faAnglesUp}`}`}/>

                    <br></br>
                    <p className={`${DropdownCSS.dropdownBtnText} ${openDropdown ? DropdownCSS.hide : DropdownCSS.show}`}>Links</p>
            </m.button>
        </div>
    );
};

export default DropdownMenu;     