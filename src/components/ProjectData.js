import project1 from '../assets/images/barber-app.png';
import project2 from '../assets/videos/Pong.mp4';
import project3 from '../assets/images/portfolio.png';


export const projectsArray = [
    {
        img: project1,
        title: 'Trispy Fades', 
        description: 'A full-stack web application inspired by my personal hobby that is built using the MERN stack. Users can book, retrieve, update, and delete their appointments.',
        techStack: [
            'React',
            'Axios',
            'Framer Motion',
            'CSS Modules',
            'MongoDB',
            'Express',
            'NodeJS',
            'Mongoose',
            'Railway',
            'Render'
        ],
        ref: 'https://trispyfades.onrender.com/',
        ghRef: 'https://github.com/TristanWongg/barber-app'
    },
    {
    vid: project2,
        title: 'Pong!', 
        description: 'The classic table tennis themed 2D arcade game! Game is played between the player and the CPU, up to 3.',
        techStack: [
            'C++',
            'Raylib',
            'Xcode'
        ],
        ghRef: 'https://github.com/TristanWongg/Pong'
    },
    { 
        img: project3,
        title: 'Portfolio', 
        description: 'A portfolio web app to showcase myself, my skills, and some of my projects!',
        techStack: [
            'React',
            'Framer Motion',
            'React Router',
            'CSS Modules'
        ],
        ref: 'https://tristanwongg.github.io/portfolio/',
        ghRef: 'https://github.com/TristanWongg/portfolio'
    },
];