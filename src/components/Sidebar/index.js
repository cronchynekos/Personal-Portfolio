import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src ={LogoS} alt="logo" />
            <img className ="sub-logo" src ={LogoSubtitle} alt="Nathan Kim" />
        </Link>
        <nav>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="about-link" 
            to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="contact-link" 
            to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/nathanael-kim-800448170/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/cronchynekos"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/nathankimy/?hl=en/"
                >
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar