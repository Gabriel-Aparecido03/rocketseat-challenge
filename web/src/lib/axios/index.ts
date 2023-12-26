import axios from "axios";

const apiConnection =  axios.create({ baseURL : 'http://localhost:3333/'})

export { apiConnection }