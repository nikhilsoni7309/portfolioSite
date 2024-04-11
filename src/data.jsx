import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/quizzical-img.png';
import Work2 from './assets/disneyplus-img.png';
import Work3 from './assets/tenzies-img.png';
import Work4 from './assets/memeGenerator-img.png';
import Work5 from './assets/portfolio-img.png';
import Work6 from './assets/rockpaperscissors-img.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Nikhil',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Soni',
  },

  {
    id: 3,
    title: 'Education : ',
    description: 'B.Tech in CSE',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Lucknow, India',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91 9140812011',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'nikhilsoni7309@gmail.com',
  },

  {
    id: 9,
    title: 'WhatsApp : ',
    description: '9140812011',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'English, Hindi',
  },
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '11+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '15+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '200+',
    title: 'Leetcode <br /> Questions',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2018 - PRESENT',
    title: 'Web Developer <span> Envato </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2013 - 2018',
    title: 'UI/UX Designer <span> Themeforest </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2005 - 2013',
    title: 'Consultant <span> Videohive </span>',
    desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015',
    title: 'Engineering Degree <span> Oxford University </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2012',
    title: 'Master Degree <span> KIEV University </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2009',
    title: 'Bachelor Degree <span> Tunis High School </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '25',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '66',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '95',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Angular',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '45',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Quizzical',
    details: [
      {
        icon: <FiExternalLink />,
        title: <a href="https://quizzical-pro.netlify.app" target="_blank">Preview</a>,
      },
      {
        icon: <FaCode />,
        title: <a href="https://github.com/nikhilsoni7309/quizzical" target="_blank">Code</a>,
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Disney Plus',
    details: [
      {
        icon: <FiExternalLink />,
        title: <a href="https://disneyplus-clone-6f5aa.web.app" target="_blank">Preview</a>,
      },
      {
        icon: <FaCode />,
        title: <a href="https://github.com/nikhilsoni7309/disneyPlus" target="_blank">Code</a>,
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Tenzies',
    details: [
      {
        icon: <FiExternalLink />,
        title: <a href="https://tenzies-pro.netlify.app" target="_blank">Preview</a>,
      },
      {
        icon: <FaCode />,
        title: <a href="https://github.com/nikhilsoni7309/tenziesGame" target="_blank">Code</a>,
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Meme Generator',
    details: [
      {
        icon: <FiExternalLink />,
        title: <a href="https://memegenerator-pro.netlify.app" target="_blank">Preview</a>,
      },
      {
        icon: <FaCode />,
        title: <a href="https://github.com/nikhilsoni7309/memeGenerator" target="_blank">Code</a>,
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Sample Portfolio',
    details: [
      {
        icon: <FiExternalLink />,
        title: <a href="https://sampleportfolio-pro.netlify.app" target="_blank">Preview</a>,
      },
      {
        icon: <FaCode />,
        title: <a href="https://github.com/nikhilsoni7309/sample-portfolio" target="_blank">Code</a>,
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Rock Paper Scissors',
    details: [
      {
        icon: <FiExternalLink />,
        title: <a href="https://rockpaperscissors-pro.netlify.app" target="_blank">Preview</a>,
      },
      {
        icon: <FaCode />,
        title: <a href="https://github.com/nikhilsoni7309/rock-paper-scissors" target="_blank">Code</a>,
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 90%, 58%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
