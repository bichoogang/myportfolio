import React, { useEffect } from 'react'
// import {gsap} from 'react-gsap'
import { gsap } from "gsap";
import BackgroundAnimation from './BackgroundAnimation';
import { AiFillInstagram, AiOutlineWhatsApp, AiFillLinkedin } from "react-icons/ai";
import { SiFiverr, SiTelegram } from "react-icons/si";
function Home() {
    useEffect(() => {

        var tl = gsap.timeline();

        tl.from('.navitem', {
            stagger: .3,
            duration: 2,
            y: 20,
            delay: 7,
            ease: 'Expo.easeInOut',
            opacity: 0
        })
            .from('#smline', {
                width: 0,
                duration: 1,
                ease: 'Expo.easeInOut',
            }, '-=2')
            .from('.leftitem', {
                stagger: .3,
                duration: 2,
                y: 20,
                ease: 'Expo.easeInOut',
                opacity: 0
            }, '-=2')
            .from('#right img', {
                duration: 2,
                scale: 1.05,
                ease: 'Expo.easeInOut',
                opacity: 0
            }, '-=2')


    }, [])
    return (
        <section id="homee">
            <div id="loader">
                <div id="wrapperload">
                    <div class="elem">
                        {/* <img src="./imgs/name.png" alt=""> */}
                        <h3>Shantanu Saha</h3>
                    </div>
                    <div class="elem">
                        <h3>MERN/Full-Stack Developer</h3>
                    </div>
                    <div class="elem">
                        <h3>loves to help buisness.</h3>
                    </div>
                    <div class="elem">
                        {/* <img src="./imgs/name.png" alt=""> */}
                        <h3>Welcome</h3>
                    </div>
                </div>
            </div>

            <div id="bg" >
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-12 homeleft'>
                            <div id="left">
                                <div id="smline"></div>
                                <h4 class="leftitem">Hello, I am 👋</h4>
                                {/* <img class="leftitem" src="./imgs/name.png" alt=""> */}
                                <h4 class="leftitem" id="lblue">Shantanu Saha</h4>
                                
                                {/* <span id="lblue">(The Mern Developer)</span> */}
                                {/* <div class="text-effect">
                           
                            <h1 class="neon leftitem" data-text="Neon" contenteditable>Neon</h1>
                            <div class="gradient"></div>
                            <div class="spotlight"></div>
                        </div> */}

                                <h5 class="leftitem">a MERN Stack Developer from <span id="lblue">India.</span></h5>
                                <a href='/#contactme' className='contactbtn leftitem'>Contact me</a>
                                 <div className='social d-md-none d-block'>
                                    <a href='https://www.instagram.com/themerndeveloper' target="_blank"><AiFillInstagram class="leftitem" /></a>
                                    <a href='' target="_blank" ><AiOutlineWhatsApp class="leftitem" /></a>
                                    <a href='https://www.linkedin.com/in/shantanu-saha-5717b7148/' target="_blank" ><AiFillLinkedin class="leftitem" /></a>
                                    {/* <a href='https://www.fiverr.com/shantanusaha' target="_blank" ><SiFiverr class="leftitem" /></a> */}
                                    <a href='https://t.me/sanuu_mern' target="_blank" ><SiTelegram className='leftitem' /></a>






                                    {/* <p>dsdsadsd</p> */}
                                </div>
                                <div class="leftitem" id="playbtn">
                                    {/* <img src="./imgs/playButton.png" alt=""> */}
                                    {/* <h5>see my <span class="bold">work profile</span></h5> */}
                                </div>
                                <div class="leftitem" id="contact">
                                    {/* <h3>Contact me</h3>
                            <h6>Email : <span>someone@email.com</span></h6>
                            <h6>Contact Number: <span>+91-123456789</span></h6> */}
                                </div>
                            </div>

                        </div>
                        <div className='col-md-6 col-12 home_right '>
                            <div id="right">

                                <BackgroundAnimation id="svgr" />
                                <div className='social d-md-block d-block'>
                                    <a href='https://www.instagram.com/themerndeveloper' target="_blank" ><AiFillInstagram class="leftitem" /></a>
                                    <a href='https://api.whatsapp.com/send/?phone=917047416015&text&app_absent=0' target="_blank" ><AiOutlineWhatsApp class="leftitem" /></a>
                                    <a href='https://www.linkedin.com/in/shantanu-saha-5717b7148/' target="_blank" ><AiFillLinkedin class="leftitem" /></a>
                                    {/* <a href='https://www.fiverr.com/shantanusaha' target="_blank" ><SiFiverr class="leftitem" /></a> */}
                                    <a href='https://t.me/sanuu_mern' target="_blank" ><SiTelegram className='leftitem' /></a>
                                    {/* <p>dsdsadsd</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <nav>
                    <img class="navitem" src="./imgs/logo.png" alt="">
                    <div id="links">
                        <a class="navitem" href="#">Home</a>
                        <a class="navitem" href="#">Contact</a>
                        <i class="navitem ri-search-line"></i>
                        <i id="menu" class="navitem ri-menu-2-line"></i>
                    </div>
                </nav> */}
                {/* <div id="sections">
                  
                    <div id="left">
                        <div id="smline"></div>
                        <h4 class="leftitem">Hello, I am 👋</h4>
                      
                        <h4 class="leftitem" id="lblue">Shantanu Saha</h4>

                        <h5 class="leftitem">a MERN Stack Developer from <span id="lblue">India.</span></h5>
                        <div class="leftitem" id="playbtn">
                            <h5>see my <span class="bold">work profile</span></h5>
                        </div>
                        <div class="leftitem" id="contact">
                        </div>
                    </div>
                    <div id="right">
                    
                        <BackgroundAnimation />
                    </div>
                </div> */}

            </div>
        </section>
    )
}

export default Home
