import React from 'react';
import './index.css';

import AppAppBar from './Components/UI/AppBar';
import AppFooter from './Components/UI/AppFooter';
import SideBar from './Components/UI/SideBar';

import DogYears from './Components/Calculators/DogYears';
import FeetToInches from './Components/Calculators/FeetToInches'
import BarbellWeight from './Components/Calculators/BarbellWeight';
import BMI from './Components/Calculators/BMI';
import WindChill from './Components/Calculators/WindChill'
import DaysUntil from './Components/Calculators/DaysUntil';
import RandomNumberGenerator from './Components/Calculators/RandomNumberGenerator';


import { Route, Routes, Link } from "react-router-dom"


export default function App() {
  return (
    <>
      <div className="flex">
        <AppAppBar />
        <SideBar />
        <div className="flex mx-auto mt-20 flex-col">
          <Routes>
            <Route path="/"/>
            <Route path="/dog-years" element={<DogYears />} />
            <Route path="/feet-to-inches" element={<FeetToInches />} />
            <Route path="/barbell-weight" element={<BarbellWeight />} />
            <Route path="/bmi" element={<BMI />} />
            <Route path="/windchill" element={<WindChill />} />
            <Route path="/random-number" element={<RandomNumberGenerator />} />
          </Routes>
        </div>
      </div>

    </>
  );
}
