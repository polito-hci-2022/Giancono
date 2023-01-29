import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import HomeButton from '../Buttons/home';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Navbar,
  InputGroup,
  Modal
} from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText
} from 'mdb-react-ui-kit';
import TitleBar from '../General/Titlebar';
import { ReplyFill, XCircleFill } from "react-bootstrap-icons";

import {getReplies, getPosts, addReplies} from '../../API'

function Post(props) {

  const {id} = useParams();

  const [reply, setReply] = useState(0);
  const [body, setBody] = useState("");
  const [post, setPost] = useState({});
  const [authorReply, setAuthorReply] = useState("");
  const [replies, setReplies] = useState([])
  const [alert, setAlert] = useState(0)

  
  const handleGetPosts = async () => {
    try{
      let posts = await getPosts();
      const _post = posts.filter((e)=> e.id===id)
      setPost(_post[0])
    }catch(err){
      console.log(err)
    }
  }

  const handlegetReplies = async () =>{
    try{
      const r = await getReplies(id)
      //
      
    
      const x = r[0].replies
      // eslint-disable-next-line
      if(r[0].replies != '[]'){
        setReplies(JSON.parse(x))
      } else { 
        setReplies([])
  
      }
    
      
    } catch(err) {

      console.log(err)
    }
    

  }

  const handleAddReply = async (author)=>{
    try{

      //const r = [...replies]
      replies.push({body: body, author: author})
  
      await addReplies(replies, id)
      await handlegetReplies()
      setReply(0)
      setAlert(1)
      }catch(err){
      console.log(err)
      setAlert(2)
    }
  }

  const handleDeleteReply = async (reply) => {

    let newReplies = [...replies]
    newReplies = newReplies.filter((e)=> e.author!==reply.author || e.body!==reply.body)
    try{
    await addReplies(newReplies, id)
    await handlegetReplies()
    setAlert(3)
    } catch(err){
      console.log(err)
      setAlert(2)
    }
  }

    useEffect(()=>{
      handleGetPosts();
      handlegetReplies();
      // eslint-disable-next-line
    }, [props])
    return (
      <Container>
        <Container>
          {alert===1 && <Modal size="sm" show = {alert} onHide={() => setAlert(0)} aria-labelledby="example-modal-sizes-title-sm">
            <Modal.Body>Reply sent correctly! Click anywhere to continue</Modal.Body> 
          </Modal>}
          {alert===2 && <Modal size="sm" show = {alert} onHide={() => setAlert(0)} aria-labelledby="example-modal-sizes-title-sm">
            <Modal.Body>There was a problem, refresh the page</Modal.Body> 
          </Modal>} 
          {alert===3 && <Modal size="sm" show = {alert} onHide={() => setAlert(0)} aria-labelledby="example-modal-sizes-title-sm">
            <Modal.Body>Reply deleted correctly! Click anywhere to continue</Modal.Body> 
          </Modal>} 

        <TitleBar name={`${post.title}`} arrow={true}/></Container>
        <div>
          <Container>
            <MDBCard style={{backgroundColor:'#386641'}} className='text-white mb-3'>
              <MDBCardBody>
              <MDBCardText><b>{post.author}:</b></MDBCardText>
              <MDBCardText><div>{post.body}</div></MDBCardText>
              <MDBCardText><Button style={{backgroundColor:'#A7C957', color:'black'}} onClick={()=>{setReply(1); setAuthorReply(post.author)}} className="border-0">Reply</Button> </MDBCardText>
              </MDBCardBody>
            </MDBCard>      
          </Container>
        </div>
         
        {
        (replies.length===0 && reply===0)
          ? 
          <Container>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h4 style={{textAlign:'center', color:'gray'}}>No replies to this post</h4></Container> 
          :
          replies.map((reply)=>{
            return (

              <Container key={reply} overflow-y="scroll">
                <MDBCard style={{backgroundColor:'#6A994E'}} className='text-white mb-3'>
                  <MDBCardBody>
                  <MDBCardText><b>{reply.author}:</b><div >{reply.body}</div></MDBCardText>
                  <Row>
                    <Col>
                    <Button style={{backgroundColor:'#A7C957', color:'black'}} onClick={()=>{setReply(1); setAuthorReply(reply.author); setBody(reply.author)}} className="border-0">Reply</Button>
                    </Col>
                    <Col>
                    <Button style={{color:'black'}} onClick={()=>handleDeleteReply(reply)} variant='danger'>Delete</Button>
                    </Col>
                

                  </Row>
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
              {authorReply !== '' ? <Form.Control as="textarea" aria-label="With textarea" defaultValue={`@${authorReply}`}/> : <Form.Control as="textarea" aria-label="With textarea"/>}
            </InputGroup>
            <Navbar/>
            <Button onClick={()=>{handleAddReply("aloelover")}}variant="danger">Send reply</Button>
          </Container> : <></>
        }<Navbar/><Navbar/><Navbar/><Navbar/><Navbar/><Navbar/><Navbar/>
        <Navbar position='absolute' fixed="bottom" style={{backgroundColor:'#F2E8CF'}}>
          <Container style={{justifyContent:'center'}}>
            <Row >
              <Col xs>
                <HomeButton/>
              </Col> 
              <Col/> 
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
              </Col> }
              
            </Row>
          </Container>
        </Navbar>
       

      </Container>
    );
  
  
}

export default Post;
