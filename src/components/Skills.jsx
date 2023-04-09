import React from 'react'
// SKILLS 
import HTML from '../assets/skills/html.png'
import CSS from '../assets/skills/css.png'
import JavaScript from '../assets/skills/javascript.png'
import ReactImg from '../assets/skills/react.png'
import Vue from '../assets/skills/vue.png'
import Github from '../assets/skills/github.png'
import Tailwind from '../assets/skills/tailwind.png'
import Firebase from '../assets/skills/firebase.png'
// CERTIFICATION 
import JavaScriptMeta from '../assets/certification/JavaScriptMeta.jpg'
import FrontendCert from '../assets/certification/Frontend.jpg'
import ResponsiveDesign from '../assets/certification/Responsive-Web-Design.jpg'
import CSSCert from '../assets/certification/CSS_certificate.jpg'
import HTMLCert from '../assets/certification/HTML_certificate.jpg'
import HTMLCSS from '../assets/certification/HTML_CSS.jpg'
import SoftSkills from '../assets/certification/Jobberman.jpg'



const style = {
    skills: `w-full bg-[#0a192f] text-gray-300 z-5 relative`,
    parentContainer: `max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full`,
    parentContainerExp: `text-4xl font-bold inline border-b-4 border-blue-500`,
    imgContainer: `w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8`,
    imgDiv: `shadow-md shadow-[#040c16] hover:scale-110 duration-500 z-1`,
    img: `w-20 mx-auto`,
    imgDivCert: `shadow-md shadow-[#040c16] hover:scale-110 duration-500 z-1 grid-rows-[2fr_1fr]`,
    imgCert: `w-full h-[80%] cover`
}

const Skills = () => {
  return (
    <div name='skills' className={style.skills}>
        {/* Container */}
        <div className={style.parentContainer}>
            <div>
                <p className={style.parentContainerExp}>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className={style.imgContainer} >
                <div className={style.imgDiv} data-aos="flip-left" data-offset="10">
                    <img className={style.img} src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className={style.imgDiv} data-aos="flip-right" data-offset="10">
                    <img className={style.img} src={CSS} alt="HTML icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className={style.imgDiv} data-aos="flip-right" data-offset="10">
                    <img className={style.img} src={JavaScript} alt="HTML icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className={style.imgDiv} data-aos="flip-left" data-offset="10">
                    <img className={style.img} src={ReactImg} alt="HTML icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className={style.imgDiv} data-aos="flip-left" data-offset="10">
                    <img className={style.img} src={Vue} alt="HTML icon" />
                    <p className='my-4'>Vue</p>
                </div>
                <div className={style.imgDiv} data-aos="flip-right" data-offset="10">
                    <img className={style.img} src={Tailwind} alt="HTML icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className={style.imgDiv} data-aos="flip-left" data-offset="10">
                    <img className={style.img} src={Github} alt="HTML icon" />
                    <p className='my-4'>Github</p>
                </div>
                <div className={style.imgDiv} data-aos="flip-right" data-offset="10">
                    <img className={style.img} src={Firebase} alt="HTML icon" />
                    <p className='my-4'>Firebase</p>
                </div>
            </div>

            {/* ======CERTIFICATION======  */}

            <div>
                <p className={style.parentContainerExp}>Certification</p>
            </div>

            <div className={style.imgContainer} >
                <div className={style.imgDivCert} data-aos="flip-left" data-offset="10">
                    <img className={style.imgCert} src={JavaScriptMeta} alt="Programming With JavaScript" />
                    <p className='my-4'>Programming With JavaScript</p>
                </div>
                <div className={style.imgDivCert} data-aos="flip-right" data-offset="10">
                    <img className={style.imgCert} src={FrontendCert} alt="Introduction to Frontend Development" />
                    <p className='my-4'>Frontend Development</p>
                </div>
                <div className={style.imgDivCert} data-aos="flip-right" data-offset="10">
                    <img className={style.imgCert} src={ResponsiveDesign} alt="Responsive Web Design" />
                    <p className='my-4'>Responsive Web Design</p>
                </div>
                <div className={style.imgDivCert} data-aos="flip-left" data-offset="10">
                    <img className={style.imgCert} src={CSSCert} alt="CSS Certificate" />
                    <p className='my-4'>CSS Certificate</p>
                </div>
                <div className={style.CimgDivCert} data-aos="flip-left" data-offset="10">
                    <img className={style.imgCert} src={HTMLCert} alt="HTML Certficate" />
                    <p className='my-4'>HTML Certficate</p>
                </div>
                <div className={style.imgDivCert} data-aos="flip-right" data-offset="10">
                    <img className={style.imgCert} src={HTMLCSS} alt="HTML and CSS" />
                    <p className='my-4'>HTML and CSS</p>
                </div>
                <div className={style.imgDivCert} data-aos="flip-left" data-offset="10">
                    <img className={style.imgCert} src={SoftSkills} alt="SoftSkills" />
                    <p className='my-4'>Jobberman Soft Skills</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills