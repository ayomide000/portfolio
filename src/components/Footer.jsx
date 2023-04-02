import React from 'react'
import {FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiArrowNarrowRight} from 'react-icons/hi'

const style = {
    footer: `bg-[#0a192f]  lg:hidden`,
    socialCont: `w-[80%] flex justify-between mx-auto text-white`,
    socialLinkCont: `flex justify-between mt-3`,
    socialLink:` ml-8 hover:text-blue-500 p-2 rounded-full transition duration-300 ease-in`,
    top: `scroll-smooth mr-2 lg:hidden border-2 group text-gray-200 px-4 py-2 mt-2 rounded-md text-md font-bold hover:border-0 hover:bg-[#64ffda] hover:text-gray-900 transition duration-300 ease-in-out flex items-center ml-4`,
    arrow: `group-hover:-rotate-90 duration-300`,
}

const Footer = () => {
  return (
    <footer className={style.footer}>
        <div className={style.socialCont}>
            <div className={style.socialLinkCont}>
                <a className={style.socialLink} href="/linkedin" target='_blank'><FaLinkedin size={20}/></a>
                <a className={style.socialLink} href="/github" target='_blank'><FaGithub size={20}/></a>
                <a className={style.socialLink} href="/twitter" target='_blank'><FaTwitter size={20}/></a>
            </div>

            <div className={style.top}>
                <a href="#home" >Back to Top
                 </a> 
                 <span className={style.arrow}><HiArrowNarrowRight/></span>
            </div>
        </div>

        {/* ====== TOP CONT =======  */}
        {/* <div>
            
            
        </div> */}
    </footer>
  )
}

export default Footer