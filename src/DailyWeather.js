import React,{useState,useEffect} from "react";
import "./DailyWeather.css";
import axios from "axios";
import ForecastWeather from "./ForecastWeather";

export default function DailyWeather(props){
    let[loaded,setLoaded] = useState(false);
    let[forecast,setForecast]=useState(null);

    function showForecast(response){
        setLoaded(true);
        setForecast(response.data.daily);
    }
   useEffect(()=>{
    setLoaded(false);
   },[props.coordinates])

    if(loaded){
        return (<div className="DailyWeather">
        <div className="row">
            {forecast.map(function(dailyForecast,index){
                if(index<6){
                return (<div className="col-sm-2"key={index}>
                <ForecastWeather info={dailyForecast} />
                </div>);}else{
                    return null;
                }
            })}
            
        </div>
       </div>
    );
    }else{
        let lat = props.coordinates.lat;
        let lon = props.coordinates.lon;
        let units = "metric";
        let apiKey ="c8735bb7e8e2f8d8a38c7501f3cd47d3";
        let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(showForecast);

    }
    
   
}