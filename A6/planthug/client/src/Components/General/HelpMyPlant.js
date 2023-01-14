import PlantNavbar from "./ForumNavbar";
import { useState } from "react";
import React from "react";
import { GearFill, Search, ReplyFill } from "react-bootstrap-icons";
import NewPostButton from '../Buttons/newPost';
import HomeButton from '../Buttons/home';
import {
  Container,
  Offcanvas,
  Row,
  Col,
  Button,
  Form,
  Card,
  Navbar,
} from "react-bootstrap";
import ForumButton from "../Buttons/forumButton";

function HelpMyPlant() {
  return (
    <Container>
      <br></br>
            <Row>
                <Col xs={1} style={{ textAlign: 'left' }}>
                    <ReplyFill size={28} color="black" />
                </Col>
                <Col xs={10} style={{ textAlign: 'center' }}>
                    <h3>Forum > Help my plant</h3>
                </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>

      <div style={{ textAlign: "center" }}>
        <Container>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <Search />
            </Button>
          </Form>
          <br></br>
          <br></br>
        </Container>
      </div>
      <br></br>
      <Card style={{ width: "18rem" }} >
        <Card.Body>
          <Card.Title>Post title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Username</Card.Subtitle>

          
            <ReplyFill size={28} color="black" />
            number#
          
        </Card.Body>
      </Card>
      
      <Navbar position='absolute' fixed="bottom" style={{backgroundColor:'#F2E8CF'}}>
              <Container style={{justifyContent:'center'}}>
                <Row >
                  <Col xs>
                  <ForumButton/>
                  </Col>
                  <Col xs>
                  <HomeButton/>

                  </Col>
                  <Col xs>
                  <NewPostButton/>

                  </Col>
                </Row>
              </Container>
            </Navbar>
    </Container>
  );
}

export default HelpMyPlant;
