import axios  from "./api"
const AuthService ={
    async userRegister(user){
        const respose = await axios.post('/users',{user:user})
        return respose
    },
    async userLogin(user){
        const respose = await axios.post('/users/login',{user:user})
        return respose
    },
    async getUser(){},

}
export default AuthService