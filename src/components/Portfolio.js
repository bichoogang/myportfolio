import React, { useState } from 'react'
import port1 from './img/port13.png'
import port2 from './img/port2.png'
import port3 from './img/port3.png'
import port4 from './img/port4.jpeg'
import port5 from './img/port5.png'
import port6 from './img/port6.png'
import port7 from './img/port7.png'
import port8 from './img/port8.png'
import port9 from './img/port9.png'
import port10 from './img/port10.png'
import port11 from './img/port11.png'
import port12 from './img/post12.png'
import port13 from './img/port15.png'
import port14 from './img/port18.png'
import port15 from './img/port20.png'
import { BsArrowDownCircleFill,BsArrowUpCircleFill ,BsFillArrowUpRightCircleFill } from "react-icons/bs";
function Portfolio() {
    const [num,setnum] = useState(6)
    const portdata = [
        {
            img: port4,
            des: "(E-commerence website)",
            title: "TechMart",
            url: "https://techmartt.netlify.app",
            button:"Open Website"
        },
        {
            img: port1,
            des: "(Multi-Cuisine Resturant)",
            title: "Foodooze",
            url: "https://foodooze.netlify.app/",
            button:"Open Website"
        },
        {
            img: port13,
            des: "(Multi-Cuisine Resturant)",
            title: "Foodooze Mobile App",
            url: "https://expo.dev/@devohut/Foodooze/",
            button:"Open App"
        },
        {
            img: port8,
            des: "(Cake Shop)",
            title: "CakeWorld",
            url: "https://cakeworldn.netlify.app/",
            button:"Open Website"
        },
        {
            img: port14,
            des: "Chatting Mobile App",
            title: "Messager",
            url: "https://expo.dev/@devohut/messenger/",
            button:"Open App"
        },
        {
            img: port15,
            des: "(Car Rental Web App)",
            title: "CarB",
            url: "https://stirring-cucurucho-b0d56d.netlify.app/",
            button:"Open Website"
        },
        {
            img: port9,
            des: "(Tech Blog Web App)",
            title: "TECHHUB",
            url: "https://happy-heisenberg-9c1cdd.netlify.app/",
            button:"Open Website"
        },
        {
            img: port12,
            des: "(Instagram Clone)",
            title: "Instagram",
            url: "https://friendly-leakey-dc1395.netlify.app/",
            button:"Open Website"
        },
        {
            img: port6,
            des: "Chatting Web App",
            title: "Messager",
            url: "https://messager.netlify.app/",
            button:"Open Website"
        },
        {
            img: port2,
            des: "(A bed and breakfast (typically shortened to B&B or BnB))",
            title: "Nestled Inn",
            url: "https://fervent-hypatia-2c1f75.netlify.app/",
            button:"Open Website"
        },
    
        {
            img: port10,
            des: "(Movie Web App)",
            title: "MovieApp",
            url: "https://zen-mclean-d30e68.netlify.app/",
            button:"Open Website"
        },
        
        {
            img: port3,
            des: "(Burger Resturant)",
            title: "Burgery",
            url: "https://gallant-volhard-b773fe.netlify.app/",
            button:"Open Website"
        },
        
        {
            img: port11,
            des: "(Interior Design website)",
            title: "Interiorlia",
            url: "https://laughing-lichterman-271421.netlify.app/",
            button:"Open Website"
        },
        
        {
            img: port7,
            des: "(Trek Planing website)",
            title: "TreckPlanner",
            url: "https://xenodochial-goodall-a32c1b.netlify.app/",
            button:"Open Website"
        }
    ]
    return (
        <section id='portfolio'>
        <div className='portfolio'>
            <div className='container'>
                <div className='uptitle'>
                    <p data-aos="fade-up" data-aos-duration="1000">Portfolio</p>
                    <h2 data-aos="fade-up" data-aos-duration="1000">My Portfolio</h2>
                </div>
                <div className='row portfoliorow'>
                    {
                        portdata?.slice(0,num).map((v, i) => {
                            return <div className='col-md-6 col-12 mt-4' data-aos="zoom-in-up" data-aos-duration="1000"> 
                                <div className='portcard'>
                                    <img src={v?.img} className='img-fluid' />
                                    <div className='detail'>
                                        <h2>{v?.title}</h2>
                                        <p>{v.des}</p>
                                        <a href={v?.url} target="_blank">
                                        <button className='mt-2'>{v?.button} <BsFillArrowUpRightCircleFill/></button>
                                        </a>
                                       
                                    </div>

                                </div>

                            </div>
                        })
                    }
                    <div className='portbtn'>
                        {
                            portdata?.length<=num?null:<BsArrowDownCircleFill className='mx-2' onClick={()=>setnum(num+2)}/>
                        }
                        {
                            num>6?<BsArrowUpCircleFill className='mx-2' onClick={()=>setnum(num-2)}/>:null
                        }
                    
                    

                    </div>





                </div>
            </div>

        </div>
        </section>
    )
}

export default Portfolio
