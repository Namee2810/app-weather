import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from "reactstrap";
import { Link } from "react-router-dom";
import sunny from "../public/sunny.png"

export default function(){
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return <div className="Header sticky-top">
    <Navbar light expand="sm">
      <Link to="/">
          <img width="48px" src={sunny} alt=""/>
      </Link>
      <NavbarToggler onClick={toggle} className="Toggler"/>
      <Collapse isOpen={isOpen} navbar style={{transition: "all 0.5s"}}>
        <Nav className="mr-auto" navbar>
          <NavItem className="NavLink">
            <Link className="Link ml-3 mr-3" to="/weather">Dự báo thời tiết</Link>
          </NavItem>
          <NavItem className="NavLink">
            <Link className="Link ml-3 mr-3 mb-1" to="/about">Giới thiệu</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
}