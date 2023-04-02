import React, {useState} from 'react'
import { Link } from 'react-scroll'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Name from './Name'
import MyImage from '../assets/akandegbolahan.png'
import CV from '../assets/Akande Gbolahan (resume).pdf'

const style = {
    home: `bg-[#0a192f] w-full h-screen  `,
    homeCont: `max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full`,
    gridCont: `w-full grid grid-rows-[1fr_0.5fr] lg:grid-rows-none lg:grid-cols-[3fr_1fr] gap-2 text-center  `,
    gridTextCont: `  lg:block flex flex-col justify-center items-center`,
    welcomeCont: `flex justify-center`,
    welcome: `text-center font-bold text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text`,
    wave: `animate-wave text-3xl`,
    homeContH1: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-300`,
    homeContH2: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-500`,
    homeButtonCont: `flex justify-center`,
    homeButton : `border-2 group text-gray-200 px-4 py-2 mt-2 rounded-md text-md font-bold hover:border-0 hover:bg-[#64ffda] hover:text-gray-900 transition duration-300 ease-in-out flex items-center ml-4`,
    homeButtonCV : `lg:hidden border-2 group text-gray-200 px-4 py-2 mt-2 rounded-md text-md font-bold hover:border-0 hover:bg-[#64ffda] hover:text-gray-900 transition duration-300 ease-in-out flex items-center ml-4`,
    arrow: `group-hover:rotate-90 duration-300`,
    imgDivCont: `w-full h-full`,
    // imgDiv: `lg:border boder-red-500  lg:rounded-lg `,
    img: ` w-10/12 h-10/12 border rounded-lg lg:rounded-full lg:w-60 h-60 md:w-50 mx-auto px-0 bg-gray-700 ` 
}

const Home = () => {
  const [showWork, setShowWork] = useState(false)
    const handleClick = () => setShowWork(!showWork)
  return (
    <div name='home' className={style.home}>
    
    {/* Container */}
    <div className={style.homeCont} id='home'>
      <div className={style.gridCont}>
        <div className={style.gridTextCont}>
          <div className={style.welcomeCont}>
           <h1 className={style.welcome}>Welcome</h1>
            <div className={style.wave}>👋</div>
         </div>
          <p className='text-blue-500'>Hi, My name is</p>
          <h1 className={style.homeContH1}>Akande Gbolahan</h1>
          <h2 className={style.homeContH2}>{<Name/>}</h2>
          {/* Button Container  */}
          <div className={style.homeButtonCont}>
            <div>
                <button className={style.homeButton}>
                  <Link onClick={handleClick} to="work" smooth={true} duration={500}> View Work</Link> 
                <span className={style.arrow}>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
            </div>
            <div>
                <button className={style.homeButtonCV}><a href={CV} download>Download CV</a>
                <span className={style.arrow}>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
            </div>
          </div>
        </div>
        {/* Image Cont  */}
        <div className={style.imgDivCont}>
          <div className={style.imgDiv}>
            <img src={MyImage} className={style.img} alt="my_image" />
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Home