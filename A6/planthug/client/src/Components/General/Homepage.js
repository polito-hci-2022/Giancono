import '../../App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React from 'react';
import HMP from './HMP';
import InfoBox from './info';

import PlantNavbar from './PlantNavbar';
import TitleBar from './Titlebar';


function Homepage(){

    return(
        <Container>
            <br></br>
            <div style={{textAlign:'center'}}>
                <TitleBar name='Plant Hug'/>
            </div>
            <br></br>
            <HMP/>
            <br></br>
            <br></br>
            <InfoBox/>
            <PlantNavbar/>
        </Container>
        
    );
}




export default Homepage;


