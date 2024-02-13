import axios from "axios"

const apiRest = axios.create({
    baseURL: 'http://localhost:8080/'
})

export default apiRest