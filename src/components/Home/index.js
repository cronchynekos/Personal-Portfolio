import { Link } from 'react-router-dom' 
import './index.scss';
import App from './three'
import React from 'react';
// import { useEffect } from 'react';
// import * as THREE from 'three';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import SceneInit from './SceneInit';
// import {ReactDOM} from 'react-dom'

const Home = () => {


    return (
        <div className = "container home-page">\
            <canvas id="myThreeJsCanvas" />

            <App />

            <div className="text-zone">
                <h1>Hey There, 
                    <br />
                    I'm Nathanael
                    <br />
                </h1>
                <h2>
                    Aspiring Software Engineer
                </h2>
                <Link to="/Personal-Portfolio/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>

    )
}

export default Home