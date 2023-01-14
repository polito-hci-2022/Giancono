import PlantNavbar from './ForumNavbar';
import { useState } from 'react';
import React from 'react';
import InfoBox from './info';
import { GearFill, StarFill, QuestionCircleFill, Search, ReplyFill, CartPlusFill } from 'react-bootstrap-icons';
import { Container, Offcanvas, Row, Col, Button, Form } from 'react-bootstrap'


function Forum() {

    return (
        <Container>
            <br></br>
            <Row>
                <Col xs={1} style={{ textAlign: 'left' }}>
                    <ReplyFill size={28} color="black" />
                </Col>
                <Col xs={10} style={{ textAlign: 'center' }}>
                    <h1>Forum</h1>
                </Col>
            </Row>
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
                        <Button size="lg" style={{ backgroundColor: '#6A994E' }} class="rounded-pill" href="/helpmyplant">
                            <GearFill class="text-dark"/>
                            <a class="text-dark">Help my plan</a></Button>
                    </Row>
                    <br></br>

                    <Row>
                        <Button size="lg" style={{ backgroundColor: '#6A994E' }} class="rounded-pill" ><StarFill></StarFill>
                            Reviews</Button>
                    </Row>
                    <br></br>

                    <Row>
                        <Button size="lg" style={{ backgroundColor: '#6A994E' }} class="rounded-pill" >                        <CartPlusFill></CartPlusFill>
                            Accessories</Button>
                    </Row>
                    <br></br>

                    <Row>
                        <Button size="lg" style={{ backgroundColor: '#6A994E' }} class="rounded-pill" ><QuestionCircleFill></QuestionCircleFill>
                            Others</Button>
                    </Row>




                </Container>


            <PlantNavbar />
        </Container>

    );
}




export default Forum;