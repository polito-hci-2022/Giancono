import { useState } from "react";
import React from "react";
import { Search, ReplyFill, FileEarmarkBreak } from "react-bootstrap-icons";
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
} from "react-bootstrap";
import ForumButton from "../Buttons/forumButton";

function NewPost() {
  const [preview, setPreview] = useState(1);
  const [title, setTitle] = useState("LE SARDE");
  const [category, setCategory] = useState("pesci");
  const [body, setBody] = useState("le sarde salate");

  if (!preview) {
    return (
      <Container>
        <br></br>
        <Row>
          <Col xs={1} style={{ textAlign: "left" }}>
            <ReplyFill size={28} color="black" />
          </Col>
          <Col xs={10} style={{ textAlign: "center" }}>
            <h1>Create a post</h1>
          </Col>
        </Row>
        <br></br>
        <br></br> <br></br>
        <h4>Post title:</h4>
        <Form className="d-flex">
          <Form.Control placeholder="Type here" className="me-2" />
        </Form>
        <br></br>
        <h4>Category:</h4>
        <Form className="d-flex">
          <Form.Control placeholder="Type here" className="me-2" />
        </Form>
        <br></br>
        <h4>Post body:</h4>
        <InputGroup>
          <Form.Control
            placeholder="Type here your post"
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
                <ForumButton />
              </Col>
              <Col xs>
                <HomeButton />
              </Col>
              <Col xs>
                <div style={{ textAlign: "center" }}>
                  <h6>
                    <FileEarmarkBreak size={28} color="black" onClick={() => setPreview(!preview)}/>
                    <br></br>Go to Preview
                  </h6>
                </div>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </Container>
    );
  } else {
    return (
      <Container>
        <br></br>
        <Row>
          <Col xs={1} style={{ textAlign: "left" }}>
            <ReplyFill size={28} color="black" />
          </Col>
          <Col xs={10} style={{ textAlign: "center" }}>
            <h1>Preview</h1>
          </Col>
        </Row>
        <br></br>
        <br></br> <br></br>
        <h4>Do you want to post this?</h4>
        <Container class="rounded" style={{ backgroundColor: "#A7C957" }}>
          <h4 style={{ textAlign: "center" }}>{title}</h4>
          <Search />
          {category}
          <br></br>
          <Container style={{ backgroundColor: "#A7C957" }}>
            <h7>{body}</h7>
          </Container>
        </Container>
        <Navbar
          position="absolute"
          fixed="bottom"
          style={{ backgroundColor: "#F2E8CF" }}
        >
          <Container style={{ justifyContent: "center" }}>
            <Row>
              <Col xs>
                <IoArrowBack size={28} onClick={() => setPreview(!preview)}>
                  {" "}
                </IoArrowBack>
              </Col>
              <Col xs>
                <HomeButton />
              </Col>
              <Col xs>
                <AddPost />
              </Col>
            </Row>
          </Container>
        </Navbar>
      </Container>
    );
  }
}

export default NewPost;
