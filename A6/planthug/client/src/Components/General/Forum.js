import PlantNavbar from './ForumNavbar';
import { useState } from 'react';
import React from 'react';
import InfoBox from './info';
import { GearFill, StarFill, QuestionCircleFill, Search, ReplyFill, CartPlusFill} from 'react-bootstrap-icons';
import { Container, Offcanvas, Row, Col, Button, Form } from 'react-bootstrap'
import TitleBar from './Titlebar';
import { useNavigate } from 'react-router-dom';


function Forum() {
    const navigate = useNavigate();

    return (
        <Container>
            <TitleBar name='Forum' arrow={true} ></TitleBar>
            <br></br>
            <br></br>
            <br></br>


                <Container>
                    
                    <br></br>
                    <h4>Topics:</h4>
                    <br></br>
                    <Row>
                        <Button size="lg" style={{ backgroundColor: '#386641' }} className="rounded-pill border-0" onClick={()=>{navigate("/helpmyplant")}}>
                            <GearFill/>⠀Help my plant</Button>
                    </Row>
                    <br></br>

                    <Row>
                        <Button size="lg" style={{ backgroundColor: '#386641' }} className="rounded-pill border-0" ><StarFill></StarFill>
                        ⠀Plant's reviews</Button>
                    </Row>
                    <br></br>

                    <Row>
                        <Button size="lg" style={{ backgroundColor: '#386641' }} className="rounded-pill border-0" >                        <CartPlusFill></CartPlusFill>
                        ⠀Accessories for your plant</Button>
                    </Row>
                    <br></br>

                    <Row>
                        <Button size="lg" style={{ backgroundColor: '#386641' }} className="rounded-pill border-0" ><QuestionCircleFill></QuestionCircleFill>
                        ⠀Others</Button>
                    </Row>




                </Container>


            <PlantNavbar />
        </Container>

    );
}




export default Forum;