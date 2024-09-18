import { useRef } from "react"


const FocusScreen = () => {

    const InputRef = useRef()

    const onClick = () => {
        InputRef.current.select()
    }


  return (
    <>
    <h1>Focus Screen</h1>
    <hr />
    <input type="text"
    ref={InputRef}
    placeholder="Ingrese su nombre"
    className="form-control"
    />


    <button 
    className="btn btn-primary mt-2"
    onClick={onClick}
    >
        Set focus
    </button>

    </>
  )
}

export default FocusScreen
