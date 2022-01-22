import React from 'react'
import BackgroundAnimation from './BackgroundAnimation'
import Particles from "react-tsparticles";
import gif1 from './img/gif4.gif'

function About() {
    return (
        <section id='about' >
        <div className='about' >
            <div className='container'>
                <div className='row' >
                    <div className='col-md-6 aboutleft'>
                        <BackgroundAnimation />
                        {/* <img src={gif1} className='img-fluid' /> */}
                        
                    </div>
                    <div className='col-md-6 aboutright'>
                        <h2 data-aos="fade-left" data-aos-duration="1000" >about me .</h2>
                        <p data-aos="fade-left" data-aos-duration="1000" data-aos-offset="300" >Hi, I'm Shantanu Saha , a self-taught passionate MERN/Full-Satck developer based in India.
                        </p>
                        <p data-aos="fade-left" data-aos-duration="1000"  data-aos-offset="300">I enjoy taking complex project and turning it into simple yet beautiful websites with great user experience .</p>
                        {/* <p>I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.</p> */}


                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default About
