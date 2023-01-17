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
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardSubTitle,
} from 'mdb-react-ui-kit';
import TitleBar from '../General/Titlebar';

import ForumButton from "../Buttons/forumButton";
import { Navigate } from "react-router-dom";

function HelpMyPlant() {

  const [posts, setPosts] = useState({});
  const [post, setPost] = useState({});


  return (
    <Container>
      <br></br>
      <TitleBar name='Forum > Help my plant'></TitleBar>
      <Container>
        <Form className="d-flex">
          <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"/>
          <Button variant="outline-success">
            <Search />
          </Button>
        </Form>
      <br></br>
      <br></br>
      </Container>
        <div style={{ textAlign: "center" }}>
      <Container>
                <MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'>
                  <MDBCardBody>
                  <MDBCardTitle>Why is my echinocactus grusonii going limp?</MDBCardTitle>
                  <MDBCardText><div>Posted by kevin</div></MDBCardText>
                  <MDBCardText><Button style={{backgroundColor:'#A7C957'}} onClick={()=>{Navigate('/post')}} className="border-0">
                    See post</Button> </MDBCardText>
                  </MDBCardBody>
                </MDBCard>      
        </Container>
        <Container>
                <MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'>
                  <MDBCardBody>
                  <MDBCardTitle>Why is my echinocactus grusonii going limp?</MDBCardTitle>
                  <MDBCardText><div>Posted by kevin</div></MDBCardText>
                  <MDBCardText><Button style={{backgroundColor:'#A7C957'}} onClick={()=>{Navigate('/post')}} className="border-0">
                    See post</Button> </MDBCardText>
                  </MDBCardBody>
                </MDBCard>      
        </Container>
        <Container>
                <MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'>
                  <MDBCardBody>
                  <MDBCardTitle>Why is my echinocactus grusonii going limp?</MDBCardTitle>
                  <MDBCardText><div>Posted by kevin</div></MDBCardText>
                  <MDBCardText><Button style={{backgroundColor:'#A7C957'}} onClick={()=>{Navigate('/post')}} className="border-0">
                    See post</Button> </MDBCardText>
                  </MDBCardBody>
                </MDBCard>      
        </Container>
        <Container>
                <MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'>
                  <MDBCardBody>
                  <MDBCardTitle>Why is my echinocactus grusonii going limp?</MDBCardTitle>
                  <MDBCardText><div>Posted by kevin</div></MDBCardText>
                  <MDBCardText><Button style={{backgroundColor:'#A7C957'}} onClick={()=>{Navigate('/post')}} className="border-0">
                    See post</Button> </MDBCardText>
                  </MDBCardBody>
                </MDBCard>      
        </Container>
        <Container>
                <MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'>
                  <MDBCardBody>
                  <MDBCardTitle>Why is my echinocactus grusonii going limp?</MDBCardTitle>
                  <MDBCardText><div>Posted by kevin</div></MDBCardText>
                  <MDBCardText><Button style={{backgroundColor:'#A7C957'}} onClick={()=>{Navigate('/post')}} className="border-0">
                    See post</Button> </MDBCardText>
                  </MDBCardBody>
                </MDBCard>      
        </Container>
        <Container>
                <MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'>
                  <MDBCardBody>
                  <MDBCardTitle>Why is my echinocactus grusonii going limp?</MDBCardTitle>
                  <MDBCardText><div>Posted by kevin</div></MDBCardText>
                  <MDBCardText><Button style={{backgroundColor:'#A7C957'}} onClick={()=>{Navigate('/post')}} className="border-0">
                    See post</Button> </MDBCardText>
                  </MDBCardBody>
                </MDBCard>      
        </Container>
        <Container>
                <MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'>
                  <MDBCardBody>
                  <MDBCardTitle>Why is my echinocactus grusonii going limp?</MDBCardTitle>
                  <MDBCardText><div>Posted by kevin</div></MDBCardText>
                  <MDBCardText><Button style={{backgroundColor:'#A7C957'}} onClick={()=>{Navigate('/post')}} className="border-0">
                    See post</Button> </MDBCardText>
                  </MDBCardBody>
                </MDBCard>      
        </Container>
        <Container>
                <MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'>
                  <MDBCardBody>
                  <MDBCardTitle>Why is my echinocactus grusonii going limp?</MDBCardTitle>
                  <MDBCardText><div>Posted by kevin</div></MDBCardText>
                  <MDBCardText><Button style={{backgroundColor:'#A7C957'}} onClick={()=>{Navigate('/post')}} className="border-0">
                    See post</Button> </MDBCardText>
                  </MDBCardBody>
                </MDBCard>      
        </Container>



       
      </div>
      <br></br>
      
      
      <Navbar position='absolute' fixed="bottom" style={{backgroundColor:'#F2E8CF'}}>
              <Container style={{justifyContent:'center'}}>
                <Row >
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
