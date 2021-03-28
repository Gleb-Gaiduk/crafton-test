const axios = require('axios');

const requestInstance = axios.create({
    baseURL: 'https://api.github.com/',
})

export default requestInstance;