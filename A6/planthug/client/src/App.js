import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import dayjs from 'dayjs';
import {Homescreen} from './components/Homescreen';
import {PlantNavbar} from './components/PlantNavbar';
import { Container} from 'react-bootstrap';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<>
          <Homescreen/><PlantNavbar i1={'bi bi-chat-dots-fill'} i2={'bi bi-lightbulb-fill'} i3={'bi bi-camera-fill'}/></>
        }/>
        <Route path='*' element={ <Container/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
