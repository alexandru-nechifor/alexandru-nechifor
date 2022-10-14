import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillFolder,
  AiOutlineMail,
} from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';

export const links = [
  {
    name: 'Home',
    icon: FaHome,
    href: '#home',
    id: '1-home',
  },
  {
    name: 'Skills',
    icon: GiSkills,
    href: '#skills',
    id: '2-skills',
  },
  {
    name: 'Projects',
    icon: AiFillFolder,
    href: '#projects',
    id: '3-projects',
  },
  {
    name: 'Contact',
    icon: AiOutlineMail,
    href: '#contact',
    id: '4-contact',
  },
];

export const socialMedia = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alexandru-nechifor-b08177153/',
    icon: AiFillLinkedin,
    id: '2-Linkedin',
  },
  {
    name: 'Github',
    url: 'https://github.com/alexandru-nechifor',
    icon: AiOutlineGithub,
    id: '3-Github',
  },
];
