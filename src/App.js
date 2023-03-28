import React from 'react';
import './style.css';
import RandomNumberGenerator from './Components/Calculators/RandomNumberGenerator';
import AppAppBar from './Components/UI/AppBar';
import AppFooter from './Components/UI/AppFooter';
import DogYears from './Components/Calculators/DogYears'

export default function App() {
  return (
    <>
      <AppAppBar />
      <RandomNumberGenerator />
      {/* <DogYears /> */}
      {/* <AppFooter /> */}
    </>
  );
}
