import { useState } from "react";
import React from "react";
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
  InputGroup,
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
import { Navigate } from "react-router-dom";

function Post(props) {

  const [reply, setReply] = useState(0);
  const [body, setBody] = useState("");
  const [post, setPost] = useState({});

  post.replies=[{author: "marco", body:"sono marco"},{author: "marzamemi", body:"sono marzamemi"}]

 
    return (
      <Container>
        <br></br>
        <TitleBar name='Forum > Post ID'></TitleBar>
        <br></br>
        <br></br>
        <div>
          <Container>
            <MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'>
              <MDBCardBody>
              <MDBCardTitle >{post.title}</MDBCardTitle>
              <MDBCardText><b>posted by: {post.author}</b><div>{post.author}</div></MDBCardText>
              <MDBCardText><b>category: {post.category}</b><div>{post.category}</div></MDBCardText>
              <MDBCardText><div>{post.body}</div></MDBCardText>
              <MDBCardText><Button style={{backgroundColor:'#A7C957'}} onClick={()=>{setReply(1)}} className="border-0">Reply to {post.author}</Button> </MDBCardText>
              </MDBCardBody>
            </MDBCard>      
          </Container>
        </div>
        <br></br>
        {post.replies.length===0 
          ? 
          <Container>no replies to this post :(</Container> 
          :
          post.replies.map((reply)=>{
            return (

              <Container overflow-y="scroll">
                <MDBCard style={{backgroundColor:'#6A994E'}} className='text-white mb-3'>
                  <MDBCardBody>
                  <MDBCardText><b>{reply.author}:</b><div >{reply.body}</div></MDBCardText>
                  <MDBCardText><Button style={{backgroundColor:'#A7C957'}} onClick={()=>{setReply(1)}} className="border-0">Reply to {post.author}</Button> 
                  </MDBCardText>
                  </MDBCardBody>
                </MDBCard>      
              </Container>
            )
          })          
        }
        {
          reply===1 
          ? <InputGroup onChange={event => setBody(event.target.value)}>
          <Form.Control
            placeholder="type here"
            as="textarea"
            aria-label="With textarea"
          />
        </InputGroup> : 2
        }

        
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
  
  
}

export default Post;
