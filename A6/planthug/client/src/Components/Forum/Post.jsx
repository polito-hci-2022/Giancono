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
import { ReplyFill , XCircleFill } from "react-bootstrap-icons";

function Post(props) {

  const [reply, setReply] = useState(0);
  const [body, setBody] = useState("");
  const [post, setPost] = useState({author: "kevinuccio", title:"la marratazzu", category:"le pacchere", body:"mi son strappato i peli del culo"});
  const [authorReply, setAuthorReply] = useState("");

  post.replies=[{author:"franco", body:"mamma le pacchere"}]
  
    return (
      <Container>
        <br></br>
        <TitleBar name={`${post.title}`} arrow={true}/>
        <br></br>
        <div>
          <Container>
            <MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'>
              <MDBCardBody>
              <MDBCardText><b>{post.author}:</b></MDBCardText>
              <MDBCardText><div>{post.body}</div></MDBCardText>
              <MDBCardText><Button style={{backgroundColor:'#A7C957'}} onClick={()=>{setReply(1); setAuthorReply(post.author)}} className="border-0">Reply</Button> </MDBCardText>
              </MDBCardBody>
            </MDBCard>      
          </Container>
        </div>
        {(post.replies.length===0 && reply===0)
          ? 
          <Container>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h4 style={{textAlign:'center'}}>no replies to this post :(</h4></Container> 
          :
          post.replies.map((reply)=>{
            return (

              <Container overflow-y="scroll">
                <MDBCard style={{backgroundColor:'#6A994E'}} className='text-white mb-3'>
                  <MDBCardBody>
                  <MDBCardText><b>{reply.author}:</b><div >{reply.body}</div></MDBCardText>
                  <MDBCardText><Button style={{backgroundColor:'#A7C957'}} onClick={()=>{setReply(1); setAuthorReply(reply.author); setBody(reply.author)}} className="border-0">Reply</Button> </MDBCardText>
                  </MDBCardBody>
                </MDBCard>      
              </Container>
            )
          })          
        }
        {
          reply===1
          ? 
          
          <Container position='absolute' style={{position: "sticky"}} >
            <InputGroup  onChange={event => setBody(event.target.value)}>
              <Form.Control
              placeholder={`@${authorReply}`}
              as="textarea"
              aria-label="With textarea"
              //value={`@${authorReply}`}
              />
              
            </InputGroup>
          </Container> : <></>
        }
        <Navbar position='absolute' fixed="bottom" style={{backgroundColor:'#F2E8CF'}}>
          <Container style={{justifyContent:'center'}}>
            <Row >
              <Col xs>
                <HomeButton/>
              </Col> 
              {reply===0 ? <Col xs>
                <div style={{textAlign:'center'}} onClick={()=>{setReply(1)}} >
                  <h6 >
                  <ReplyFill size={28} color='black'/>
                  <br></br>Reply
                  </h6>
                </div>
              </Col> : <Col xs>
                <div style={{textAlign:'center'}} onClick={()=>{setReply(0); setAuthorReply("")}} >
                  <h6 >
                  <XCircleFill size={28} color='black'/>
                  <br></br>Cancel reply
                  </h6>
                </div>
              </Col>}
              
            </Row>
          </Container>
        </Navbar>
       

      </Container>
    );
  
  
}

export default Post;
