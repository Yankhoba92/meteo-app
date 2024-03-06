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
  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className='cityInput' placeholder='search' />
        <div className="search-icon">
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
          <img src="" alt="" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src="" alt="" />
          <div className="data">
            <div className="humidity-percent">18km/h</div>
            <div className="text">vent</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeteoApp
