import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
// import Home from '../Home';
// import About from '../About';
import './index.scss';

const Lay = () => {
    return (
        <div className="App">
            <Sidebar />
            <Outlet />
            {/* <Home /> */}
            {/* <About /> */}
        </div>
    )
}

export default Lay