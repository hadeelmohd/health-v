import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import healthValleyLogo from './img/healthValleyLogo.png'

const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-dark ">
    <Link className="logo-size-header" to="/"><img src={healthValleyLogo} className='navbar-brand h1 float-right img-fluid'></img>
</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> 
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/">الرئيسية</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/Register">الإنضمام للمعسكر</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/RegisterInvestor">الإنضمام كمستثمر</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/RegisterSponser">الإنضمام كراعي</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/">تواصل معنا</Link>
      </li>
      <li className="nav-item">
        <p className="nav-link " ></p>
      </li>
    </ul>
  </div>
</nav>
</>
    );
}

export default Navbar;