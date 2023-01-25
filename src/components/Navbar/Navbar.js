import '../../App.css';
import NavbarCSS from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';

function Navbar() {
    return (
        <m.div
            className={NavbarCSS.navbar}
            initial = {{ opacity: 0, translateY:  -50 }}
            animate = {{ opacity: 1, translateY: 0, transition:{delay: 3, duration: 0.75} }}
            exit = {{ translateY: -80 }}
        >
            <Link to={'/'}>
                <button className={NavbarCSS.homeBtn}>
                    TW
                </button>
            </Link>

            <div className={NavbarCSS.btns}>
                <Link to='/about' ><button className={NavbarCSS.btn}>About</button></Link>
                <Link to='/projects' ><button className={NavbarCSS.btn}>Projects</button></Link>
                <Link to='/contact' ><button className={NavbarCSS.btn}>Contact</button></Link>
            </div>
        </m.div>
    );
}

export default Navbar;