import { useState } from "react"

export default function useForm(initialForm = {}) {

    const [formState, setFormState] = useState(initialForm)


    const inputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name] : value
        })
    }

    const reset = () => {
        setFormState(initialForm)
    }

    

  return {
    ...formState,
    formState,
    inputChange,
    reset
  }
}

