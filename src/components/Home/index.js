import { Link } from 'react-router-dom' 
import './index.scss';

const Home = () => {


    return (
        <div className ="container home-page">
            <div className="text-zone">
                <h1>Hey There, 
                    <br />
                    I'm Nathanael
                    <br />
                </h1>
                <h2>
                    Aspiring Software Engineer
                </h2>
           
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home