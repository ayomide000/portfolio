import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Vue from '../assets/vue.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Firebase from '../assets/firebase.png'

const style = {
    parentContainer: `max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full`,
    parentContainerExp: `text-4xl font-bold inline border-b-4 border-blue-500`,
    imgContainer: `w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8`,
    imgDiv: `shadow-md shadow-[#040c16] hover:scale-110 duration-500`,
    img: `w-20 mx-auto`
}

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className={style.parentContainer}>
            <div>
                <p className={style.parentContainerExp}>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className={style.imgContainer}>
                <div className={style.imgDiv}>
                    <img className={style.img} src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className={style.imgDiv}>
                    <img className={style.img} src={CSS} alt="HTML icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className={style.imgDiv}>
                    <img className={style.img} src={JavaScript} alt="HTML icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className={style.imgDiv}>
                    <img className={style.img} src={ReactImg} alt="HTML icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className={style.imgDiv}>
                    <img className={style.img} src={Vue} alt="HTML icon" />
                    <p className='my-4'>Vue</p>
                </div>
                <div className={style.imgDiv}>
                    <img className={style.img} src={Tailwind} alt="HTML icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className={style.imgDiv}>
                    <img className={style.img} src={Github} alt="HTML icon" />
                    <p className='my-4'>Github</p>
                </div>
                <div className={style.imgDiv}>
                    <img className={style.img} src={Firebase} alt="HTML icon" />
                    <p className='my-4'>Firebase</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills