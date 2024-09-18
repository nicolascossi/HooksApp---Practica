
import useForm from "../hooks/useForm"

export default function FormWithCustomHooks() {

    const {formState, inputChange, reset} = useForm({
        username: '',
        email: '',
        password: ''
    })

    const {username, email, password} = formState;


  return (
    <>
    <hr />
    <h1>Form with Custom Hooks</h1>

    <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={inputChange}/>

    <input type="text" className="form-control mt-2" placeholder="user@provider.com" name="email" value={email} onChange={inputChange} />
    
    <input type="password" className="form-control mt-2" placeholder="**************" name="password" value={password} onChange={inputChange} />

    <button className="btn btn-primary mt-2" onClick={reset}>Borrar</button>
    </>
  )
}

