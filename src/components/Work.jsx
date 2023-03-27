import React from 'react'

const style = {
    work: `w-full h-screen text-gray-300 bg-[#0a192f]`
}

const Work = () => {
  return (
    <div name='work' className={style.work}>
        <div>
            <div>
                <p>Work</p>
                <p>Check out my recent work</p>
            </div>
        </div>
    </div>
  )
}

export default Work