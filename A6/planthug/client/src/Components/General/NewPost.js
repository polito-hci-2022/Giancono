import { useState } from "react";
import React from "react";
import { Search, ReplyFill, FileEarmarkBreak, House } from "react-bootstrap-icons";
import NewPostButton from "../Buttons/newPost";
import { IoArrowBack } from "react-icons/io5";

import HomeButton from "../Buttons/home";
import GotoPreview from "../Buttons/goToPreview";
import AddPost from "../Buttons/addPost";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  Navbar,
  InputGroup,
  Alert,
  Modal
} from "react-bootstrap";
import ForumButton from "../Buttons/forumButton";
import TitleBar from '../General/Titlebar';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardSubTitle,
} from 'mdb-react-ui-kit';
import {PlusCircle} from 'react-bootstrap-icons';
import { Navigate, useNavigate } from "react-router-dom";

function NewPost(props) {
  const [preview, setPreview] = useState(0);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Help my plant");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Franchino");
  const [sure, setSure] = useState(0)
  const [alert, setAlert] = useState(0)

  const navigate = useNavigate();


  const handleSubmit = (event) => {
    const post = { body, author, title, category };
    props.handleAddPost(post);
    navigate('/forum/posted')
  };

  const handleModal = () =>{
    setSure(0)
    navigate('/')
    
  }

  const handleGoToPreview = () =>{
    if(title !== '' && body !== ''){
      setPreview(!preview)
    } else {
      setAlert(1)
    }
  }

  if (!preview) {
    return (
      <Container>
        <TitleBar name='New post' arrow={true}></TitleBar>
        
        {alert===1 && <Alert variant='warning' onClose={()=>setAlert(0)}dismissible>Fill in all the required inputs</Alert>} 
        <br></br>
        <br></br>
        <h4>Post title:</h4>
        <Form className="d-flex" onChange={event => setTitle(event.target.value)}>
          <Form.Control placeholder={title} className="me-2" />
        </Form>
        <br></br>
        <h4>Category:</h4>
        <Form.Select size="md" onChange={event => setCategory(event.target.value)}>
          <option>Help my plant</option>
          <option>Plant's reviews</option>
          <option>Accessories for your plant</option>
          <option>Others</option>
        </Form.Select>
        <br></br>
        <h4>Post body:</h4>
        <InputGroup onChange={event => setBody(event.target.value)}>
          <Form.Control
            placeholder={body}
            as="textarea"
            aria-label="With textarea"
          />
        </InputGroup>
        
        <Navbar
          position="absolute"
          fixed="bottom"
          style={{ backgroundColor: "#F2E8CF" }}
        >
          <Container style={{ justifyContent: "center" }}>
            <Row>
              <Col xs>
                <HomeButton />
              </Col>
              <Col xs>
                <div style={{ textAlign: "center" }}>
                  <h6>
                    <FileEarmarkBreak size={28} color="black" onClick={() => handleGoToPreview()}/>
                    <br></br>Go to Preview
                  </h6>
                </div>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </Container>
    );
  }else{
    return (

      <Container>
        {preview}
        <TitleBar name='Preview' ></TitleBar>
        <br></br>
        <h4>Do you want to post this?</h4>
        <br></br>

          <MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'>
            <MDBCardBody>
              <MDBCardTitle>{title}</MDBCardTitle>
              <MDBCardText><div>Category: {category}</div></MDBCardText>

                <MDBCardText style={{backgroundColor:'white', paddingLeft: '0.8rem', paddingRight: '0.8rem'}} className='text-black mb-3 rounded'><div>{body}</div></MDBCardText>
            </MDBCardBody>
          </MDBCard> 

          <Button  onClick={()=>{handleSubmit(); }} variant={"danger"} >
            <PlusCircle size={20} /> Post it!
          </Button>
          
        <Navbar
          position="absolute"
          fixed="bottom"
          style={{ backgroundColor: "#F2E8CF" }}>
          <Container style={{ justifyContent: "center" }}>
            <Row>
              <Col xs>
                <IoArrowBack size={28} onClick={()=>{setPreview(0)}}/>
                <p>back</p>  
                
              </Col>
              <Col xs>
                <Modal size="sm" show = {sure} onHide={() => setSure(0)} aria-labelledby="example-modal-sizes-title-sm">
                  <Modal.Body><b>Are you sure? Your post will be deleted</b></Modal.Body> 
                  <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setSure(0)}>No, remain here</Button>
                    <Button variant="danger" onClick={()=>handleModal()}>Confirm</Button>
                  </Modal.Footer>
                </Modal>
                <div style={{textAlign:'center'}}>
                  <h6>
                  <House size={28} onClick={() => setSure(1)}/>
                  <br></br>Home
                  </h6>
                </div>
              </Col>
              <Col xs>
                
              
              </Col>
            </Row>
          </Container>
        </Navbar>
      </Container>
    );
  }
}

export default NewPost;
