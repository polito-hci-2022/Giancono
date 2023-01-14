import { Container, Offcanvas, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import React from 'react';
import HMP from './HMP';
import InfoBox from './info';
import {GearFill} from 'react-bootstrap-icons';
import PlantNavbar from './PlantNavbar';
import TitleBar from './Titlebar';
import ForumButton from '../Buttons/forumButton';
import SuggestionsButton from '../Buttons/suggestionsButton';
import RecognizeButton from '../Buttons/recognizeButton';



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
            <PlantNavbar i1={<ForumButton/>} i2={<SuggestionsButton/>} i3={<RecognizeButton/>}/>
        </Container>
        
    );
}




export default Homepage;


