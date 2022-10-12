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
        </div>
    )
}

export default About