import LoaderCSS from '../styles/Loader.module.css';
import { PacmanLoader } from 'react-spinners';
import { useState, useEffect } from 'react';
import { motion as m, useAnimationControls } from 'framer-motion';

function Loader() {

    const [loading, setLoading] = useState(false);
    const controls = useAnimationControls()

    async function sequence() {
        controls.set({opacity: 0})
        await controls.start({ opacity: 1, transition: {duration: 0.3} })
        await controls.start({ scale: 1.3, transition: {duration: 1.7} })
        controls.start({ translateX: '60vw', transition: {duration: 1} })
    }
    
    useEffect(() => {
        setLoading(true);
        sequence();
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        // eslint-disable-next-line
    },[]);

    return (
        <m.div 
            className={LoaderCSS.loader}
            animate = {controls}
        >
            <PacmanLoader
                color={'gold'}
                loading={loading}
                size={25}
                speedMultiplier={2}
            />
        </m.div>
    );
}
export default Loader;