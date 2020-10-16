const axios = require('axios')

//setting the getWeather function
const getCurrentWeather = (city, callback) => {
  const API_KEY= '21df43b15474c1b1dd7c1a8a82da97c3'
  const url= `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`
  axios.get(url)
    .then((resp) => {
      callback(resp.data)
    })
    .catch((err)=>{
      callback(err)
    })
}

module.exports= {
  getCurrentWeather
}