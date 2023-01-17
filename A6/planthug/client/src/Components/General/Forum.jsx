import PlantNavbar from './ForumNavbar';
import { useState } from 'react';
import React from 'react';
import InfoBox from './info';
import { GearFill, StarFill, QuestionCircleFill, Search, ReplyFill, CartPlusFill } from 'react-bootstrap-icons';
import { Container, Offcanvas, Row, Col, Button, Form } from 'react-bootstrap'
import TitleBar from '../General/Titlebar';


function Forum() {

    return (
        <Container>
            <br></br>
            <TitleBar name='Forum'></TitleBar>
            <br></br>
            <br></br>
            <br></br>


                <Container>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success"><Search /></Button>
                    </Form>
                    <br></br>
                    <br></br>
                    <h4>Topics:</h4>

                    <Row>
                        <Button size="lg" style={{ backgroundColor: '#386641' }} class="rounded-pill" href="/helpmyplant">
                            <GearFill/>⠀Help my plant</Button>
                    </Row>
                    <br></br>

                    <Row>
                        <Button size="lg" style={{ backgroundColor: '#386641' }} class="rounded-pill" ><StarFill></StarFill>
                        ⠀Plant's reviews</Button>
                    </Row>
                    <br></br>

                    <Row>
                        <Button size="lg" style={{ backgroundColor: '#386641' }} class="rounded-pill" >                        <CartPlusFill></CartPlusFill>
                        ⠀Accessories for your plant</Button>
                    </Row>
                    <br></br>

                    <Row>
                        <Button size="lg" style={{ backgroundColor: '#386641' }} class="rounded-pill" ><QuestionCircleFill></QuestionCircleFill>
                        ⠀Others</Button>
                    </Row>




                </Container>


            <PlantNavbar />
        </Container>

    );
}




export default Forum;