import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useState } from 'react'

const style = {
    nav: `fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300`,
    logo: `text-2xl  sm:text-4xl text-blue-500 font-bold`,
    menu: `hidden md:flex`,
    hamburger: `md:hidden z-10`,
    mobileMenu: `absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center `,
    mobileLi: `py-6 text-4xl`,
    socials: `hidden lg:flex fixed flex-col top-[35%] left-0`,
    socialsLiLinkedIn: `w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600`,
    socialsLiGithub: `w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]`,
    socialsLiEmail: `w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]0`,
    socialsLiResume: `w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]`,
    socialsLink: `flex justify-between items-center w-full text-gray-300 `
}

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false)
    const handleClick = () => setMobileMenu(!mobileMenu)

  return (
    <div className={style.nav}>
        <div>
            <h2 className={style.logo}>AG</h2>
        </div>
        
        {/* menu */}
            <ul className={style.menu}>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Works</li>
                <li>Contact</li>
            </ul> 


        {/* Hamburger menu */}
        <div onClick={handleClick} className={style.hamburger}>
            {!mobileMenu ? <FaBars /> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
         <ul className={!mobileMenu ? 'hidden' : style.mobileMenu }>
                <li className={style.mobileLi}>Home</li>
                <li className={style.mobileLi}>About</li>
                <li className={style.mobileLi}>Skills</li>
                <li className={style.mobileLi}>Works</li>
                <li className={style.mobileLi}>Contact</li>
            </ul>

        {/* Social Icons */}
        <div className={style.socials}>
            <ul>
                <li className={style.socialsLiLinkedIn}>
                    <a className={style.socialsLink} href="/">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className={style.socialsLiGithub}>
                    <a className={style.socialsLink} href="/">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className={style.socialsLiEmail}>
                    <a className={style.socialsLink} href="/">
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className={style.socialsLiResume}>
                    <a className={style.socialsLink} href="/">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar