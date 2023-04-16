import React from 'react';
import './index.css';
import RandomNumberGenerator from './Components/Calculators/RandomNumberGenerator';
import AppAppBar from './Components/UI/AppBar';
import AppFooter from './Components/UI/AppFooter';
import DogYears from './Components/Calculators/DogYears';
import BarbellWeight from './Components/Calculators/BarbellWeight';
import DaysUntil from './Components/Calculators/DaysUntil';
import SideBar from './Components/UI/SideBar';

export default function App() {
  return (
    <>
      <div className="flex">
        <SideBar />
        {/* <DaysUntil /> */}
        <DogYears />
      </div>
    </>
  );
}
