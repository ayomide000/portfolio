import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const style = {
    home: `bg-[#0a192f] w-full h-screen`,
    homeCont: `max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full`,
    homeContH1: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-300`,
    homeContH2: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-500`,
    homeButton : `border-2 group text-gray-200 px-4 py-2 mt-2 rounded-md text-md font-bold hover:border-0 hover:bg-[#64ffda] hover:text-gray-900 transition duration-300 ease-in-out flex items-center`,
    arrow: `group-hover:rotate-90 duration-300` 
}

const Home = () => {
  return (
    <div name='home' className={style.home}>
    
    {/* Container */}
    <div className={style.homeCont}>
        <p className='text-blue-500'>Hi, My name is</p>
        <h1 className={style.homeContH1}>Akande Gbolahan</h1>
        <h2 className={style.homeContH2}>I'm a Frontend Engineer.</h2>
        <div>
            <button className={style.homeButton}>View Work 
            <span className={style.arrow}>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
            </button>
        </div>
    </div>


    </div>
  )
}

export default Home