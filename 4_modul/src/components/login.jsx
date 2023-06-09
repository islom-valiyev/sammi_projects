import { logo } from "../constatnts"
import { Input } from "../ui/index"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react"
import { loginUserStart } from '../slice/auth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.auth)
  console.log(isLoading);
  const loginHandler = e => {
    e.preventDefault()
    dispatch(loginUserStart())
  }
  return (
    <div className="text-center mt-5">

      <main className="form-signin w-25 m-auto ">
        <form>
          <img className="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please login</h1>
          <Input label={'Email address'} type={'email'} state={email} setState={setEmail} />
          <Input label={'Password'} type={'password'} state={password} setState={setPassword} />


          <button className="btn btn-primary w-100 py-2" type="submit" disabled={isLoading} onClick={loginHandler}> {isLoading ? 'loading... ' : 'Login'}  </button>
        </form>
      </main>
    </div>

  )
}

export default Login