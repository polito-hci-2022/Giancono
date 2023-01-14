import '../../App.css';
import { Container, Navbar, Button, Nav, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardSubTitle,
} from 'mdb-react-ui-kit';
import TitleBar from './Titlebar';
import PlantNavbar from './PlantNavbar';
import Home from '../Buttons/home';
import AddPlant from '../Buttons/addNew';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MyPlants from './MyPlants';
import MyPlantsButton from '../Buttons/myPlantsButton';

let pi;

function AP(props) {
        return (<><Container>
        <TitleBar name='Add Plant'></TitleBar>
        </Container>
        
        <PlantNavbar i1={<Home/>} i3={<MyPlantsButton/>}/>
        </>);

}

export default AP;