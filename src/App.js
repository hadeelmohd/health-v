import './App.css';
import Home from './Home';
import Register from './Register';
import RegisterInvestor from './RegisterInvestor';
import RegisterSponser from './RegisterSponser';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/RegisterInvestor" element={<RegisterInvestor/>}></Route>
        <Route path="/RegisterSponser" element={<RegisterSponser/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
