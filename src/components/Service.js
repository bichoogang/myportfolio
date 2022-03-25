import React from 'react'
import { TiCode} from "react-icons/ti";
import { MdDevices,MdShoppingCart,MdOutlineAppRegistration } from "react-icons/md";
import Aos from 'aos';
const servicelist = [
    {
        logo:<TiCode/>,
        title:"Web Development",
        des:'Web development services include both front-end and back-end development. Whether it is enhancing an existing application or architecting an enterprise application, our developers are up for the challenge.'

    },
    {
        logo:<MdOutlineAppRegistration/>,
        title:"Cross-platform App Development",
        des:'Cross-platform App Development services includes fast, bug-free & well-documented mobile applications that will work across multiple platforms and operating systems (Android and Apple devices) .'

    },
    {
        logo:<MdDevices/>,
        title:"Responsive Design",
        des:'I ensure that my client’s website is responsive on every device, so that no single customer is lost. My responsive website responds to the user’s behavior and environment based on screen size, platform, & orientation.'

    },
    {
        logo:<MdShoppingCart/>,
        title:"E-Commerce & CMS Development",
        des:'I provide best features in eCommerce development with Client Management System and Payment Gateway solutions'

    }
]
function Service() {
    return (
        <section id='service'>
        <div className='service' >
            <div className='container'>
                <div className='uptitle pt-5' >
                    <p data-aos="zoom-in-down" data-aos-duration="1000">Service</p>
                    <h2 data-aos="zoom-in-down" data-aos-duration="1000">My Service</h2>
                </div>
                <div className='row servicerow'>
                    
                    {
                        servicelist?.map((v,i)=>{
                            return <div className='col-md-6 col-xl-3 px-2 mt-3'>
                            <div className='cardx ' data-aos="zoom-in" data-aos-duration="1000" >
                                {v.logo}
                                <h3>{v.title}</h3>
                                <p>{v.des}</p>
                            </div>
                        </div>
                        })
                    }
                    
                    
                    

                </div>
            </div>

        </div>
        </section>
    )
}

export default Service
