import project1 from '../assets/images/barber-app.png';
import project2 from '../assets/images/portfolio.png';


export const projectsArray = [
    {
        img: project1,
        title: 'Trispy Fades', 
        description: 'A barber app inspired by my personal hobby that is built using the MERN stack. Users can book, retrieve, update, and delete their appointments.',
        techStack: [
            'React',
            'React DatePicker',
            'Axios',
            'Framer Motion',
            'MomentJS',
            'EmailJS',
            'SwiperJS',
            'CSS Modules',
            'MongoDB',
            'Express',
            'NodeJS',
            'Mongoose',
        ],
        ref: 'https://trispyfades.onrender.com/',
        ghRef: 'https://github.com/TristanWongg/barber-app'
    },
    { 
        img: project2,
        title: 'Portfolio', 
        description: 'A portfolio web app to showcase myself, my skills, and some of my projects!',
        techStack: [
            'React',
            'Framer Motion',
            'React Router',
            'SwiperJS',
            'EmailJS',
            'React Spinners',
        ],
        ref: 'https://tristanwongg.github.io/portfolio/',
        ghRef: 'https://github.com/TristanWongg/portfolio'
    },
];