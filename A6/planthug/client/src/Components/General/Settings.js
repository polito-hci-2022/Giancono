import { useState } from 'react';
import {GearFill, Moon, Person, Headset, QuestionCircle} from 'react-bootstrap-icons';
import TitleBar from './Titlebar';
import { Container, Offcanvas, Row, Col} from 'react-bootstrap';



const SettingsPopup = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(

    <>   
        <Row>
            <Col xs={1} style={{textAlign:'left'}}>
                <GearFill onClick={handleShow} size={25}/>
            </Col>
            <Col xs={10} style={{textAlign:'center'}}>
            </Col>
        </Row>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Settings</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <br></br>
            <br></br>
            <Container style={{width:'260px', height:'60px', borderRadius:'50px', backgroundColor:'#e6e6e6', textAlign:'center'}}>
                <Row style={{justifyContent:'center', paddingTop:'5%'}}>
                    <Col xs={2}>
                        <Moon size={30}/>
                    </Col>
                    <Col xs={8}>
                        <h1>Dark Mode</h1>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
            <Container style={{width:'260px', height:'60px', borderRadius:'50px', backgroundColor:'#e6e6e6', textAlign:'center'}}>
                <Row style={{justifyContent:'center', paddingTop:'5%'}}>
                    <Col xs={2}>
                        <Person size={30}/>
                    </Col>
                    <Col xs={8}>
                        <h1>Account</h1>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
            <Container style={{width:'260px', height:'60px', borderRadius:'50px', backgroundColor:'#e6e6e6', textAlign:'center'}}>
                <Row style={{justifyContent:'center', paddingTop:'5%'}}>
                    <Col xs={2}>
                        <Headset size={30}/>
                    </Col>
                    <Col xs={8}>
                        <h1>Support</h1>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
            <Container style={{width:'260px', height:'60px', borderRadius:'50px', backgroundColor:'#e6e6e6', textAlign:'center'}}>
            <Row style={{justifyContent:'center', paddingTop:'5%'}}>
                    <Col xs={2}>
                        <QuestionCircle size={30}/>
                    </Col>
                    <Col xs={8}>
                        <h1>About Us</h1>
                    </Col>
                </Row>
            </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
);}


export default SettingsPopup;