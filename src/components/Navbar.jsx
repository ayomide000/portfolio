import {FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useState } from 'react'
import { Link } from 'react-scroll'
import CV from '../assets/Akande Gbolahan (resume).pdf'

const style = {
    nav: `fixed top-0 z-50 w-full h-[70px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300`,
    logo: `text-md  sm:text-4xl text-blue-500 font-bold italic`,
    menu: `hidden md:flex `,
    menuLink: `px-3  py-2 hover:bg-blue-500 transition duration-300 ease-in rounded-lg`,
    hamburger: `absolute right-5 z-100 md:hidden bg-red-800`,
    mobileMenu: `absolute z-5 top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center `,
    mobileLi: `py-6 text-4xl`,
    socials: `hidden lg:flex fixed flex-col top-[35%] left-0`,
    socialsLiLinkedIn: `w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900`,
    socialsLiGithub: `w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]`,
    socialsLiTwitter: `w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500`,
    socialsLiEmail: `w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]0`,
    socialsLiResume: `w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]`,
    socialsLink: `flex justify-between items-center w-full text-gray-300 `
}

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false)
    const handleClick = () => setMobileMenu(!mobileMenu)

  return (
    <div className={style.nav}>
        {/* LOGO  */}
        <div>
            <h2 className={style.logo}>Akande</h2>
        </div>
        
        {/* menu */}
            <ul className={style.menu}>
                <li className={style.menuLink}>
                    <Link  to="home" smooth={true} duration={500}> Home</Link>
                </li>
                <li className={style.menuLink}>
                    <Link  to="about" smooth={true} duration={500}> About</Link>
                </li>
                <li className={style.menuLink}>
                    <Link  to="skills" smooth={true} duration={500}> Skills</Link>
                </li>
                <li className={style.menuLink}>
                    <Link  to="work" smooth={true} duration={500}> Work</Link>
                </li>
                <li className={style.menuLink}>
                    <Link  to="contact" smooth={true} duration={500}> Contact</Link>
                </li>
            </ul> 


        {/* Hamburger menu */}
        <div onClick={handleClick} className={style.hamburger}>
            {!mobileMenu ? <FaBars /> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
         <ul className={!mobileMenu ? 'hidden' : style.mobileMenu }>
                <li className={style.mobileLi}>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}> Home</Link>
                </li>
                <li className={style.mobileLi}>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}> About</Link>
                </li>
                <li className={style.mobileLi}>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}> Skills</Link>
                </li>
                <li className={style.mobileLi}>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}> Work</Link>
                </li>
                <li className={style.mobileLi}>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}> Contact</Link>
                </li>
            </ul>

        {/* Social Icons */}
        <div className={style.socials}>
            <ul>
                <li className={style.socialsLiLinkedIn}>
                    <a className={style.socialsLink} href="https://www.linkedin.com/in/gbolahan-akande-2a9860232" target='_blank'>
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className={style.socialsLiGithub}>
                    <a className={style.socialsLink} href="https://github.com/ayomide000" target='_blank'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className={style.socialsLiTwitter}>
                    <a className={style.socialsLink} href="https://twitter.com/AkandeGbolaha11?t=MoE8xE9SQQoaGMpyGyxwug&s=09" target='_blank'>
                        Twitter <FaTwitter size={30}/>
                    </a>
                </li>
                <li className={style.socialsLiEmail}>
                    <a className={style.socialsLink} href="mailto:akandegbolahanayomide@gmail.com" target='_blank'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className={style.socialsLiResume}>
                    <a className={style.socialsLink} href={CV} download>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar