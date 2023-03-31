import { useTypedName } from "./useTypedName"

const careers = ["I'm a Frontend Engineer", "I'm a Technical Writer"]


const Name = () => {
  const career = useTypedName(careers)

  return (
    <div className=' blinking-cursor'>
        {career}
    </div>
  )
}

export default Name