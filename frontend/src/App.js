import { GetAllStationCoordinates, GetAllStationsData } from './Database/Data';
import './App.css';
import { useEffect, useState } from 'react';
import { MainPage } from './Pages/MainPage';

function App() {



  // useEffect(() => {
  //   GetAllStationsData()
  // }, [])

  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
