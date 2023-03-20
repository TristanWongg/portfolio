import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesComponent = (props) => {
  
  const options = useMemo(() => {
    return {
      fullScreen: {
        enable: true, 
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, 
            mode: "push",
          },
          onHover: {
            enable: true, 
            mode: "repulse", 
          },
        },
        modes: {
          push: {
            quantity: 3, 
          },
          repulse: {
            distance: 100, 
          },
        },
      },
      particles: {
        links: {
          enable: true, 
          distance: 200, 
        },
        move: {
          enable: true, 
          speed: { min: 1, max: 5 }, 
        },
        opacity: {
          value: { min: 0.3, max: 0.6 },
        },
        size: {
          value: { min: 2, max: 4 },
        },
        number: {
          value: 40,
        },
        color: {
          value: 'random',
        }
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;