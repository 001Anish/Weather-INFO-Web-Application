const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const GetWeather = (city) =>{
    cityname.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        temp.innerHTML = response.temp
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed        
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        sunrise.innerHTML = (new Date(response.sunrise*1000)).getHours() + ":" + (new Date(response.sunrise*1000)).getMinutes() + ":" + (new Date(response.sunrise*1000)).getSeconds() + " IST";
        sunset.innerHTML = (new Date(response.sunset*1000)).getHours() + ":" + (new Date(response.sunset*1000)).getMinutes() + ":" + (new Date(response.sunset*1000)).getSeconds() + " IST";
        wind_degrees.innerHTML = response.wind_degrees
    })
    .catch(err => console.error(err));

}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    GetWeather(city.value)
})

GetWeather("Pune")
