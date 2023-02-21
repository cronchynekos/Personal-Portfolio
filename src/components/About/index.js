import './index.scss'

const About = () => {
    return(
        <div className='container about-page'>
            <div className ='BGFill'></div>
            <div className='text-zone'>
                <h1>
                    About Me
                </h1>
                <p className='about-text'>
                    I'm Nathan, a Software Engineer based in Fullerton, California
                </p>
                <p className='about-text'>
                    Right now, I am focused on creating responsive webpages as well as beautiful mobile applications
                </p>
                <p className='about-text'>
                    When I'm not coding, you'll often find me with my camera or a pickleball racquet in my hands
                </p>
            </div>

            <div className='aboutphotodiv'>
                <img src='aboutmeimage.jpg' alt='aboutme' className='aboutphoto' />
            </div>


            {/* Skills */}

            {/* <div className='botfill'>

                <div className="cont">
                <h1 className="title-text">Skills</h1>

                <div className="skill-box">
                    <span className="title">HTML</span>
                    <div className="skill-bar">
                        <span className="skill-per html">
                            <span className="tooltip">85%</span>
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
                    <span className="title">C++</span>
                    <div className="skill-bar">
                        <span className="skill-per nodejs">
                            <span className="tooltip">85%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">Python</span>
                    <div className="skill-bar">
                        <span className="skill-per reactjs">
                            <span className="tooltip">65%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">Unreal Engine</span>
                    <div className="skill-bar">
                        <span className="skill-per expressjs">
                            <span className="tooltip">75%</span>
                        </span>
                    </div>
                </div>
            </div>
            </div> */}
        </div>
    )
}

export default About