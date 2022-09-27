//import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Home from '../Home';
import './index.scss';

const Lay = () => {
    return (
        <div className="App">
            <Sidebar />
            <Home />
            <div className="page">
            </div>
        </div>
    )
}

export default Lay