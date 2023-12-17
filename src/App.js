import logo from './logo.svg';
import './App.css';
import Map from './components/Map/Map';
import { getCurrentLocation } from './API/getcurrentLocation';
import { useEffect, useState } from 'react';
function App() {
  
  
  
  return (
    <div className="App">
       <div id="mapContianer"><Map /></div> 
    </div>
  );
}

export default App;
