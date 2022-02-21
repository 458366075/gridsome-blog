const axios = require('axios')

module.exports = axios.create({
  baseURL: `${process.env.GRIDSOME_API_URL}/api/`,
});