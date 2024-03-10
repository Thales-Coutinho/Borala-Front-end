import axios from "axios"

const apiRest = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }
})

export default apiRest