import React from 'react'
import colorGenerator from '../assets/projects/colorGenerator.png'
import vueCounter from '../assets/projects/vueCounter.png'
import birthdayReminder from '../assets/projects/birthdayReminder.png'
import reactCounter from '../assets/projects/reactCounter.png'
import workImg from '../assets/projects/workImg.jpeg'
import realEstate from '../assets/projects/realestate.jpg'

const style = {
    work: `w-full text-gray-300 bg-[#0a192f]`,
    parentContainer: `max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-4`,
    workTxt: `text-4xl font-bold inline border-b-4 border-blue-500`,
    cardCont: `grid sm:grid-cols-2 md:grid-cols-3 gap-4 `,
    cardItem: `shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div group-hover:bg-blue-500`,
    hover: `opacity-0  group-hover:opacity-100`,
    hoverTxt: `text-2xl font-bold text-white tracking-wider`,
    hoverButton: `text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg`
}

const Work = () => {
  return (
    <div name='work' className={style.work}>
        <div className={style.parentContainer}>
            <div className='pb-8'>
                <p className={style.workTxt}>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>

            <div className={style.cardCont}>
                {/* Color Generator  */}
                <div style={{backgroundImage: `url(${colorGenerator})`}} className={style.cardItem}>

                    {/* Hover Effects    */}
                    <div className={style.hover}>
                        <span className={style.hoverTxt}>
                            React JS Applicaation
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://akande-color-generator.netlify.app/" target='_blank'>
                                <button className={style.hoverButton}>Demo</button>
                            </a>
                            <a href="https://github.com/ayomide000/color-generator" target='_blank'>
                                <button className={style.hoverButton}>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Vue Counter  */}
                <div style={{backgroundImage: `url(${vueCounter})`}} className={style.cardItem}>

                    {/* Hover Effects    */}
                    <div className={style.hover}>
                        <span className={style.hoverTxt}>
                            Vue JS Applicaation
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://akandegbolahancounter.netlify.app/" target='_blank'>
                                <button className={style.hoverButton}>Demo</button>
                            </a>
                            <a href="https://github.com/ayomide000/altschool-third-exam" target='_blank'>
                                <button className={style.hoverButton}>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Birthday Reminder  */}
                <div style={{backgroundImage: `url(${birthdayReminder})`}} className={style.cardItem}>

                    {/* Hover Effects    */}
                    <div className={style.hover}>
                        <span className={style.hoverTxt}>
                            React JS Applicaation
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://birthday-reminder-gb.netlify.app/" target='_blank'>
                                <button className={style.hoverButton}>Demo</button>
                            </a>
                            <a href="https://github.com/ayomide000/birthday-reminder" target='_blank'>
                                <button className={style.hoverButton}>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Todo App  */}
                <div style={{backgroundImage: `url(${workImg})`}} className={style.cardItem}>

                    {/* Hover Effects    */}
                    <div className={style.hover}>
                        <span className={style.hoverTxt}>
                           A todo App
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://todo-app-gb.vercel.app" target='_blank'>
                                <button className={style.hoverButton}>Demo</button>
                            </a>
                            <a href="https://github.com/ayomide000/todo-app" target='_blank'>
                                <button className={style.hoverButton}>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* React Counter  */}
                <div style={{backgroundImage: `url(${reactCounter})`}} className={style.cardItem}>

                    {/* Hover Effects    */}
                    <div className={style.hover}>
                        <span className={style.hoverTxt}>
                            React JS Applicaation
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://basik-counter-app.netlify.app/" target='_blank'>
                                <button className={style.hoverButton}>Demo</button>
                            </a>
                            <a href="https://github.com/ayomide000/altschool-sem-exam" target='_blank'>
                                <button className={style.hoverButton}>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Form Validation  */}
                <div style={{backgroundImage: `url(${realEstate})`}} className={style.cardItem}>

                    {/* Hover Effects    */}
                    <div className={style.hover}>
                        <span className={style.hoverTxt}>
                            HTML, CSS and JavaScript
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://akande-gbolahan-sidehustle-form.netlify.app/" target='_blank'>
                                <button className={style.hoverButton}>Demo</button>
                            </a>
                            <a href="https://github.com/ayomide000/sidehustle-form-validation" target='_blank'>
                                <button className={style.hoverButton}>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work