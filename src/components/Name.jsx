// import { useTypedName } from "./useTypedName"
import Typewriter from "typewriter-effect"

// const careers = ["I'm a Frontend Engineer", "I'm a Technical Writer"]


const Name = () => {
  // const career = useTypedName(careers)

  return (
    <div>
        {/* {career} */}

        <Typewriter
  options={{
    strings: ['I am a Frontend Engineer', 'I am a Technical Writer'],
    autoStart: true,
    loop: true,
  }}
/>
    </div>
  )
}

export default Name