import { useState } from "react";
import React from "react";
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
import ReplyButton from '../Buttons/replyButton'
import ForumButton from "../Buttons/forumButton";
import { Navigate } from "react-router-dom";

function Post(props) {

  const [post, setPost] = useState({});
  const [reply, setReply] = useState(0);

  if(reply===0){
    return (
      <Container>
        <br></br>
        <TitleBar name='Forum > Post ID'></TitleBar>
        <br></br>
        <br></br>

        <div style={{ textAlign: "center" }}>
        <Container>
                  <MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'>
                    <MDBCardBody>
                    <MDBCardTitle>{post.title}</MDBCardTitle>
                    <MDBCardText><b>posted by: </b><div>{post.author}</div></MDBCardText>
                    <MDBCardText><b>category: </b><div>{post.category}</div></MDBCardText>
                    <MDBCardText><div>{post.body}</div></MDBCardText>
                    <MDBCardText><Button style={{backgroundColor:'#A7C957'}} onClick={()=>{Navigate('/post')}} className="border-0">
                      Reply to {post.author}</Button> </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>      
          </Container>
          <Container>
                  <MDBCard style={{backgroundColor:'#6A994E'}} className='text-white mb-3'>
                    <MDBCardBody>
                    <MDBCardText><b>Marco: </b><div >{post.body}</div></MDBCardText>
                    <MDBCardText><Button style={{backgroundColor:'#A7C957'}} onClick={()=>{Navigate('/post')}} className="border-0">
                      Reply to {post.author}</Button> </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>      
          </Container>
          <Container>
                  <MDBCard style={{backgroundColor:'#6A994E'}} className='text-white mb-3'>
                    <MDBCardBody>
                    <MDBCardText><b>Franco: </b><div>{post.body}</div></MDBCardText>
                    <MDBCardText><Button style={{backgroundColor:'#A7C957'}} onClick={()=>{Navigate('/post')}} className="border-0">
                      Reply to {post.author}</Button> </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>      
          </Container>
          <Container>
                  <MDBCard style={{backgroundColor:'#6A994E'}} className='text-white mb-3'>
                    <MDBCardBody>
                    <MDBCardText><b>Matteo: </b><div >{post.body}</div></MDBCardText>
                    <MDBCardText><Button style={{backgroundColor:'#A7C957'}} onClick={()=>{Navigate('/post')}} className="border-0">
                      Reply to {post.author}</Button> </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>      
          </Container>
          <Container>
                  <MDBCard style={{backgroundColor:'#6A994E'}} className='text-white mb-3'>
                    <MDBCardBody>
                    <MDBCardText><b>Piero: </b><div>{post.body}</div></MDBCardText>
                    <MDBCardText><Button style={{backgroundColor:'#A7C957'}} onClick={()=>{Navigate('/post')}} className="border-0">
                      Reply to {post.author}</Button> </MDBCardText>
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
                    <ReplyButton/>
                    </Col>
                  </Row>
                </Container>
              </Navbar>
      </Container>
    );
  }else{

    

  }
  
}

export default Post;
