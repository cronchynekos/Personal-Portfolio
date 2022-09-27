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
                    Aspiring Software Engineer
                </h1>
           
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home