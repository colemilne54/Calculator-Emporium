import React from 'react';
import './style.css';
import RandomNumberGenerator from './Components/Calculators/RandomNumberGenerator';
import AppAppBar from './Components/UI/AppBar';

export default function App() {
  return (
    <>
      <AppAppBar />
      <RandomNumberGenerator />
    </>
  );
}
