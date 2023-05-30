import { icon } from "../constatnts"
import { Input } from "../ui/index"
import { useState } from "react"
const Register = () => {
  const [name, setname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div class="text-center mt-5">

      <main class="form-signin w-25 m-auto ">
        <form>
          <img class="mb-4" src={icon} alt="" width="72" height="57" />
          <h1 class="h3 mb-3 fw-normal">Please Register</h1>
          <Input label={'Username'} type={'text'} state={name} setState={setname} />
          <Input label={'Email address'} type={'email'} state={email} setState={setEmail} />
          <Input label={'Password'} type={'password'} state={password} setState={setPassword} />


          <button class="btn btn-primary w-100 py-2" type="submit">Register</button>
        </form>
      </main>
    </div>

  )
}

export default Register