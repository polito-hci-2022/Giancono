<<<<<<< HEAD
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './Components/General/Homepage';
import Test from './Components/Test';
=======
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import dayjs from 'dayjs';
import {Homescreen} from './components/Homescreen';
import {PlantNavbar} from './components/PlantNavbar';
import { Container} from 'react-bootstrap';
import { MyNavbar } from './components/MyNavbar';
import { MyPlants } from './components/MyPlants';

let up=[{
  "plantId": "1",
  "name": "Allspice",
  "customName": "Giorgia",
  "watered": 1,
  "repotted": 0,
  "fertilized": 1
}]

function App() {
>>>>>>> a672dd035fee4d4a3be2e3777b432b212ced8383

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Homepage/>}/>
        <Route path='/test' element={<Test/>}/>
=======
        <Route path='/' element={<>
          <MyNavbar title='PLANT HUG'/><Homescreen/><PlantNavbar i1={'bi bi-chat-dots-fill'} i2={'bi bi-lightbulb-fill'} i3={'bi bi-camera-fill'}/></>
        }/>
        <Route path='/myplants' element={<>
          <MyNavbar title='My Plants'/><MyPlants userPlants={up}/><PlantNavbar i1={'bi bi-chat-dots-fill'} i2={'bi bi-lightbulb-fill'} i3={'bi bi-camera-fill'}/></>
        }/>
        <Route path='*' element={ <Container/> } />
>>>>>>> a672dd035fee4d4a3be2e3777b432b212ced8383
      </Routes>
    </BrowserRouter>
  );
}

export default App;
