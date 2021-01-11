import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { Table } from "reactstrap";
import { CityContext } from "../context/CityContext";
import direction from "../public/direction.png";
import sunrise from "../public/sunrise.png";
import sunset from "../public/sunset.png";
import Chart from "./Chart";



const APIKEY = "3dd8e677b95b2bbd8b523754a15fb51b";

export default function() {
  const context = useContext(CityContext),
    [state, setState] = useState({data: {}, loaded: false}),
    query = new URLSearchParams(useLocation().search),
    lat = query.get("lat"), lon = query.get("lon");
  useEffect(() => {
    async function getData(){
      let link = "";
      if(context.id !== 0) link = `https://api.openweathermap.org/data/2.5/weather?id=${context.id.toString()}&appid=${APIKEY}`;
      if(lat!== null) link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;
      await axios.get(link)
      .then((res) => {
        let sunriseTime = new Date(res.data.sys.sunrise*1000),
          sunsetTime = new Date(res.data.sys.sunset*1000),
          now = new Date();
        res.data.sys.sunrise = `${sunriseTime.getHours()}:${sunriseTime.getMinutes()}:${sunriseTime.getSeconds()}`;
        res.data.sys.sunset = `${sunsetTime.getHours()}:${sunsetTime.getMinutes()}:${sunsetTime.getSeconds()}`;
        res.data.now = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
        setState({ data: res.data, loaded: true });
      })
    }
    if(context.id !== 0 || lat !== null)  getData();
  }, [])
  return <div className="Weather">
    {
      (context.id === 0 && lat === null) ? (<Redirect to="/" />) : 
      (state.loaded ? (<div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-0"></div>
          <div className="col-md-8 col-sm-12 Content">
            <Table responsive className="Table">
              <thead style={{fontSize:"30px"}}>
                <tr>
                  <th>{state.data.name}, {state.data.sys.country} ({state.data.now})</th>
                </tr>
              </thead>
              <tbody style={{fontWeight: "bold", fontSize: "22px"}}>
                <tr>
                  <td>
                    <img src={`https://openweathermap.org/img/wn/${state.data.weather[0].icon}@2x.png`} alt=""/>
                    {Math.round(state.data.main.temp-273.15)}°C ({state.data.weather[0].main}, {state.data.weather[0].description})
                  </td>
                </tr>
                <tr>
                  <td>Cảm giác như {Math.round(state.data.main.feels_like-273.15)}°C</td>
                </tr>
                <tr>
                  <td>Gió: <img alt="Not found" src={direction} style={{width: "30px", transform: `rotate(${state.data.wind.deg+90}deg)`}}/> {state.data.wind.speed} m/s</td>
                </tr>
                <tr>
                  <td>Áp suất không khí: {state.data.main.pressure} hPa</td>
                </tr>
                <tr>
                  <td>Độ ẩm: {state.data.main.humidity}%</td>
                </tr>
                <tr>
                  <td>Tầm nhìn: {Math.round(state.data.visibility/1000)} km</td>
                </tr>
                <tr>
                  <td><img src={sunrise} style={{width: "48px"}} alt=""/>Bình minh: {state.data.sys.sunrise} | <img src={sunset} style={{width: "48px"}} alt=""/>Hoàng hôn: {state.data.sys.sunset}</td>
                </tr>
              </tbody>
            </Table>
            <Chart lat={lat} lon={lon}/>
          </div>
        </div>
      </div>
      ) : (<FontAwesomeIcon icon={faSun} spin style={{marginTop: "200px", fontSize: "100px", color: "orange"}}/>))
    }
  </div>
}