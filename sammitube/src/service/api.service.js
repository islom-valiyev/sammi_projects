import axios from 'axios'
// const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': "8e4c6264dfmsh9b9f0923daac05dp159a91jsn86de0576cc85",
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
}

export const ApiService = {
    async fetching(url) {
        const responce = await axios.get(`https://youtube-v31.p.rapidapi.com/${url}`, options)
        // console.log(responce)
        return responce.data 
    }


}