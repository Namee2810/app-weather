import React from "react";
import axios from "axios";
import CanvasJSReact from "../canvasjs/canvasjs.react";
import { CityContext } from "../context/CityContext";
import direction from "../public/direction.png";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const APIKEY = "3dd8e677b95b2bbd8b523754a15fb51b";
let dataPoints = [];

export default class Chart extends React.Component {
  static contextType = CityContext;
  componentDidMount(){
	const context = this.context;
    var chart = this.chart,
      link = `https://api.openweathermap.org/data/2.5/forecast?id=${context.id.toString()}&appid=${APIKEY}`;
    if(this.props.lat !== null) link = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.props.lat}&lon=${this.props.lon}&appid=${APIKEY}`;
		async function getData(){
			await axios.get(link)
      .then((res) => {
        let data = res.data.list;
        dataPoints.length = 0;
        for(let i=0; i<data.length; i++){
          dataPoints.push({
            x: new Date(data[i].dt*1000),
						y: Math.round(data[i].main.temp-273.15),
						icon: `<img src='https://openweathermap.org/img/wn/${data[i].weather[0].icon}.png'>`,
						weather: data[i].weather[0].main,
						direction: `<img src=${direction} style="width: 15px; transform: rotate(${data[i].wind.deg+90}deg)"/>`,
						speed: `${data[i].wind.speed} m/s`,
						visibility: `${Math.round(data[i].visibility/1000)} km`,
						humidity: `${data[i].main.humidity}%`,
						pressure: `${data[i].main.pressure} hPa`
          });
					chart.render();
				}
      });
		}
		getData();
	}
	render(){
		const options = {
			theme: "light2",
			title: {
				text: "Dự báo thời tiết 5 ngày"
			},
			axisY: {
				title: "Nhiệt độ",
				suffix: "°C",
			},
			data: [{
				type: "line",
				xValueFormatString: "HH:00 DD/MM",
				yValueFormatString: "##°C",
				dataPoints: dataPoints
			}],
			toolTip:{
				shared: true,
				content: "{x}<br/>{icon} {y} ({weather})<br/><b>Gió</b>: {direction} {speed}<br/><b>Áp suất không khí</b>: {pressure}<br/><b>Độ ẩm</b>: {humidity}<br/><b>Tầm nhìn</b>: {visibility}"
			}
		};
		return <div className="Chart">
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>
		</div>
	}
}