import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props){
    function maxTemp(){
        let maxTemperature = Math.round(props.info.temp.max);
        return maxTemperature;
    }

    function minTemp(){
        let minTemperature = Math.round(props.info.temp.min);
        return minTemperature;
    }
    function newDay(){
    const date = new Date(props.info.dt*1000);
    let days = ["sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    let day = days[date.getDay()];
    return `${day}`;
   
    }
    return (
        <div className="Forecast">
            <h5 className="day">{newDay()}</h5>
             <WeatherIcon code={props.info.weather[0].icon} size={40}/>
             <div className="temp">
             <span className="max-temp">{maxTemp()}°</span>
              <span className="min-temp">{minTemp()}°</span>   
             </div>
        </div>
    );
}
