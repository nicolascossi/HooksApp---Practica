import useCounter from "../hooks/useCounter"
import Small from "./Small"
import { useState } from "react"


const Memorize = () => {

    const {counter, increment} = useCounter()
    const [show, setShow] = useState(true)
  return (


    <>
    <h1>Counter:<Small value={counter}/> </h1>
    <hr />

    <button 
    onClick={() => increment()}
    className="btn btn-primary"
    >
        +1
    </button>

    <button 
    onClick={() => setShow(!show)}
    className="btn btn-outline-primary"
    >
        Show/Hide {JSON.stringify(show)}
    </button>
    
    </>
  )
}

export default Memorize
