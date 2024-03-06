import React from 'react'
import './MeteoApp.css'
import search_icon from "../Assets/search.png"
import clear_icon from "../Assets/clear.png"
import cloud_icon from "../Assets/cloud.png"
import drizzle_icon from "../Assets/drizzle.png"
import rain_icon from "../Assets/rain.png"
import snow_icon from "../Assets/snow.png"
import wind_icon from "../Assets/wind.png"
import humidity_icon from "../Assets/humidity.png"



const MeteoApp = () => {
  let api_key = "175383884ca509f69c6b3c84b19580f3";
  const search = async ()=>{
    const element = document.getElementsByClassName("cityInput")
    if(element[0].value === "")
    {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percent")
    const wind = document.getElementsByClassName("wind-rate")
    const temperature = document.getElementsByClassName("meteo-temps")
    const position = document.getElementsByClassName("meteo-position")

    humidity[0].innerHTML = data.main.humidity+" %";
    wind[0].innerHTML = data.wind.speed+" km/h";
    temperature[0].innerHTML = data.main.temp+"°c";
    position[0].innerHTML = data.name;

  }
  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className='cityInput' placeholder='search' />
        <div className="search-icon" onClick={()=>{search()}}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className='meteo-image'>
        <img src={cloud_icon} alt="" />
      </div>
      <div className="meteo-temps">24°c</div>
      <div className="meteo-position">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" />
          <div className="data">
            <div className="wind-rate">18km/h</div>
            <div className="text">vent</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeteoApp
