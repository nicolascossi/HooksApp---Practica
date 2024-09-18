import { useEffect, useState } from "react"
import Message from "./Message";


export default function SimpleForm() {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'cossi@hotmail.com'
    })

    const { username, email } = formState;

    const inputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name] : value
        })
    }

    useEffect(() => {
        // console.log('formState changed!')
    }, [formState])

    useEffect(() => {
        // console.log('Email changed!')
    }, [formState.email])

    useEffect(() => {
        // console.log('Username changed!')
    }, [formState.username])




  return (
    <>
    <hr />
    <h1>Simple Form</h1>

    <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={inputChange}/>
    {
        (username === 'strider2')  && <Message/>
    }

    <input type="text" className="form-control mt-2" placeholder="user@provider.com" name="email" value={email} onChange={inputChange} />
    
    
    </>
  )
}

