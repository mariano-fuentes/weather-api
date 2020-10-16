const express= require('express')
const weather= require('./utils/weather')

const app= express()
const PORT=3002


app.get('/weather',(req,res) => {
  const city = req.query.city || ''
  if(!city){
    return res.send('We need a city as a parameter to get current weather. Try something like => /weather?city=new york');
  }
  weather.getCurrentWeather(city, (data) => {
    if(data.error) {
      res.send(data.error)
    }
    res.send({
      location: data.location.country,
      city: data.location.name,
      forecast: data.current.weather_descriptions
    })
  })
})

app.get('*', (req,res) => {
  res.send('You may want to try: http://localhost:3002/weather')
})

//setup listening on PORT 3002
app.listen(PORT, () => {
  console.log('Weather app live on => http://localhost:3002/')
})