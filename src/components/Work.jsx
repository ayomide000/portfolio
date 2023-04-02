import React from 'react'
import workImg from '../assets/projects/workImg.jpeg'
import realEstate from '../assets/projects/realestate.jpg'

const style = {
    work: `w-full text-gray-300 bg-[#0a192f]`,
    parentContainer: `max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-4`,
    workTxt: `text-4xl font-bold inline border-b-4 border-blue-500`,
    cardCont: `grid sm:grid-cols-2 md:grid-cols-3 gap-4`,
    cardItem: `shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div`,
    hover: `opacity-0 group-hover:opacity-100`,
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
                {/* Card Item  */}
                <div style={{backgroundImage: `url(${workImg})`}} className={style.cardItem}>

                    {/* Hover Effects    */}
                    <div className={style.hover}>
                        <span className={style.hoverTxt}>
                            React JS Applicaation
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className={style.hoverButton}>Demo</button>
                            </a>
                            <a href="/">
                                <button className={style.hoverButton}>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Card Item  */}
                <div style={{backgroundImage: `url(${realEstate})`}} className={style.cardItem}>

                    {/* Hover Effects    */}
                    <div className={style.hover}>
                        <span className={style.hoverTxt}>
                            React JS Applicaation
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className={style.hoverButton}>Demo</button>
                            </a>
                            <a href="/">
                                <button className={style.hoverButton}>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Card Item  */}
                <div style={{backgroundImage: `url(${workImg})`}} className={style.cardItem}>

                    {/* Hover Effects    */}
                    <div className={style.hover}>
                        <span className={style.hoverTxt}>
                            React JS Applicaation
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className={style.hoverButton}>Demo</button>
                            </a>
                            <a href="/">
                                <button className={style.hoverButton}>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Card Item  */}
                <div style={{backgroundImage: `url(${realEstate})`}} className={style.cardItem}>

                    {/* Hover Effects    */}
                    <div className={style.hover}>
                        <span className={style.hoverTxt}>
                            React JS Applicaation
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className={style.hoverButton}>Demo</button>
                            </a>
                            <a href="/">
                                <button className={style.hoverButton}>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Card Item  */}
                <div style={{backgroundImage: `url(${workImg})`}} className={style.cardItem}>

                    {/* Hover Effects    */}
                    <div className={style.hover}>
                        <span className={style.hoverTxt}>
                            React JS Applicaation
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className={style.hoverButton}>Demo</button>
                            </a>
                            <a href="/">
                                <button className={style.hoverButton}>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Card Item  */}
                <div style={{backgroundImage: `url(${realEstate})`}} className={style.cardItem}>

                    {/* Hover Effects    */}
                    <div className={style.hover}>
                        <span className={style.hoverTxt}>
                            React JS Applicaation
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className={style.hoverButton}>Demo</button>
                            </a>
                            <a href="/">
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