import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyWeather.css";

export default function DailyWeather(){
    return (<div className="DailyWeather">
        <div className="row">
            <div className="col-sm-3">
             <h5 className="day">Mon</h5>
             <WeatherIcon code="01d"size={40}/>
             <div className="temp">
             <span className="max-temp">20 </span>
              <span className="min-temp">18</span>
             </div>
        </div>
       </div>
    </div>)
}