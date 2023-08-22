import React,{useState} from "react";
import "./Weather.css";
import ReactAnimatedWeather from 'react-animated-weather';
import axios from 'axios';
import moment from "moment";

export default function Weather(){

    let refresh = ()=>{
        window.location.reload();
    }
    let[city,setCity]=useState('');
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState({});


    function showTemperature(response) {
        console.log(response.data.name);
        setLoaded(true);
        setWeather({
          name:response.data.name,
          temperature: response.data.main.temp,
          wind: response.data.wind.speed,
          humidity: response.data.main.humidity,
          icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
          description: response.data.weather[0].description
        });
      }

    
    
    function handleSubmit(event){
        event.preventDefault();
        let apiKey ="99b8f9330a1bfba3a85e523fd3c2e528";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showTemperature);
    }
    function handleChange(event){
        setCity(event.target.value);
        
    }
    
           let form =( <form onSubmit={handleSubmit}>
        
                <input type="search"placeholder="Search city.."className="search"onChange={handleChange}/>
                <input type="submit"value="Search"className="button"/>

                <button onClick={refresh}className="button">refresh</button>
                
               
            
            </form>);

            if(loaded){
                return(
                    <div className="Weather">
                    {form}
                    <h1>{weather.name}</h1>
                    <p>{moment().format('dddd')},{moment().format('LL')}</p>
                    <h2>{weather.description}</h2>
                  <div className="Rain-icon">
                  <img src={weather.icon} alt={weather.description} />
                  </div>
                  
                  <ul>
                <div className="row">
                    <div className="col-sm-6">
          <li className="temp">Temperature: {Math.round(weather.temperature)}°C</li>
          </div>
          <div className="col-sm-6">
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          </div>
          </div>
          </ul>
                    </div>
                );
            }else{
                return (
                    <div className="Weather">
                    {form}
                    <h1>Search city please...</h1>
                    <div className="Rain-icon">
            <ReactAnimatedWeather 
                icon='RAIN'
                color='black'
                size={50}
                animate={true}
            />
            </div>
                    </div>
                );
            }
            
            
            
            
            
            
         
    
    
   
}