import '../../App.css';
import HomeCSS from './Home.module.css';
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';

function Home() {

    return (
        <div className={`background ${HomeCSS.background}`}>
            <m.h1
                className={HomeCSS.name}
                initial = {{ opacity: 0 }}
                animate = {{ opacity: 1 }}
                exit = {{ opacity: 0, transition: {duration: .75} }}
                transition = {{ duration: 1.5, ease:"easeInOut" }}
            >
                Tristan Wong
            </m.h1>

            <Link to='/about'>
                <m.button 
                    className={HomeCSS.homeBtn}
                    initial = {{ opacity: 0, translateY: 50 }}
                    animate = {{ opacity: 1, translateY: 0 }}
                    exit = {{ opacity: 0, transition: {delay: 0, duration: .75} }}
                    transition = {{ delay: 1, duration: 1.2 }}
                >
                    Enter
                </m.button>
            </Link>  
        </div>
    );
}

export default Home;