
import { useEffect, useState } from "react";
import React from "react";
import {Search } from "react-bootstrap-icons";
import NewPostButton from '../Buttons/newPost';
import HomeButton from '../Buttons/home';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Navbar,
  Modal
} from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText
} from 'mdb-react-ui-kit';
import TitleBar from '../General/Titlebar';


import { useNavigate } from "react-router-dom";
import { deletePost } from "../../API";

function HelpMyPlant(props) {
// eslint-disable-next-line
  const [posts, setPosts] = useState()
  const [show, setShow] = useState()
  const [deletedPost, setDeletedPost] = useState()
  
  const navigate = useNavigate();

  useEffect(()=>{
    handleGetPosts()
// eslint-disable-next-line
  }, [])

  const handleGetPosts = async () => {
    try{
      let posts = await props.getPosts()
      setPosts(posts)
    }catch(err){
      console.log(err)
    }
  }
  
  const handleDeletePost = async(id)=>{
    try{
      await deletePost(id)
      await handleGetPosts()
      setShow(0)
    }catch(err){
      console.log(err)
    }

  }

  const handleOpenModal = (id) => {
    setDeletedPost(id)
    setShow(1)
  }

  return (
    <Container>
      <Modal size="sm" style={{color:'#BC4749'}} show = {show} onHide={() => setShow(0)} aria-labelledby="example-modal-sizes-title-sm">
      <Modal.Header>
                    <Modal.Title style={{color:'black'}}>Are you sure?</Modal.Title>
                    </Modal.Header>
                      <Modal.Footer style={{justifyContent:'space-between'}}>
                      <Button style={{backgroundColor: 'gray', color: 'white'}} className='border-0' onClick={() => {setShow(false)}}>No, go back</Button>
            <Button style={{backgroundColor: '#bc4749', color: 'white'}} className='border-white' onClick={() => handleDeletePost(deletedPost)}>Yes, delete it</Button>
                      </Modal.Footer>
      </Modal>
      <TitleBar name='Forum > Help my plant' arrow={true}></TitleBar>
      <Container>
        <br></br>
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
      </Container>
        <div style={{ textAlign: "center" }}> 
        
      {props.posts.map((element)=>{
        return (
          <Container key={element.id}>
                  <MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'>
                    <MDBCardBody>
                    <MDBCardTitle>{element.title}</MDBCardTitle>
                    <MDBCardText><div>Posted by {element.author}</div></MDBCardText>
                    <Button style={{backgroundColor:'#A7C957', color:'black'}} onClick={()=>{navigate(`/forum/post/${element.id}`)}} className="border-0">
                      See post</Button>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button style={{backgroundColor: '#bc4749', color: 'white'}} className='border-0' onClick={()=>handleOpenModal(element.id)}>Delete Post</Button>
                    </MDBCardBody>
                  </MDBCard>      
          </Container>  
        )
      })}

      
        


       
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Navbar position='absolute' fixed="bottom" style={{backgroundColor:'#F2E8CF'}}>
              <Container style={{justifyContent:'center'}}>
                <Row >
                  <Col xs>
                  <HomeButton/>
                  </Col><Col xs/>
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
