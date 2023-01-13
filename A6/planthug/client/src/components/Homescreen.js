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
  MDBBtn
} from 'mdb-react-ui-kit';

function Homescreen(props) {
        return (<>
        <Container>
                <MDBCard background = 'success' className='text-white mb-3'>
                <MDBCardBody>
                <MDBCardTitle>My plants</MDBCardTitle>
                <MDBCardText>Some plants may need your help! Click to show what you can do for them</MDBCardText>
        <Button variant='success'><i className='bi bi-heart'></i>  <i className='bi bi-heart'></i>  <i className='bi bi-heart'></i></Button>
                </MDBCardBody>
                </MDBCard>
                <MDBCard background='secondary' className='text-white mb-3'>
        <MDBCardHeader>Trending</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>New dangers</MDBCardTitle>
          <MDBCardText>
            Is that new insect from Asia a menace for our plants?
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCard background='secondary' className='text-white mb-3'>
        <MDBCardHeader>Forecast</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Cloudy <i className='bi bi-cloud-fill'></i></MDBCardTitle>
          <MDBCardText>
                16°C
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </Container>
                </>
        )
}

export { Homescreen };
