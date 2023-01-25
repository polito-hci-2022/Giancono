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
import MyPlantsButton from '../Buttons/myPlantsButton';

let pi;

function MyPlants(props) {
        const [count,setCount] = useState();
        const [p, setP] = useState();
        let d = new Date();
        let rand = d.getSeconds();

        useEffect(() => {
                props.getUP();
                if (rand%2 === 0 && props.userPlants) props.userPlants.map(p => props.UPL(p.idPlant,-1,0,0));
                if (rand%3 === 0 && props.userPlants) props.userPlants.map(p => props.UPL(p.idPlant, 0,0,-1));
                if (rand%7 === 0 && props.userPlants) props.userPlants.map(p => props.UPL(p.idPlant, 0,-1,0));
              }, []);

        if (props.del) return (<Deleted name={p.name}/>)
        if (!props.pi)
        return (<>
        <Container><TitleBar arrow={true} name='My Plants'></TitleBar></Container>
        {props.userPlants.length === 0 && <><Navbar/><Navbar/><h4 style={{textAlign:'center', color:'gray'}}>No plants added yet. Add some :)</h4></>}
        {props.userPlants && props.userPlants.map((plant) =><PlantCard deletePID={props.deletePID} setP={setP} UPL={props.UPL} getUP={props.getUP} pid={props.pid} plant={plant} getPID={props.getPID}></PlantCard>)}
        <Navbar/><Navbar/><Navbar/><Navbar/><Navbar/><Navbar/>
        <PlantNavbar i1={<Home/>} i3={<AddPlant new={1}/>}/></>
        );
        else return (<PlantInfo pid={props.pid} getPID={props.getPID} p={p} deletePID={props.deletePID}/>);
}

function PlantCard(props) {
const navigate = useNavigate();
const [count,setCount] = useState();

useEffect(() => {
        props.setP(props.getPID(props.plant.idPlant));
        props.getUP();
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 20000);
      }, [count]);

    return(
        <Container>
                <MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'>
                <MDBCardImage src={props.plant.photo} position='top' alt='...' />
                <MDBCardBody>
                <MDBCardTitle>{props.plant.name}</MDBCardTitle>
                <MDBCardText>Tap to perform an action:<div></div></MDBCardText>
                <Row>
        {props.plant.watered === 1 && <Col><Button className="border-0 text-black" style={{backgroundColor:'#A7C957' }}><i className='bi bi-droplet'></i>  Water</Button></Col>}
        {props.plant.watered === 0 && <Col><Button onClick={()=>props.UPL(props.plant.idPlant,1,0,0)} className="border-0" style={{backgroundColor:'#bc4749'}}><i className='bi bi-droplet'></i>  Water</Button></Col>}
        
        {props.plant.repotted === 1 && <Col><Button className="border-0 text-black" style={{backgroundColor:'#A7C957'}}><i className='bi bi-trash2'></i>  Repot</Button></Col>}
        {props.plant.repotted === 0 && <Col><Button onClick={()=>props.UPL(props.plant.idPlant,0,1,0)} className="border-0" style={{backgroundColor:'#bc4749'}}><i className='bi bi-trash2'></i>  Repot</Button></Col>}
        
        {props.plant.fertilized === 1 && <Col><Button className="border-0 text-black" style={{backgroundColor:'#A7C957'}}><i className='bi bi-stars'>  Fertilize</i></Button></Col>}
        {props.plant.fertilized === 0 && <Col><Button onClick={()=>props.UPL(props.plant.idPlant,0,0,1)} className="border-0" style={{backgroundColor:'#bc4749'}}><i className='bi bi-stars'></i>  Fertilize</Button></Col>}</Row>
        <br/>
        {props.plant.watered === 0 && <MDBCardText>Water this plant!</MDBCardText>}
        {props.plant.repotted === 0 && <MDBCardText>Time to repot!</MDBCardText>}
        {props.plant.fertilized === 0 && <MDBCardText>Use some fertilizer!</MDBCardText>}
        {props.plant.fertilized === 1 && props.plant.watered === 1 && props.plant.repotted === 1 && <MDBCardText>Your plant is probably okay ;-)</MDBCardText>}
        <MDBCardText><br/><Row>
        <Col><Button className="border-0 text-black" style={{backgroundColor:'#A7C957' }} onClick={()=>{props.setP(props.plant); props.getPID(props.plant.idPlant); navigate('/plantinfo')}}><i style={{color:'black'}} className='bi bi-info-circle'/>  See more</Button>
        </Col><Col><Button className="border-0 text-black" style={{backgroundColor:'#A7C957' }} onClick={()=>{pi=props.plant; props.deletePID(props.plant.idPlant); navigate('/undone')}}><i style={{color:'black'}} className='bi bi-dash-circle'/>  Delete plant</Button>
        </Col></Row></MDBCardText>
                </MDBCardBody>
                </MDBCard>      
        </Container>
            
        );
}

function PlantInfo(props){

        const[dsc,setDsc] = useState(false); 
      
        return (<><Container><TitleBar name='Plant Info' arrow={true}></TitleBar></Container><Container>
                <MDBCard style={{backgroundColor:'#386641'}}>
                  <MDBCardImage src={props.pid && props.pid[0].photo} position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-light'>{props.pid && props.pid[0].name}</MDBCardTitle>
                    <MDBCardText style={{color:'#A7C957'}}>BASIC NEEDS:</MDBCardText>
                    <Row>
                    <Button className="border-0" style={{backgroundColor:'#386641'}}><i className='bi bi-droplet'></i> {props.pid && props.pid[0].waterNeed}</Button>
                    <Button className="border-0" style={{backgroundColor:'#386641'}}><i className='bi bi-sun'></i> {props.pid && props.pid[0].sunNeed}</Button>
                    <Button className="border-0" style={{backgroundColor:'#386641'}}><i className='bi bi-stars'></i> {props.pid && props.pid[0].fertilizerNeed}</Button>
                    <MDBCardText style={{color:'#A7C957'}}>BE WARY OF:</MDBCardText>
                    <Button className="border-0" style={{backgroundColor:'#386641'}}><i className='bi bi-bug'></i> {props.pid && props.pid[0].pests}</Button>
                    <Button className="border-0" style={{backgroundColor:'#386641'}}><i className='bi bi-activity'></i> {props.pid && props.pid[0].diseases}</Button>
                    </Row>
                    {!dsc && <Row><Button className="border-0" style={{backgroundColor:'#A7C957', color:'black'}} onClick={()=>setDsc(true)}>Show description</Button></Row>}
                    {dsc && <Row><Button className="border-0" style={{backgroundColor:'#A7C957', color:'black'}} onClick={()=>setDsc(false)}>Hide description</Button></Row>}
                    {dsc && <MDBCardText className='text-light'>
                      {props.pid && props.pid[0].description}
                    </MDBCardText>}
                  </MDBCardBody>
                </MDBCard></Container><Navbar/><Navbar/><Navbar/><Navbar/><Navbar/><Navbar/>
                <PlantNavbar i1={<Home/>} i3={<Delete deletePID={props.deletePID} plant={props.pid && props.pid[0]}/>}/>
                </>);
}

function Delete(props) {
        const navigate = useNavigate();
        return(
        <div style={{textAlign:'center'}}>
                <h6 onClick={()=>{pi=props.plant; props.deletePID(props.plant.id); navigate('/undone')}}>
                <i style={{color:'black', fontSize:28}} className='bi bi-dash-circle'/>
                <br></br>Delete plant
                </h6>
            </div>
        );
}

function Deleted(props) {

        return(<><Navbar/><Navbar/>
        <Container style={{textAlign:'center'}}><h1>Deleted!</h1></Container>
        <Container><MDBCard>
        <MDBCardImage src={pi.photo} position='top' alt='...' />
        <MDBCardText>{pi.name} is no longer in My Plants :(</MDBCardText>
        </MDBCard></Container>          
        <PlantNavbar i1={<Home/>} i3={<MyPlantsButton/>}/>
        </>);
}


export default MyPlants;