import './index.scss'

const About = () => {
    // var c = document.getElementById("myThreeJsCanvas");
    // var context = c.getContext('2d');
    // context.clearRect(0, 0, c.width, c.height);
    return(
        <div className='container about-page'>
            <div className ='BGFill'></div>
            <div className='text-zone'>
                <h1>
                    About Me
                </h1>
                <p>
                    I am an aspiring Software Engineering student with an expected graduation of May 2023. 
                    Currently committed to creating sleek and modern web applications using React.
                </p>
                <p>
                    Right now, I am focused on creating mobile applications as well as mobile responsive webpages.
                </p>
                <p>
                    A few other things about me are that I enjoy photography and video editing as well as a variety of different sports including:
                    tennis, pickleball, basketball and badminton.
                </p>
            </div>


            <div className="cont">
            <h1 className="title-text">Skills</h1>

            <div className="skill-box">
                <span className="title">HTML</span>
                <div className="skill-bar">
                    <span className="skill-per html">
                        <span className="tooltip">95%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">CSS</span>
                <div className="skill-bar">
                    <span className="skill-per css">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">JavaScript</span>
                <div className="skill-bar">
                    <span className="skill-per javascript">
                        <span className="tooltip">60%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">NodeJS</span>
                <div className="skill-bar">
                    <span className="skill-per nodejs">
                        <span className="tooltip">40%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">ReactJS</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">ExpressJS</span>
                <div className="skill-bar">
                    <span className="skill-per expressjs">
                        <span className="tooltip">75%</span>
                    </span>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About