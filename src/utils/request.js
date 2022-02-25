const axios = require('axios')

const request = axios.create({
  baseURL: `${process.env.GRIDSOME_API_URL}/api/`,
});

// request.interceptors.request.use(res => {
//   console.log(res, 'start');
//   return res
// }, res => console.log(res, 'error'))

// request.interceptors.response.use(res => {
//   console.log(res);
//   return res
// }, res => console.log(res))

module.exports = request