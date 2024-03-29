import './index.scss';
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import Logo from '../../assets/images/Letter-N-Long.png'
import Logo from '../../assets/images/LetterN.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faBars, faClose, faClipboard} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);

    return (

    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src ={Logo} alt="logo" />
            {/* <h4>Nathanael</h4> */}
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink 
            exact={true} 
            activeclassname="active" 
            to='/'
            end
            >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="about-link" 
            to="/about"
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="portfolio-link" 
            to="/portfolio"
            >
                <FontAwesomeIcon icon={faClipboard} color="#4d4d4e" />
            </NavLink>

            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="contact-link" 
            to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <FontAwesomeIcon 
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#ffd700"
            size="3x"
            className='close-icon' />
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
        <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
    )
}

export default Sidebar