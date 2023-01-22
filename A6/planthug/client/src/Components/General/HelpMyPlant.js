import PlantNavbar from "./ForumNavbar";
import { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";

function HelpMyPlant(props) {

  const [posts, setPosts] = useState()

  const navigate = useNavigate();

  useEffect(()=>{
    handleGetPosts()

  }, [])

  const handleGetPosts = async () => {
    try{
      let posts = await props.getPosts()
      setPosts(posts)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <Container>
      <TitleBar name='Forum > Help my plant' arrow={true}></TitleBar>
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

       
      {props.posts.map((element)=>{
        return (
          <Container key={element.id}>
                  <MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'>
                    <MDBCardBody>
                    <MDBCardTitle>{element.title}</MDBCardTitle>
                    <MDBCardText><div>Posted by {element.author}</div></MDBCardText>
                    <Button style={{backgroundColor:'#A7C957'}} onClick={()=>{navigate(`/forum/post/${element.id}`)}} className="border-0">
                      See post</Button>
                    </MDBCardBody>
                  </MDBCard>      
          </Container>  
        )
      })}

      
        


       
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
