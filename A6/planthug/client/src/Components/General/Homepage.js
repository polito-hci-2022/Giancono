import { Container, Offcanvas, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import React from 'react';
import HMP from './HMP';
import InfoBox from './info';
import {GearFill} from 'react-bootstrap-icons';
import PlantNavbar from './PlantNavbar';
import TitleBar from './Titlebar';



const SettingsPopup = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(

    <>   
        <Row>
            <Col xs={1} style={{textAlign:'left'}}>
                <GearFill onClick={handleShow}size={25}/>
            </Col>
            <Col xs={10} style={{textAlign:'center'}}>
                <h1>Plant Hug</h1>
            </Col>
        </Row>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
);}
    
    

function Homepage(){

    return(
        <Container>
            <br></br>
        
            <SettingsPopup/>


            <div style={{textAlign:'center'}}>
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


