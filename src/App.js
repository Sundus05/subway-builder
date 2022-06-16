import React from "react";
import "./App.css";
import Subway from "./components/Subway/Subway";
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<LandingPage/>}/>
        <Route path="/order" element={<Subway/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
