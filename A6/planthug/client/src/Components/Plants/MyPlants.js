import '../../App.css';
import { Container, Navbar, Button, Col, Row} from 'react-bootstrap';
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
import TitleBar from '../General/Titlebar';
import PlantNavbar from '../General/PlantNavbar';
import Home from '../Buttons/home';
import AddPlant from '../Buttons/addNew';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddToPlants from '../Buttons/addToPlants';
import RateButton from '../Buttons/rateButton';
import MyPlantsButton from '../Buttons/myPlantsButton';
import UndoButton from '../Buttons/undoButton';
import { AlignStart, Justify } from 'react-bootstrap-icons';

let pi;

function MyPlants(props) {
        if (props.add) return (<Added name={pi.name}/>);
        if (props.del) return (<Deleted name={pi.name}/>)
        if (!props.pi)
        return (<>
        <TitleBar name='My Plants'></TitleBar>
        {props.userPlants.map((plant) =><PlantCard plant={plant}></PlantCard>)}
        <Navbar/><Navbar/><Navbar/><Navbar/><Navbar/><Navbar/>
        <PlantNavbar i1={<Home/>} i3={<AddPlant new={1}/>}/></>
        );
        else return (<PlantInfo/>);
}

function PlantCard(props) {
const navigate = useNavigate();
    return(
        <Container>
                <MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'>
                <MDBCardImage src='https://redgoosespice.com/wp-content/uploads/AllspiceWhole.jpg' position='top' alt='...' />
                <MDBCardBody>
                <MDBCardTitle>{props.plant.name}</MDBCardTitle>
                <MDBCardText>Tap to perform an action:<div></div></MDBCardText>
                <Row>
        {props.plant.watered === 1 && <Col><Button className="border-0" style={{backgroundColor:'#A7C957' }}><i className='bi bi-droplet'></i>  Water</Button></Col>}
        {props.plant.repotted === 1 && <Col><Button className="border-0" style={{backgroundColor:'#A7C957'}}><i className='bi bi-trash2'></i>  Repot</Button></Col>}
        {props.plant.fertilized === 1 && <Col><Button className="border-0" style={{backgroundColor:'#A7C957'}}><i className='bi bi-stars'>  Fertilize</i></Button></Col>}

        {props.plant.watered === 0 && <Col><Button className="border-0" style={{backgroundColor:'#bc4749'}}><i className='bi bi-droplet'></i>  Water</Button></Col>}
        {props.plant.repotted === 0 && <Col><Button className="border-0" style={{backgroundColor:'#bc4749'}}><i className='bi bi-trash2'></i>  Repot</Button></Col>}
        {props.plant.fertilized === 0 && <Col><Button className="border-0" style={{backgroundColor:'#bc4749'}}><i className='bi bi-stars'></i>  Fertilize</Button></Col>}</Row>
        
        {props.plant.watered === 0 && <MDBCardText>Water this plant!</MDBCardText>}
        {props.plant.repotted === 0 && <MDBCardText>Time to repot!</MDBCardText>}
        {props.plant.fertilized === 0 && <MDBCardText>Use some fertilizer!</MDBCardText>}
        <MDBCardText><Button style={{backgroundColor:'#A7C957'}} onClick={()=>{pi=props.plant; navigate('/plantinfo')}} className="border-0">
                <i className='bi bi-info-circle-fill'></i></Button> See more about this plant</MDBCardText>

                </MDBCardBody>
                </MDBCard>      
        </Container>
            
        );
}

function PlantInfo(){
        
        const[dsc,setDsc] = useState(false); 

        return (<><Container><TitleBar name='Plant Info'></TitleBar></Container><Container>
                <MDBCard style={{backgroundColor:'#386641'}}>
                  <MDBCardImage src='https://redgoosespice.com/wp-content/uploads/AllspiceWhole.jpg' position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-light'>{pi.name}</MDBCardTitle>
                    <Button className="border-0" style={{backgroundColor:'#386641'}}><i className='bi bi-droplet'></i> 7 times a week</Button>
                    <Button className="border-0" style={{backgroundColor:'#386641'}}><i className='bi bi-sun'></i> Full sunlight</Button>
                    <Button className="border-0" style={{backgroundColor:'#386641'}}><i className='bi bi-stars'></i> Tropical plants fertilizer</Button>
                    {!dsc && <Button className="border-0" style={{backgroundColor:'#A7C957', color:'black'}} onClick={()=>setDsc(true)}>Show description</Button>}
                    {dsc && <Button className="border-0" style={{backgroundColor:'#A7C957', color:'black'}} onClick={()=>setDsc(false)}>Hide description</Button>}
                    {dsc && <MDBCardText className='text-light'>
                      {pi.description}
                    </MDBCardText>}
                  </MDBCardBody>
                </MDBCard></Container>
                <PlantNavbar i1={<Home/>} i3={<AddToPlants add={1}/>}/>
                </>);
}

function Added(props) {
        return(<><Navbar/><Navbar/>
        <Container style={{textAlign:'center'}}><h1>Added!</h1></Container>
        <Container><MDBCard>
        <MDBCardImage src='https://redgoosespice.com/wp-content/uploads/AllspiceWhole.jpg' position='top' alt='...' />
        <MDBCardText>{props.name} was added to My Plants :)</MDBCardText>
        </MDBCard></Container>          
        <PlantNavbar i1={<Home/>} i2={<MyPlantsButton/>} i3={<UndoButton/>}/>
        </>);
}

function Deleted(props) {
        return(<><Navbar/><Navbar/>
        <Container style={{textAlign:'center'}}><h1>Deleted!</h1></Container>
        <Container><MDBCard>
        <MDBCardImage src='https://redgoosespice.com/wp-content/uploads/AllspiceWhole.jpg' position='top' alt='...' />
        <MDBCardText>{props.name} is no longer in My Plants :(</MDBCardText>
        </MDBCard></Container>          
        <PlantNavbar i1={<Home/>} i3={<MyPlantsButton/>}/>
        </>);
}


export default MyPlants;