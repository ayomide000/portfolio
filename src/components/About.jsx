import React, {useEffect} from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

const style = {
    about: `w-full z-1 h-screen bg-[#0a192f] text-gray-300 -z-50 relative`,
    aboutCont: `flex flex-col justify-center items-center w-full h-full`,
    parentDivCont: `max-w-[1000px] w-full  grid grid-cols-2 gap-8`,
    aboutContText: `max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4`,
    aboutwrapper: `sm:text-right pb-8 pl-4`,
    aboutP: `text-4xl font-bold inline border-b-4 border-blue-500`
}

const About = () => {
    useEffect(() => {
    Aos.init({ 
        duration: 1500,
        easing: 'ease-in-out',
        offset: 0
    })
  }, [])
  return (
    <div name='about' className={style.about}>
        <div className={style.aboutCont}>
            <div className={style.parentDivCont}>
                <div className={style.aboutwrapper}>
                    <p className={style.aboutP}>About</p>
                </div>
                <div>
                </div>
            </div>
                <div className={style.aboutContText}>
                    <div className='sm:text-right 
                     text-4xl font-bold'>
                       <p className='z-2' style={{position: "relative"}} data-aos="fade-left" data-offset="10">Hi, I'm Gbolahan, nice to meet you. Please take a look around.</p> 
                    </div>
                    <div>
                        <p data-aos="fade-right" data-offset="10">I am passionate about building excellent and giving life to web applications. I love exploring new technologies, I like to stay on top of latest trends. I  write clean and readable codes.</p>
                    </div>
                </div>
           
        </div>
    </div>
  )
}

export default About