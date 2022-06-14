import React from "react";
import "./App.css";
import Subway from "./components/Subway/Subway";
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/subway-builder" element={<LandingPage/>}/>
        <Route path="/subway-builder/subway" element={<Subway/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
