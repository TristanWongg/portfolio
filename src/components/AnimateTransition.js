import {motion as m } from 'framer-motion';


function AnimateTransition({ children }) {
    return (
                <m.div
                    initial = {{ opacity: 0 }}
                    animate = {{ opacity: 1, transition:{delay: 3, duration: 0.75} }}
                    exit = {{ opacity: 0, transition:{duration: 0.5 }}}
                >
                    {children}
                </m.div>
    );
};

export default AnimateTransition;
          