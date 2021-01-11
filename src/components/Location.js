import React from "react";
import { CityContext } from "../context/CityContext";
import { Link } from "react-router-dom";

export default class Location extends React.Component {
  static contextType = CityContext;
  constructor(){
    super();
    this.state = {
      link: ""
    }
  }
  componentDidMount(){
    if(window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(position => {
        this.setState({link: `/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}`})
      }, err => {
        alert('ERROR: ' + err.code);
      }, {
        enableHighAccuracy: true,
        maximumAge: 0
      });
    }
  }

  render() {
    return this.state.link !== "" ? 
      (<Link className="Link" to={this.state.link}><button style={{marginTop: "10px"}}>Sử dụng định vị</button></Link>) 
      : (
      <div>
        <button disabled="disabled" style={{marginTop: "10px"}}>Sử dụng định vị</button>
        <br/>
        <code>Hãy cho phép trang web sử dụng định vị để mở khóa tính năng này</code>
      </div>);
  }
}