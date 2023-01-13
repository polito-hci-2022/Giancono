import '../App.css';
import { Container, Navbar, Button, Nav, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardSubTitle,
} from 'mdb-react-ui-kit';

function MyPlants(props) {
        return (<>
        {props.userPlants.map((plant) =><PlantCard plant={plant}></PlantCard>)}</>
        );
}

function PlantCard(props) {
    return(
        <Container>
                <MDBCard background = 'success' className='text-white mb-3'>
                <MDBCardBody>
                <MDBCardTitle>{props.plant.customName}</MDBCardTitle>
                <MDBCardSubTitle>{props.plant.name}</MDBCardSubTitle>
                <MDBCardText>Press to perform an action:</MDBCardText>
        {props.plant.watered === 1 && <Button variant='success'><i className='bi bi-heart-fill'></i></Button>}
        {props.plant.repotted === 1 && <Button variant='success'><i className='bi bi-heart-fill'></i></Button>}
        {props.plant.fertilized === 1 && <Button variant='success'><i className='bi bi-heart-fill'></i></Button>}

        {props.plant.watered === 0 && <Button variant='danger'><i className='bi bi-heart'></i></Button>}
        {props.plant.repotted === 0 && <Button variant='danger'><i className='bi bi-heart'></i></Button>}
        {props.plant.fertilized === 0 && <Button variant='danger'><i className='bi bi-heart'></i></Button>}
        
        {props.plant.watered === 0 && <MDBCardText>Water this plant!</MDBCardText>}
        {props.plant.repotted === 0 && <MDBCardText>Time to repot!</MDBCardText>}
        {props.plant.fertilized === 0 && <MDBCardText>Use some fertilizer!</MDBCardText>}
        <MDBCardText><Button variant='success'><i className='bi bi-info-circle-fill'></i></Button>See more about this plant</MDBCardText>

                </MDBCardBody>
                </MDBCard>      
        </Container>
            
        );
}

export { MyPlants };