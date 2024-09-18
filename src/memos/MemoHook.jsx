import useCounter from "../hooks/useCounter"
import { useMemo, useState } from "react"


const heavyStuff = (iterationNumber = 100) => {
  for(let i = 0; i < iterationNumber; i++){
    console.log('Ahi vamos...')
  }
  return`${iterationNumber} iteraciones realizadas`
}

const MemoHook = () => {

    const {counter, increment} = useCounter(4000)
    const [show, setShow] = useState(true)

    
  return (


    <>
    <h1>Counter:  <small>{counter}</small> </h1>
    <hr />
    <h4>{heavyStuff(counter)}</h4>

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

export default MemoHook
