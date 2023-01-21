import '../../App.css';
import { Container, Navbar, Button, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import TitleBar from '../General/Titlebar';
import PlantNavbar from '../General/PlantNavbar';
import Home from '../Buttons/home';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MyPlantsButton from '../Buttons/myPlantsButton';
import SuggestionsButton from '../Buttons/suggestionsButton';
import RecognizeButton from '../Buttons/recognizeButton';
import AddToPlants from '../Buttons/addToPlants';
import UndoButton from '../Buttons/undoButton';

let p, cat, pinfo;

function AP(props) {
  const navigate = useNavigate();

  if (props.add) return (<Added name={pinfo.name}/>);
  if (props.cat) {
    return <PlantCategory cat={cat} addP={props.addP} upid={props.upid} getUPID={props.getUPID} p={p}/>
  }
  if (props.pi) {
    return <PlantInfo upid={props.upid} getUPID={props.getUPID} deletePID={props.deletePID} id={pinfo.id} photo={pinfo.photo} addP={props.addP}/>}
  else {
        return (<><Container>
        <TitleBar name='New Plant' arrow={true}/>
        </Container>
<Container><MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'><MDBCardImage src='https://wallpaperaccess.com/full/215040.jpg' position='top' alt='...' />
<MDBCardBody><MDBCardTitle style={{backgroundColor:'A7C957', display: 'flex', justifyContent: 'space-between'}}>Cacti
<Button style={{backgroundColor:'#A7C957'}} className='border-0' onClick={() => {cat='Cacti'; p=props.plants; navigate('/cat');}}><i className='bi bi-arrow-right' style={{color:'black'}}/></Button>
</MDBCardTitle></MDBCardBody></MDBCard>
</Container>
<Container><MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'><MDBCardImage src='http://www.holoweb.net/liam/pictures/2004-06-norway/pages/cimg1425/cimg1425-2304x1728.jpg' position='top' alt='...' />
<MDBCardBody><MDBCardTitle style={{backgroundColor:'A7C957', display: 'flex', justifyContent: 'space-between'}}>Creepers
<Button style={{backgroundColor:'#A7C957'}} className='border-0' onClick={() => {cat='Creepers'; p=props.plants; navigate('/cat');}}><i className='bi bi-arrow-right' style={{color:'black'}}/></Button>
</MDBCardTitle></MDBCardBody></MDBCard>
</Container>
<Container><MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'><MDBCardImage src='https://wallpaperaccess.com/full/1622608.jpg' position='top' alt='...' />
<MDBCardBody><MDBCardTitle style={{backgroundColor:'A7C957', display: 'flex', justifyContent: 'space-between'}}>Flowers
<Button style={{backgroundColor:'#A7C957'}} className='border-0' onClick={() => {cat='Flowers'; p=props.plants; navigate('/cat');}}><i className='bi bi-arrow-right' style={{color:'black'}}/></Button>
</MDBCardTitle></MDBCardBody></MDBCard>
</Container>
<Container><MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'><MDBCardImage src='https://i.pinimg.com/originals/8b/f1/fa/8bf1faa953f2e4888fbbaeba5df3d625.jpg' position='top' alt='...' />
<MDBCardBody><MDBCardTitle style={{backgroundColor:'A7C957', display: 'flex', justifyContent: 'space-between'}}>Herbs
<Button style={{backgroundColor:'#A7C957'}} className='border-0' onClick={() => {cat='Herbs'; p=props.plants; navigate('/cat');}}><i className='bi bi-arrow-right' style={{color:'black'}}/></Button>
</MDBCardTitle></MDBCardBody></MDBCard>
</Container>
<Container><MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'><MDBCardImage src='https://i.pinimg.com/474x/7a/e5/75/7ae575b21ce1a7baf9430873e46e1f7c--water-plants-winter-garden.jpg' position='top' alt='...' />
<MDBCardBody><MDBCardTitle style={{backgroundColor:'A7C957', display: 'flex', justifyContent: 'space-between'}}>Shrubs
<Button style={{backgroundColor:'#A7C957'}} className='border-0' onClick={() => {cat='Shrubs'; p=props.plants; navigate('/cat');}}><i className='bi bi-arrow-right' style={{color:'black'}}/></Button>
</MDBCardTitle></MDBCardBody></MDBCard>
</Container>
<Container><MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'>
  <MDBCardImage src='https://getwallpapers.com/wallpaper/full/1/c/a/1036023-free-succulent-wallpapers-2560x1440-hd.jpg' position='top' alt='...' />
<MDBCardBody><MDBCardTitle style={{backgroundColor:'A7C957', display: 'flex', justifyContent: 'space-between'}}>Succulents
<Button style={{backgroundColor:'#A7C957'}} className='border-0' onClick={() => {cat='Succulents'; p=props.plants; navigate('/cat');}}><i className='bi bi-arrow-right' style={{color:'black'}}/></Button>
</MDBCardTitle></MDBCardBody></MDBCard>
</Container>
<Navbar/><Navbar/><Navbar/>
        <PlantNavbar i1={<Home/>} i2={<RecognizeButton/>} i3={<SuggestionsButton/>}/>
        </>);
}

}

function PlantCategory(props) {
  return (<>
    <Container><TitleBar name={props.cat} arrow={true}/></Container>
    {props.p.filter(plant => plant.category === cat).map((plant) =><PlantCard addP={props.addP} upid={props.upid} getUPID={props.getUPID} plant={plant}/>)}
    <Navbar/><Navbar/><Navbar/><Navbar/><Navbar/><Navbar/>
    <PlantNavbar i1={<Home/>} i3={<MyPlantsButton/>}/></>
  );
}

function PlantCard(props) {
  let navigate = useNavigate();

  return(<>
  <Container>
  <MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'><MDBCardImage src={props.plant.photo}/>
    <MDBCardBody><MDBCardTitle>{props.plant.name}</MDBCardTitle><Row>
    <Col><Button className="border-0 text-black" style={{backgroundColor:'#A7C957' }} onClick={()=>{pinfo=props.plant; props.getUPID(pinfo.id); navigate('/plantinfo1')}}><i style={{color:'black'}} className='bi bi-info-circle-fill'/>  See more</Button></Col>
    <Col><Button onClick={() => {pinfo=props.plant; props.addP(props.plant.id, props.plant.photo); navigate('/added')}} className="border-0 text-black" style={{backgroundColor:'#A7C957' }}><i style={{color:'black'}} className='bi bi-plus-circle-fill'/>  Add plant</Button></Col>
    </Row></MDBCardBody>
  </MDBCard><Navbar/></Container>
  </>);
}

function PlantInfo(props){
        
  const[dsc,setDsc] = useState(false); console.log(props.upid);
  
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
          {props.upid && props.upid.length === 0 && <PlantNavbar i1={<Home/>} i3={<AddToPlants add={1} id={props.id} photo={props.photo} addP={props.addP}/>}/>}
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

function Delete(props) {
  const navigate = useNavigate();
  return(
  <div style={{textAlign:'center'}}>
          <h6 onClick={()=>{p=props.plant; props.deletePID(props.plant.id); navigate('/undone1')}}>
          <i style={{color:'black', fontSize:28}} className='bi bi-dash-circle'/>
          <br></br>Delete plant
          </h6>
      </div>
  );
}

export default AP;