import { Social } from '@/types/social';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const socials: Social[] = [
  {
    name: 'GitHub',
    icon: faGithub,
    link: 'https://github.com/SpaceTesla',
  },
  {
    name: 'LinkedIn',
    icon: faLinkedin,
    link: 'https://linkedin.com/in/shivansh-karan',
  },
  {
    name: 'Instagram',
    icon: faInstagram,
    link: 'https://instagram.com/shivanshk.dev',
  },
];

export default socials;
