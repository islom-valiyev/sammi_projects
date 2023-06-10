import { logo } from "../constatnts"
import { Input } from "../ui/index"
import { useState } from "react"
import { registerUserStart, registerUserSuccess, registerUserFailure } from '../slice/auth'
import { useSelector, useDispatch } from 'react-redux'
import Authservice from "../service/auth"


const Register = () => {
  const [name, setname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { isLoading } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const loginHandler = async e => {
    e.preventDefault()
    dispatch(registerUserStart())
    const user = { username: name, email, password }
    try {
      const respose = await Authservice.userRegister(user)
      dispatch(registerUserSuccess())
      console.log(respose);
    } catch (error) {
      dispatch(registerUserFailure())
    }
  }

  return (
    <div className="text-center mt-5">

      <main className="form-signin w-25 m-auto ">
        <form>
          <img className="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>
          <Input label={'Username'} type={'text'} state={name} setState={setname} />
          <Input label={'Email address'} type={'email'} state={email} setState={setEmail} />
          <Input label={'Password'} type={'password'} state={password} setState={setPassword} />


          <button className="btn btn-primary w-100 py-2" type="submit" disabled={isLoading} onClick={loginHandler}> {isLoading ? 'loading... ' : 'Register'}  </button>
        </form>
      </main>
    </div>

  )
}

export default Register