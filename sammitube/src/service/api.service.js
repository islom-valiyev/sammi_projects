import axios from 'axios'
// const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': "4cc53abec0mshba73b5bd3235e25p1b69bejsn373675b8811e",
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