import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/Letter-N-Long.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/Personal-Portfolio/'>
            <img src ={Logo} alt="logo" />
            {/* <h4>Nathanael</h4> */}
        </Link>
        <nav>
            <NavLink 
            exact={true} 
            activeclassname="active" 
            to='/Personal-Portfolio/'
            end
            >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="about-link" 
            to="/Personal-Portfolio/about"
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="contact-link" 
            to="/Personal-Portfolio/contact"
            >
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