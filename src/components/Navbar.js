import '../App.css';
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';

function Navbar() {
    return (
        <m.div
            className='navbar'
            initial = {{ opacity: 0, translateY:  -50 }}
            animate = {{ opacity: 1, translateY: 0, transition:{delay: 3, duration: 0.75} }}
            exit = {{ translateY: -80 }}
        >
            <Link to={'/'}>
                <button className='home-btn primary'>
                    TW
                </button>
            </Link>

            <div className='btns'>
                <Link to='/about' ><button className='btn primary'>About</button></Link>
                <Link to='/projects' ><button className='btn primary'>Projects</button></Link>
                <Link to='/contact' ><button className='btn primary'>Contact</button></Link>
            </div>
        </m.div>
    );
}

export default Navbar;