import React, { useState } from 'react'
import { AiFillInstagram, AiOutlineWhatsApp, AiFillLinkedin, AiOutlineSend } from "react-icons/ai";
import { SiFiverr, SiTelegram } from "react-icons/si";
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from './img/kogo4.png'
function Contact() {
    const [dat, setdat] = useState({
        name: '', email: '', mobile: '', message: ''
    })
    const submit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await Axios.post("https://devohut.herokuapp.com/msg/postmsg", dat)
            toast.success('Thanks for contacting me')
            setdat({
                name: '', email: '', mobile: '', message: ''
            })
        } catch (error) {
            toast.error('Some error happen')
            
        }
        
        
    }
    return (
        <section id='contactme'>
            <div className='contact'>
                <div className='container'>

                    <div className='row contactrow'>
                        <div className='col-md-6'>
                            <div className='uptitle'>
                                <p data-aos="fade-right" data-aos-duration="1000">Contact Me</p>
                                <h2 data-aos="fade-right" data-aos-duration="1200">Get In Touch</h2>
                                <h3 data-aos="fade-right" data-aos-duration="1500">I am available to work on your projects and bring your ideas<br /> to life. I am just a click away.</h3>
                            </div>


                        </div>
                        <div className='col-md-6 contactright '>
                            <div className='contactcard '>
                                <div className='form'>
                                    <p>Send me message</p>
                                    <form autoComplete='OFF' onSubmit={submit}>
                                        <input type="text" placeholder='Name' value={dat.name} onChange={(e) => setdat({ ...dat, name: e.target.value })} required />
                                        <input type="email" placeholder='Email' value={dat.email} onChange={(e) => setdat({ ...dat, email: e.target.value })} required />
                                        <input type="tel"  placeholder='Mobile Number' value={dat.mobile} onChange={(e) => setdat({ ...dat, mobile: e.target.value })} required />
                                        <textarea placeholder='Message' value={dat.message} onChange={(e) => setdat({ ...dat, message: e.target.value })} required />
                                        <button type='submit'>Send <AiOutlineSend /></button>
                                    </form>
                                </div>
                                <div className='orsec'>
                                    <p>OR</p>
                                    <div className='social'>
                                    <a href='https://www.instagram.com/themerndeveloper' target="_blank"><AiFillInstagram class="leftitem" /></a>
                                    <a href='' target="_blank" ><AiOutlineWhatsApp class="leftitem" /></a>
                                    <a href='https://www.linkedin.com/in/shantanu-saha-5717b7148/' target="_blank" ><AiFillLinkedin class="leftitem" /></a>
                                    <a href='https://www.fiverr.com/shantanusaha' target="_blank" ><SiFiverr class="leftitem" /></a>
                                    <a href='https://t.me/sanuu_mern' target="_blank" ><SiTelegram className='leftitem' /></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <ToastContainer/>

            </div>
            <div className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4 footleft'>
                           <img src={logo} className='footerlogo' />
                        </div>
                        <div className='col-8 footright'>
                            <p>© Copyright 2022. All right reserved</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
