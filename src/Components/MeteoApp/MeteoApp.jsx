import React, { useState } from "react";
import "./MeteoApp.css";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

const MeteoApp = () => {
  let api_key = "175383884ca509f69c6b3c84b19580f3";
  const [wicon, setWicon] = useState(cloud_icon);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;

    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error('City not found');
      }
      let data = await response.json();

      const humidity = document.getElementsByClassName("humidity-percent");
      const wind = document.getElementsByClassName("wind-rate");
      const temperature = document.getElementsByClassName("meteo-temps");
      const position = document.getElementsByClassName("meteo-position");

      humidity[0].innerHTML = data.main.humidity + " %";
      wind[0].innerHTML = data.wind.speed + " km/h";
      temperature[0].innerHTML = data.main.temp + "°c";
      position[0].innerHTML = data.name;

      switch (data.weather[0].icon) {
        case "01d":
        case "01n":
          setWicon(clear_icon);
          break;
        case "02d":
        case "02n":
          setWicon(cloud_icon);
          break;
        case "03d":
        case "03n":
        case "04d":
        case "04n":
          setWicon(cloud_icon);
          break;
        case "09d":
        case "09n":
        case "10d":
        case "10n":
          setWicon(rain_icon);
          break;
        case "13d":
        case "13n":
          setWicon(snow_icon);
          break;
        default:
          setWicon(cloud_icon);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="meteo-image">
        <img src={wicon} alt="" />
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
            <div className="text">Vent</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeteoApp;
