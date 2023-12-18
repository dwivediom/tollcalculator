import logo from './logo.svg';
import './App.css';
import Map from './components/Map/Map';
import { getCurrentLocation } from './API/getcurrentLocation';
import { useEffect, useState } from 'react';
import Autocomplate from './components/Map/form/Autocomplate';
import { ComplexNavbar } from './components/Map/Navbar/ComplexNavbar';
import Form from './components/Map/form/Form';
import {  AmenitiesProvider } from './Context/AmenitiesContext';
function App() {
  
  
  
  return (
    <AmenitiesProvider>
    <div className="App">
       <ComplexNavbar/>
        
       <div><Form/></div>
       <br/>
      
       <div id="mapContianer"><Map /></div> 
    </div>
    </AmenitiesProvider>
  );
}

export default App;
