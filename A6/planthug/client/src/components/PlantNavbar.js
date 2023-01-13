import '../App.css';
import { Container, Navbar, Button, Nav, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { MyNavbar } from './MyNavbar';
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBBtn,
  MDBCardGroup
} from 'mdb-react-ui-kit';

function PlantNavbar(props) {
        return (<Container>
                <Nav className="navbar fixed-bottom navbar-light bg-light py-3">
                <Button variant='light' className='button fixed-left'><i className={props.i1}></i></Button>
                <Button variant='light' className='button fixed-center'><i className={props.i2}></i></Button>
                <Button variant='light' className='button fixed-right'><i className={props.i3}></i></Button>
                </Nav></Container>
                );
}

export { PlantNavbar };