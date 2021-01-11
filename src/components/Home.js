import classNames from "classnames";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CityContext } from "../context/CityContext";
import cities from '../public/city.js';
import Location from "./Location";

export default function(){
  const context = useContext(CityContext);
  const onChange = (event) => {
    let { value } = event.target;
    value = value.split(".");
    context.setCity(parseInt(value[0]), value[1]);
  }
  return <div className="Home mt-5">
    <span className="question">BẠN ĐANG Ở ĐÂU ?</span>
    <div>
      <span className="answer col-md-6 col-sm-12">- TÔI ĐANG Ở </span>
      <select onChange={onChange} className={classNames("select", {"selected": context.id}, "col-md-4", "col-sm-12")}>
        <option value="0">Chọn tỉnh, thành phố</option>
        {
          cities.map((city, id) => city.id !== 0 ? <option key={id} value={`${city.id}.${city.name}`}>{city.name}</option>
          : <option key={id} value="0" disabled>{city.name}</option> )
        }
      </select>
      <span className="answer">!</span>
    </div>
    {
      context.id !== 0 ? <Link to="/weather" className="Link"><button style={{marginTop: "30px"}}>Thời tiết hiện tại</button></Link>
      : <button disabled style={{marginTop: "30px"}}>Thời tiết hiện tại</button>
    }
    <div style={{marginTop: "20px"}}><b>hoặc</b></div>
    <div><Location/></div>
  </div>
}