import axios  from "./api"
const Authservice ={
    async userRegister(user){
        const respose = await axios.post('/users',{user:user})
        return respose
    },
    async userLogin(){},
    async getUser(){},

}
export default Authservice