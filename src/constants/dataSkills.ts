import { FaLaptopCode } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';
import { BiCodeBlock } from 'react-icons/bi';

import js from '../assets/skills/js.png';
import typescript from '../assets/skills/typescript.png';
import react from '../assets/skills/react.png';
import figma from '../assets/skills/figma.png';
import photoshop from '../assets/skills/photoshop.png';
import adobexd from '../assets/skills/adobexd.png';
import reactquery from '../assets/skills/reactquery.png';
import tailwind from '../assets/skills/tailwind.png';
import mantine from '../assets/skills/mantine.png';
import reduxtoolkit from '../assets/skills/reduxtoolkit.png';

export const dataSkills = [
  {
    title: 'Frontend ',
    icon: FaLaptopCode,
    text: 'I am able to code from scratch any template for a functional and responsive website using modern technologies.',
    images: [
      { title: 'Javascript', url: js },
      { title: 'Typescript', url: typescript },
      { title: 'React', url: react },
    ],
  },

  {
    title: 'Libraries & Frameworks',
    icon: BiCodeBlock,
    text: 'I work with libraries & frameworks to be sure that you get the best outcome possible.',
    images: [
      { title: 'React Query', url: reactquery },
      { title: 'Redux Toolkit', url: reduxtoolkit },
      { title: 'Tailwind CSS', url: tailwind },
      { title: 'Mantine', url: mantine },
    ],
  },

  {
    title: 'UI/UX Design',
    icon: MdOutlineDesignServices,
    text: 'I can design the interface for your website or application using programs like Figma, Adobe Xd, Adobe Photoshop, etc.',
    images: [
      { title: 'Figma', url: figma },
      { title: 'Adobe Photoshop', url: photoshop },
      { title: 'Adobe Xd', url: adobexd },
    ],
  },
];
