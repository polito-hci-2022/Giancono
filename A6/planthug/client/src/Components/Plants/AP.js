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
import TitleBar from '../General/Titlebar';
import PlantNavbar from '../General/PlantNavbar';
import Home from '../Buttons/home';
import AddPlant from '../Buttons/addNew';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MyPlants from './MyPlants';
import MyPlantsButton from '../Buttons/myPlantsButton';
import SuggestionsButton from '../Buttons/suggestionsButton';
import RecognizeButton from '../Buttons/recognizeButton';

let pi;

function AP(props) {
        return (<><Container>
        <TitleBar name='New Plant'></TitleBar>
        </Container>
<Container><MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'><MDBCardImage src='https://wallpaperaccess.com/full/215040.jpg' position='top' alt='...' />
<MDBCardBody><MDBCardTitle style={{backgroundColor:'A7C957', display: 'flex', justifyContent: 'space-between'}}>Cacti
<Button style={{backgroundColor:'#A7C957'}} className='border-0'><i className='bi bi-arrow-right'/></Button>
</MDBCardTitle></MDBCardBody></MDBCard>
</Container>
<Container><MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'><MDBCardImage src='http://www.holoweb.net/liam/pictures/2004-06-norway/pages/cimg1425/cimg1425-2304x1728.jpg' position='top' alt='...' />
<MDBCardBody><MDBCardTitle style={{backgroundColor:'A7C957', display: 'flex', justifyContent: 'space-between'}}>Creepers
<Button style={{backgroundColor:'#A7C957'}} className='border-0'><i className='bi bi-arrow-right'/></Button>
</MDBCardTitle></MDBCardBody></MDBCard>
</Container>
<Container><MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'><MDBCardImage src='https://wallpaperaccess.com/full/1622608.jpg' position='top' alt='...' />
<MDBCardBody><MDBCardTitle style={{backgroundColor:'A7C957', display: 'flex', justifyContent: 'space-between'}}>Flowers
<Button style={{backgroundColor:'#A7C957'}} className='border-0'><i className='bi bi-arrow-right'/></Button>
</MDBCardTitle></MDBCardBody></MDBCard>
</Container>
<Container><MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'><MDBCardImage src='https://i.pinimg.com/originals/8b/f1/fa/8bf1faa953f2e4888fbbaeba5df3d625.jpg' position='top' alt='...' />
<MDBCardBody><MDBCardTitle style={{backgroundColor:'A7C957', display: 'flex', justifyContent: 'space-between'}}>Herbs
<Button style={{backgroundColor:'#A7C957'}} className='border-0'><i className='bi bi-arrow-right'/></Button>
</MDBCardTitle></MDBCardBody></MDBCard>
</Container>
<Container><MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'><MDBCardImage src='https://i.pinimg.com/474x/7a/e5/75/7ae575b21ce1a7baf9430873e46e1f7c--water-plants-winter-garden.jpg' position='top' alt='...' />
<MDBCardBody><MDBCardTitle style={{backgroundColor:'A7C957', display: 'flex', justifyContent: 'space-between'}}>Shrubs
<Button style={{backgroundColor:'#A7C957'}} className='border-0'><i className='bi bi-arrow-right'/></Button>
</MDBCardTitle></MDBCardBody></MDBCard>
</Container>
<Container><MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'>
  <MDBCardImage src='https://getwallpapers.com/wallpaper/full/1/c/a/1036023-free-succulent-wallpapers-2560x1440-hd.jpg' position='top' alt='...' />
<MDBCardBody><MDBCardTitle style={{backgroundColor:'A7C957', display: 'flex', justifyContent: 'space-between'}}>Succulents
<Button style={{backgroundColor:'#A7C957'}} className='border-0'><i className='bi bi-arrow-right'/></Button>
</MDBCardTitle></MDBCardBody></MDBCard>
</Container>
<Navbar/><Navbar/><Navbar/>
        <PlantNavbar i1={<Home/>} i2={<RecognizeButton/>} i3={<SuggestionsButton/>}/>
        </>);

}

export default AP;