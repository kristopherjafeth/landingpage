//  icons
import {

  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import ConstruteczllcIcon from './assets/img/brands/construteczllc.png';
import ConstruteczIcon from './assets/img/brands/construtecz.png';
import PetronavalIcon from './assets/img/brands/petronaval.png';
import OFIcon from './assets/img/brands/of.png';
import DapecaIcon from './assets/img/brands/dapeca.png';
import AtlanticIcon from './assets/img/brands/atlantic.png';
import SumatecaIcon from './assets/img/brands/sumateca.png';
import SegetmIcon from './assets/img/brands/segetm.png';
import NcIcon from './assets/img/brands/nc.png';

// projects images
import Project1 from './assets/img/projects/suministrodepersonal.jpg';
import Project2 from './assets/img/projects/tendidodelineas.jpg';
import Project3 from './assets/img/projects/transportelacustre.jpg';
import Project4 from './assets/img/projects/pozos.jpg';
import Project5 from './assets/img/projects/buceo.jpg';
import Project6 from './assets/img/projects/obrasciviles.jpg';
import Project7 from './assets/img/projects/guayafina.jpg';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'Inicio',
    href: 'home',
  },
  {
    name: 'Sobre nosotros',
    href: 'about',
  },
  {
    name: 'Servicios',
    href: 'servicios',
  },

  {
    name: 'Contacto',
    href: 'contact',
  },
];


// companies
export const brands = [
  {
    img: ConstruteczllcIcon,
    href: '',
  },
  {
    img: ConstruteczIcon,
    href: '',
  },
  {
    img: PetronavalIcon,
    href: '',
  },
  {
    img: OFIcon,
    href: '',
  },
  {
    img: DapecaIcon,
    href: '',
  },
  {
    img: AtlanticIcon,
    href: '',
  },
  {
    img: SumatecaIcon,
    href: '',
  },
  {
    img: SegetmIcon,
    href: '',
  },
  {
    img: NcIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Servicio de Suministro de Personal Calificado',
    category: 'Servicios Lacustres',
  },
  {
    id: '2',
    image: Project2,
    name: 'Servicio de tendido de líneas de tubería convencional y flexible',
    category: 'Servicios Lacustres',
  },
  {
    id: '3',
    image: Project3,
    name: 'Servicio de Transporte Lacustre',
    category: 'Servicios Lacustres',
  },
  {
    id: '4',
    image: Project4,
    name: 'Servicio de Mantenimiento de Pozos e Instalaciones Petroleras',
    category: 'Servicios Lacustres',
  },
  {
    id: '5',
    image: Project5,
    name: 'Servicio de Buceo Industrial',
    category: 'Servicios Lacustres',
  },
  {
    id: '6',
    image: Project6,
    name: 'Servicio de Diseño y Construcción de Obras Civiles y Mecánicas',
    category: 'Servicios Lacustres',
  },
  {
    id: '7',
    name: '',
    category: '',
  },
  {
    id: '8',
    image: Project7,
    name: 'Servicio de Guaya Fina',
    category: 'Servicios Lacustres',
  },
];

// projects
export const projectsNav = [
  {
    name: 'Servicios Lacustres',
  },

];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Tienes una Pregunta?',
    subtitle: 'Estamos atentos a tu mensaje.',
    description: 'info@consorcioconstrutecz.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Ubicación',
    subtitle: 'Maracaibo, Venezuela',
    description: 'Reserva una cita',
  },
];
