import React from 'react'

const style = {
    contact: `w-full bg-[#0a192f] flex justify-center items-center p-4 text-gray-300`,
    form: `flex flex-col max-w-[600px] w-full `,
    contactHead: `text-4xl font-bold inline border-b-4 border-blue-500`,
    name: `bg-[#ccd6f6] p-2 text-gray-800`,
    email: `my-4 p-2 bg-[#ccd6f6] focus:outline-none text-gray-800`,
    textarea: `bg-[#ccd6f6] p-2 text-gray-800`,
    btn: `text-white border-2 rounded-md hover:bg-blue-500 hover:border-blue-500 px-4 py-3 my-8 mx-auto flex items-center transition duration-300 ease-in`
}

const Contact = () => {
  return (
    <div name='contact' className={style.contact}>
        <form method='POST' action="https://getform.io/f/79f87687-5e74-4448-9c3c-55a0d4c123b8" className={style.form}>
            <div className='pb-8'>
                <p className={style.contactHead}>Contact</p>
                <p className='py-4'>Submit the form below or shoot me an email - akandegbolahanayomide@gmail.com</p>
            </div>
            <input className={style.name} type="text" placeholder='Name' name='name' />
            <input className={style.email} type="email" placeholder='Email' name='email' />
            <textarea className={style.textarea} name="message" placeholder='Message' rows="10"></textarea>
            <button className={style.btn}>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact