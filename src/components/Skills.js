import React from 'react'
import html from '../components/img/html.png'
import css from '../components/img/css.png'
import java from '../components/img/java.png'
import figma from '../components/img/figma.png'
import react from '../components/img/react.png'
import node from '../components/img/node.svg'
import mongo from '../components/img/mongo.svg'
import git from '../components/img/git.png'
import fire from '../components/img/fire.png'
import boot from '../components/img/boot.svg'
import mat from '../components/img/mat.png'
import sass from '../components/img/sass.png'
import expre from '../components/img/express.png'
const skilllist = [
    {
        logo: html,
        title: 'HTML'
    },
    {
        logo: css,
        title: 'CSS'
    },
    {
        logo: sass,
        title: 'sass'
    },
    
    {
        logo: boot,
        title: 'Bootstrap' 
    },
    {
        logo: mat,
        title: 'material ui' 
    },
    {
        logo: java,
        title: 'javascript' 
    },
    {
        logo: mongo,
        title: 'mongodb' 
    },
    {
        logo: expre,
        title: 'ExpressJS' 
    }
    
    ,{
        logo: react,
        title: 'reactjs' 
    }
    ,{
        logo: node,
        title: 'nodejs' 
    },
    
    {
        logo: git,
        title: 'GITHUB' 
    },
    {
        logo: react,
        title: 'react native' 
    },
    {
        logo: figma,
        title: 'figma' 
    },
    {
        logo: fire,
        title: 'Firebase' 
    }
]
function Skills() {
    return (
        <section id='Skill'>
        <div className='skills'>
            <div className='container'>
                
                <div className='skillrowa'>
                <div className='uptitle' >
                    {/* <p data-aos="fade-up" data-aos-duration="1000">Skills</p> */}
                    <h2 data-aos="fade-up" data-aos-duration="1000">What I do</h2>
                    <div data-aos="fade-up" data-aos-duration="1000"></div>
                   
                </div>
                <div className='lsk'>
                <h3 className='m-0 p-0' data-aos="fade-left" data-aos-duration="1000">Skills</h3>
                <div data-aos="fade-right" data-aos-duration="1000"></div>

                </div>
                
                <div className='skillrow'>
                    
                    {
                        skilllist?.map((v, i) => {
                            return <div className='skillcard'  data-aos="zoom-in" data-aos-duration="1000">
                                <div className='skimg'>
                                <img src={v.logo} className='img-fluid' />
                                    </div>
                                    
                                    <h2 className='text-center'>{v.title}</h2>
                                </div>
                             // </div>
                        })
                    }

                </div>
                </div>
            </div>

        </div>
        </section>
    )
}

export default Skills
