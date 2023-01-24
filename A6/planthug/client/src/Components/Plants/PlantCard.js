import { Button, Card, Navbar, Modal, Container, Row } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";
import PlantNavbar from "../General/PlantNavbar";
import Home from "../Buttons/home";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
  } from 'mdb-react-ui-kit';
import TitleBar from "../General/Titlebar";
import AddToPlants from "../Buttons/addToPlants";
import MyPlantsButton from "../Buttons/myPlantsButton";
import UndoButton from "../Buttons/undoButton";

let pinfo, p;

function PlantCard(props){
    const [show, setShow] = useState(false);
    const [rated, setRated] = useState(false);
    const [rate, setRate] = useState(0);
    const handleClose = () => {
        setRate(0);
        setShow(false);
    };
    const handleConfirm = () => {
        setRated(true);
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    if (props.add) return (<Added name={pinfo.name}/>);
    if (props.del) return (<Deleted name={p.name}/>);
    if (!props.pi)
     return(<>
        <Card className="flex-shrink-0 mx-2 px-0" style={{width: '10rem', height: '10rem', borderBlockColor: '#386641', backgroundColor: '#386641', color: 'white'}}>
            <Card.Img style={{width: '100%', height: '65%', overflow: 'hidden', objectFit: 'cover'}} variant="top" src={props.path} />
            <div style={{height: '35%'}}>
            <Card.Title className="text-center mt-1 mb-1 py-0" style={{fontSize: '1rem'}}>{props.name}</Card.Title>
            <Card.Body className={"d-flex flex-row my-0 px-1 py-0 " + (props.typeOfRating !== null ? 'justify-content-between' : 'justify-content-center')}>
                {props.typeOfRating !== null && <Card.Link disabled><StarFill style={{color: "#386641"}} /></Card.Link>}
                <Card.Link className="mx-0"><Button onClick={() => {
                    pinfo=props.plant; props.getUPID(pinfo.id); navigate('/plantinfo2');
                }} className="p-1" style={{color: 'black', backgroundColor: '#A7C957', borderWidth: 0, boxShadow: 'none', outline: 'none', fontSize: '0.75rem'}}><i style={{color:'black'}} className='bi bi-info-circle-fill'/>&nbsp;See more</Button></Card.Link>
                {props.typeOfRating !== null && <Card.Link className="mx-0" onClick={handleShow}><StarFill style={{color: "yellow"}} /></Card.Link>}
            </Card.Body>
            </div>
        </Card>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton style={{backgroundColor: '#A7C957'}}>
                <Modal.Title>Rate our {props.typeOfRating}</Modal.Title>
            </Modal.Header>
            {rated ? <Modal.Body className="d-flex flex-row justify-content-center" style={{backgroundColor: '#A7C957'}}>
                You have already rated this {props.typeOfRating}!
            </Modal.Body>:
            <Modal.Body className="d-flex flex-row justify-content-center" style={{backgroundColor: '#A7C957'}}>
                <a onClick={() => setRate(1)}>{rate >= 1 ? <StarFill color="yellow" className="mx-1" /> : <Star color="yellow" className="mx-1" />}</a>
                <a onClick={() => setRate(2)}>{rate >= 2 ? <StarFill color="yellow" className="mx-1" /> : <Star color="yellow" className="mx-1" />}</a>
                <a onClick={() => setRate(3)}>{rate >= 3 ? <StarFill color="yellow" className="mx-1" /> : <Star color="yellow" className="mx-1" />}</a>
                <a onClick={() => setRate(4)}>{rate >= 4 ? <StarFill color="yellow" className="mx-1" /> : <Star color="yellow" className="mx-1" />}</a>
                <a onClick={() => setRate(5)}>{rate >= 5 ? <StarFill color="yellow" className="mx-1" /> : <Star color="yellow" className="mx-1" />}</a>
            </Modal.Body>}
            {! rated && <Modal.Footer style={{backgroundColor: '#A7C957'}}>
                <Button style={{backgroundColor: '#6A994E', borderWidth: 0, boxShadow: 'none', outline: 'none'}} onClick={handleClose}>
                    Cancel
                </Button>
                <Button style={{backgroundColor: '#386641', borderWidth: 0, boxShadow: 'none', outline: 'none'}} onClick={handleConfirm}>
                    Confirm
                </Button>
            </Modal.Footer>}
        </Modal>
        <PlantNavbar i2={<Home/>}/></>
    )
    else return (<PlantInfo upid={props.upid} getUPID={props.getUPID} deletePID={props.deletePID} id={pinfo.id} photo={pinfo.photo} addP={props.addP}/>);
}

function PlantInfo(props){
        
    const[dsc,setDsc] = useState(false);
    
    return (<><Container><TitleBar name='Plant Info' arrow={true}></TitleBar></Container><Container>
                      <Navbar/>
            <MDBCard style={{backgroundColor:'#386641'}}>
              <MDBCardImage src={pinfo.photo} position='top' alt='...' />
              <MDBCardBody>
                <MDBCardTitle className='text-light'>{pinfo.name}</MDBCardTitle>
                <MDBCardText style={{color:'#A7C957'}}>BASIC NEEDS:</MDBCardText>
                      <Row>
                      <Button className="border-0" style={{backgroundColor:'#386641'}}><i className='bi bi-droplet'></i> {pinfo.waterNeed}</Button>
                      <Button className="border-0" style={{backgroundColor:'#386641'}}><i className='bi bi-sun'></i> {pinfo.sunNeed}</Button>
                      <Button className="border-0" style={{backgroundColor:'#386641'}}><i className='bi bi-stars'></i> {pinfo.fertilizerNeed}</Button>
                      <MDBCardText style={{color:'#A7C957'}}>BE WARY OF:</MDBCardText>
                      <Button className="border-0" style={{backgroundColor:'#386641'}}><i className='bi bi-bug'></i> {pinfo.pests}</Button>
                      <Button className="border-0" style={{backgroundColor:'#386641'}}><i className='bi bi-activity'></i> {pinfo.diseases}</Button>
                      </Row>
                {!dsc && <Row><Button className="border-0" style={{backgroundColor:'#A7C957', color:'black'}} onClick={()=>setDsc(true)}>Show description</Button></Row>}
                {dsc && <Row><Button className="border-0" style={{backgroundColor:'#A7C957', color:'black'}} onClick={()=>setDsc(false)}>Hide description</Button></Row>}
                {dsc && <MDBCardText className='text-light'>
                  {pinfo.description}
                </MDBCardText>}
              </MDBCardBody>
            </MDBCard></Container><Navbar/><Navbar/><Navbar/><Navbar/><Navbar/><Navbar/>
            {props.upid && props.upid.length === 0 && <PlantNavbar i1={<Home/>} i3={<AddToPlants add={2} id={props.id} photo={props.photo} addP={props.addP}/>}/>}
            {props.upid && props.upid.length !== 0 && <PlantNavbar i1={<Home/>} i3={<Delete deletePID={props.deletePID} plant={pinfo}/>} />}
            </>);
  }
  
function Added(props) {
    return(<><Navbar/><Navbar/>
    <Container style={{textAlign:'center'}}><h1>Added!</h1></Container>
    <Container><MDBCard>
    <MDBCardImage src={pinfo.photo} position='top' alt='...' />
    <MDBCardText>{props.name} was added to My Plants :)</MDBCardText>
    </MDBCard></Container>          
    <PlantNavbar i1={<Home/>} i2={<MyPlantsButton/>} i3={<UndoButton/>}/>
    </>);
  }

function Deleted(props) {

    return(<><Navbar/><Navbar/>
    <Container style={{textAlign:'center'}}><h1>Deleted!</h1></Container>
    <Container><MDBCard>
    <MDBCardImage src={p.photo} position='top' alt='...' />
    <MDBCardText>{p.name} is no longer in My Plants :(</MDBCardText>
    </MDBCard></Container>          
    <PlantNavbar i1={<Home/>} i3={<MyPlantsButton/>}/>
    </>);
  }
  
  function Delete(props) {
    const navigate = useNavigate();
    return(
    <div style={{textAlign:'center'}}>
            <h6 onClick={()=>{p=props.plant; props.deletePID(props.plant.id); navigate('/undone2')}}>
            <i style={{color:'black', fontSize:28}} className='bi bi-dash-circle'/>
            <br></br>Delete plant
            </h6>
        </div>
    );
  }
  
  

export default PlantCard;