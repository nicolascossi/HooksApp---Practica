import { useState } from "react";


const Form = ({onNewTodo}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        event.preventDefault()
        setInputValue(event.target.value)
    }

    const handleButtonClick = (event) => {
        event.preventDefault()
        if(inputValue.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: inputValue,
            done: false
        }


        onNewTodo(newTodo)

        setInputValue('')

    }

  return (
    <>
    <h4>Agregar TODO</h4>
        <hr />
            <form>
                <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Ingrese una actividad para agregar" className="form-control"/>
                <button type="submit" onClick={handleButtonClick} className="btn btn-outline-primary mt-2">Agregar</button>
            </form>
    </>
  )
}

export default Form
